import axios from 'axios'
export
 function request(config) {
    const instance1 = axios.create({
        baseURL: '/api',
        timeout: 30000
    });
    instance1.interceptors.request.use(
        config => {
            return config
        }, err => {
            console.log(err);
        }
    );
    instance1.interceptors.response.use(
        res => {
            return res.data
        }, err => {
            console.log(err);
        }
    )
    return instance1(config)
}