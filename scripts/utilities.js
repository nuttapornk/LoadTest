import http from 'k6/http';

export function getAccessToken() {
    // const url = 'https://api.example.com/token';
    // const payload = JSON.stringify({
    //     username: 'NuttapornK',
    //     password: 'P@ssw00rd',
    // });
    // const params = {
    //     headers: {
    //         'Content-Type': 'application/json',
    //     }
    // };
    // let res = http.post(url, payload, params);
    // const access_token = res.json('access_token');

    const access_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODI2MTY5OTcsImlzcyI6ImFnLXRva2VuIiwibmFtZSI6ImFyZWVnYXRvciIsInJpZCI6ImM4ZmVmYjcxLWU2YjctNDVkZC1iMWE4LWM3N2YyY2RjNjExMCIsInJvbGVfaWQiOiIiLCJzaWQiOiIiLCJzdWIiOjE5MX0.raDCg8z5pW77SLvqjKYRmMg-9i75UQ8mixQIgNd_HV0";
    return access_token;


}