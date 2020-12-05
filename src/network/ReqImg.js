import {request} from './request'
export function getimg(){
    return request({
        url:'/img/',
        
    })
}