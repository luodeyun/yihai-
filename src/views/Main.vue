<template>
    <div id = 'app1'>
        
          <div class='tab_bar'>     
            <transition name="fade">    
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
      active:'1'
    };
  }, 
  watch: {
    active(newval) {  
      if (newval == 2) this.$router.push("/Main/roadtrip");
      else if (newval == 3) this.$router.push("/Main/customer");
      else if (newval == 4) {
        this.$router.push("/Main/mine");
      } else {
        this.$router.push("/main/home");
      }
    }
  }
};
</script>
 <style lang='less' scoped>
// .fold-left-enter-active {
//  animation-name: fold-left-in;
//  animation-duration: .3s;
//  }
//  .fold-left-leave-active {
//  animation-name: fold-left-out;
//  animation-duration: .3s;
//  }
// .fold-left-enter-active {
//  animation-name: fold-right-in;
//  animation-duration: .3s;
//  }
//  .fold-left-leave-active {
//  animation-name: fold-right-out;
//  animation-duration: .3s;
//  }
// @keyframes fold-left-in {
//  0% {
//   transform: translate3d(100%, 0, 0);
//  }
//  100% {
//   transform: translate3d(0, 0, 0);
//  }
//  }
//  @keyframes fold-left-out {
//  0% {
//   transform: translate3d(0, 0, 0);
//  }
//  100% {
//   transform: translate3d(-100%, 0, 0);
//  }
//  }
.fade-enter-active, {
  animation: fold-left-in 1s;
 
}
.fade-leave-active {
 animation: fold-left-in 0s;
}

@keyframes fold-left-in {
 0% {
  transform: translate3d(100%, 100%, 0);
  opacity: 0;
 }
 100% {
  transform: translate3d(0, 0, 0);
  opacity: 1;
 }
 }
</style>