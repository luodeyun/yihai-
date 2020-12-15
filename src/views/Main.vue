<template>
    <div id = 'app1'>       
          <div class='tab_bar'>  
            <transition :name="animate">       
                  <router-view></router-view>  
             </transition>   
         </div>      
         <van-tabbar v-model="active" active-color="#F08200" inactive-color="#000" fixed style='width:100vw'>
                 <van-tabbar-item icon="home-o" name='1'>主页</van-tabbar-item>
                 <van-tabbar-item icon='logistics' name='2'>自驾游</van-tabbar-item>
                 <van-tabbar-item icon='service-o' name='3'>客服</van-tabbar-item>
                 <van-tabbar-item icon='user-o' name='4'>我的</van-tabbar-item>
         </van-tabbar>
     </div>
</template>
<script>
import {mapState} from 'vuex'
 export default {
  components: {},
  data() {
    return {
      active:'1',
      animate: ""
    };
  }, 
  watch: {
    active(newval) {  
      if (newval == 2) this.$router.push("/discover");
      else if (newval == 3) this.$router.push("/Main/customer");
      else if (newval == 4) this.$router.push("/Main/mine");
      else if(newval==1) this.$router.push({name:'homemain'})
    },
    $route(to, from) {
      if (to.meta.tx > from.meta.tx) {
        console.log(this.animate);
        this.animate = "slide-left";
      } else {
        this.animate = "slide-right";
      }
    }
  },
  
  beforeRouteEnter (to, from, next) {
    if(from='discover'){
       
       next()
    }else{     
       next();
    }
   
  }
};
</script>
 <style lang='less' scoped>


.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 500ms;
  position: absolute;
}
 
.slide-right-enter {
  opacity: 0;
  transform: translateX(-100%);
}
 
.slide-right-leave-active {
  opacity: 0;
  transform: translateX(100%);
}
 
.slide-left-enter {
  opacity: 0;
  transform: translateX(100%);
}
 
.slide-left-leave-active {
  opacity: 0;
  transform: translateX(-100%);
}
</style>