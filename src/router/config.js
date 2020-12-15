export default {
    routes: [
        {
            path:'/',
           redirect: '/login'
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
                    component:()=>import('@/components/home/homeMain'),
                    
                }],
                meta:{
                    tx:1
                }
            },
            {
                path: 'roadtrip',
                name: 'roadtrip',
                component: () => import('@/views/RoadTrip.vue'),
                meta:{
                    tx:2
                }
            },
            {
                path:'customer',
                name:'customer',
                component:()=>import('@/views/CustomerService.vue'),
                meta:{
                    tx:3
                }
            },
            {
                path:'mine',
                name:'mine',
                component:()=>import('@/views/Mine.vue'),
                meta:{
                    tx:4
                }
            }
          ],
         
        },
        {
            path:'/election',
            name:'election',
            component:()=>import('@/components/electioncity/electioncity'),
          
          
        },  
        {
            path:'/login',
            name:'login',
            component:()=>import('@/views/login'),
          
        },
        {
            path:'/discover',
            name:'discover',
            component:()=>import('@/components/discover/discover'),
            redirect: '/discover/details',
            children:[
                {
                    path:'/discover/details',
                    name:'details',
                    component:()=>import('@/components/discover/details'),
                    meta:{
                        keepAlive:false //需要被缓存的组件
                     },
                
                },
                {
                    path:'/discover/recommend',
                    name:'recommend',
                    component:()=>import('@/components/discover/recommend')
                },
                {
                    path:'/discover/farmwagon',
                    name:'detailsfarmwagon',
                    component:()=>import('@/components/discover/farmwagon')
                }
            ],
         
        },
        {
            path:'/saypage/:id',
            name:'saypage',
            component:()=>import('@/components/discover/say-page.vue'),
            meta:{
                keepAlive:false //不需要被缓存的组件
             },
        }
        

    ]
}