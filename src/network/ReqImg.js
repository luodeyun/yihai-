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
export function recommend(count){
    return request({
        methods:'get',
        url:'/recommendyj',
        params:{count}
    })
   
    
}
