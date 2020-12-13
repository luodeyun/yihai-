import {request} from './request'
export function reqdiscover(){     //获取全部发现详情页
    return request({
        url:'/discover/'
    })
}
export function req_imgUrl(operationId){
return request({
    methods:'get',
    url:'/cover/',
    params:{
        operationId:operationId
    }
})
}