import {request} from './request'
export function reqdiscover(){
    return request({
        url:'/discover/'
    })
}
