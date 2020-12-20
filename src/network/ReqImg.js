import {request} from './request'
export function getimg(){
    return request({
        url:'/img/',  
    })
}
export function getyj(){
    return request({
        url:'/youji'
    })
}
export function recommend(){
    return request({
        methods:'get',
        url:'/recommendyj',
    })
}
export function recommendxq(id){
    return request({
        methods:'get',
        url:'/recommendxq',
        params:{id}
    })
}
