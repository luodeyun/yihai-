import Vue from 'vue'
import VueRouter from 'vue-router'
import config from "./config";
Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
const router = new VueRouter(config)
router.beforeEach((to,from,next)=>{
    console.log(to.meta.requireAuth,'222');
    if(to.meta.requireAuth){
        if(localStorage.getItem('tokenKey')){
           
            next()
        }
      else{
        next({path:'/login'})
    }}
    else {next()}
})
export default router