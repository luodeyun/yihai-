# yihai

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```https://github.com/luodeyun/yihai-.git

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
项目遇到的问题：
 1.为了保持路由状态 给路由组件(相当全局)其父亲加meta:{keepAlive:false} 属性 
   当跳转到需要保持状态的组件时 在父亲加生命周期钩子beforeRouterleave 判断是否跳转的组件为需要保存状态的组件，
   若需要则加this.$router.meta.keepAlive=true 跳转的路由不需要保持状态则加this.$router.meta.keepAlive=false
   并且在全局的<router-view/>加判断  v-if:(this.$router.meta=true)判断 具体代码如下
   顶级APP组件
    <keep-alive>
    <!-- 需要缓存的视图组件 -->
       <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"> </router-view> 
-------------------------------------------------------------------
beforeRouteLeave (to, from, next) {
      if(to.name!=='saypage'){
        this.$route.meta.keepAlive = false  
          next()
      }
     else {
       this.$route.meta.keepAlive=true
       next()
     }
  }
  即解决问题