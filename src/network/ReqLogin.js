import {request} from './request'
import qs from 'qs'
export function login(){
    return request({
        url:'captcha'
    })
}
export function signdown(mobiephone,password,svg){
    return request({
        method:'POST',
        url:'/login',
        data:qs.stringify({phone:mobiephone,password:password,code:svg}),
       
    })
}