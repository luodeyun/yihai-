import {request} from './request'
import qs from 'qs'
export function login(){ //验证码
    return request({
        url:'captcha'
    })
}
export function signdown(mobiephone,password,svg){ //登录
    return request({
        method:'POST',
        url:'/login',
        data:qs.stringify({phone:mobiephone,password:password,code:svg}),
    })
}
export function registerdown(nick_name,phone, password, re_password, code){ //注册
    return request({
        method:'POST',
        url:'/register',
        data:qs.stringify({nick_name,phone, password, re_password, code}),
    })
}