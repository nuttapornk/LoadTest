import http from 'k6/http';
import urlencode from 'https://jslib.k6.io/form-urlencoded/3.0.0/index.js';

export default function () {
    const url = 'https://httpbin.test.k6.io/anything';
    const body = urlencode({
        'grant_type': 'password',
        'client_id': 'areegator',
        'username': 'NuttapornK',
        'password': 'P@ssw00rd',
        'scope': 'areegator-role profile'
    });
    const params = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'environment': 'dev'
        }
    };

    let resp = http.post(url, body, params);
    console.log(resp.body);
};