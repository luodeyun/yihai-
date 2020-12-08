export default {
    routes: [
        {
            path:'/',
           redirect: '/main/home'
        },
        {
           path:'/main',
           name:'main',
           component:()=>import('@/views/Main'),
           children:[
            {
                path: 'home',
                name: 'home',
                component: () => import('@/views/Home.vue'),
                children:[{
                    path:'sea',
                    name:'sea',
                    component:()=>import('@/components/sea/sea.vue')
                },
                {
                    path:'homemain',
                    name:'homemain',
                    component:()=>import('@/components/home/homeMain')
                }]
            },
            {
                path: 'roadtrip',
                name: 'roadtrip',
                component: () => import('@/views/RoadTrip.vue')
            },{
                path:'customer',
                name:'customer',
                component:()=>import('@/views/CustomerService.vue')
            },{
                path:'mine',
                name:'mine',
                component:()=>import('@/views/Mine.vue')
            }
          ]
        },
        {
            path:'/election',
            name:'election',
          
        },      
    ]
}