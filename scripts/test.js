import http from 'k6/http'
export default () => {
    http.get('http://httpbin.org/get')
}