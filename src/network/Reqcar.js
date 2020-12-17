import {request} from './request'
export function reqcar(){     //获取全部发现详情页
    return request({
        url:'/car/'
    })
}
