export default {
    routes: [{
            path: '/',
            name: 'home',
            component: () => import('@/views/Home.vue')
        },
        {
            path: '/roadtrip',
            name: 'roadtrip',
            component: () => import('@/views/RoadTrip.vue')
        },{
            path:'/customer',
            name:'customer',
            component:()=>import('@/views/CustomerService.vue')
        },{
            path:'/mine',
            name:'mine',
            component:()=>import('@/views/Mine.vue')
        }
    ]
}