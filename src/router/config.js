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
                component: () => import('@/views/Home.vue')
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
            component:()=>import('@/components/electioncity')
        }
       
    ]
}