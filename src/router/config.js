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
          ],
          meta:{
              keepAlive:true
          },
        },
        {
            path:'/election',
            name:'election',
            component:()=>import('@/components/electioncity/electioncity'),
            meta:{
                keepAlive:false
            },
          
        },  
        {
            path:'/login',
            name:'login',
            component:()=>import('@/views/login'),
            meta:{
                keepAlive:false
            },
        },
        {
            path:'/discover',
            name:'discover',
            component:()=>import('@/components/discover/discover'),
            children:[
                {
                    path:'/discover/details',
                    name:'details',
                    component:()=>import('@/components/discover/details'),
                   
                
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
            ]
        },
        {
            path:'/saypage/:id',
            name:'saypage',
            component:()=>import('@/components/discover/say-page.vue'),
            meta:{
                keepAlive:true
            }
        }
        

    ]
}