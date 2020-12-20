import axios from 'axios'
export function request(config) {
    const instance1 = axios.create({
        baseURL: '/api',
        timeout: 30000
    });
    instance1.interceptors.request.use(
        config => {
           
            if(localStorage.getItem("tokenKey")){
            return config
        }
            return config
        },err => {
            console.log(err,'请求错误');
        }
    );
    instance1.interceptors.response.use(
        res => {
            if(res.data.tokenKey){  
                localStorage.setItem("tokenKey", res.data.tokenKey);
             
                return res.data
                // store.commit('sertoken',res.data.tokenKey )
            }else{
            return res.data}
        }, err => {
            Promise.reject(err)
        }
    )
    return instance1(config)
}