<template>
    <div id = 'app'>
        <div class='tab_bar'>
          <router-view></router-view>
        </div>        
        <van-tabbar v-model="active" active-color="#F08200" inactive-color="#000" fixed >
                 <van-tabbar-item icon="home-o" name='1'>主页</van-tabbar-item>
                 <van-tabbar-item icon='logistics' name='2'>自驾游</van-tabbar-item>
                 <van-tabbar-item icon='service-o' name='3'>客服</van-tabbar-item>
                 <van-tabbar-item icon='user-o' name='4'>我的</van-tabbar-item>
        </van-tabbar>
     </div>
</template>;

<script>
    export default{ 
          components:{

          },
           data() {
    return {
      active: "1"
    }
  },
  watch: {
    active(newval) {
      if(newval==2)this.$router.push('/Main/roadtrip')
      else if(newval==3)this.$router.push('/Main/customer')
      else if(newval==4){this.$router.push('/Main/mine')}
      else{this.$router.push('/')}
    }
  },
     }
 </script>
 <style>

</style>