import http from "k6/http";
import { check, sleep } from "k6";
import { getAccessToken } from "../utilities.js";

let access_token = null;

function setup() {
    access_token = getAccessToken();
}

export let options = {
    vus: 10,
    duration: '10s',
    thresholds: {
        'http_req_duration': ['p(95) < 500'], // 95% of requests should be below 500ms
        'http_req_failed': ['rate < 0.01'],// http errors should be less than 1%
    }
};

export default function () {
    if (!access_token) {
        setup();
    }

    const url = "https://dev.areegator.com/api/agent/v1/AgentProfile/v1/validatecitizenid"

    const payload = JSON.stringify({
        empid: 'register',
        idcard: '1600100223837',
    });

    const params = {
        headers: {
            'content-type': 'application/json',
            'forward': '127.0.0.1',
            'origin': 'https://dev.areegator.com',
            'refer': 'no user',
            'sender': 'areegator',
            'authorization': `Bearer ${access_token}`
        }
    }

    const res = http.post(url, payload, params);
    const responseBody = JSON.parse(res.body);
    check(res, {
        "status is 200": (r) => r.status === 200,
        'data is true': (r) => responseBody.data == true
    });
    sleep(1);
}