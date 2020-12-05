<template>
  <div id="app">
    
    <router-view></router-view>
   <van-tabbar v-model="active" active-color="#F08200" inactive-color="#000" fixed>
      <van-tabbar-item icon="home-o" name='1'>主页</van-tabbar-item>
      <van-tabbar-item class='iconfont icon-zijiayoutuijian' name='2'>自驾游</van-tabbar-item>
      <van-tabbar-item class='iconfont icon-fuwupingjia-kefu' name='3'>客服</van-tabbar-item>
      <van-tabbar-item class='iconfont icon-wode' name='4'>我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
   data() {
    return {
      active: "1"
    }
  },
  watch: {
    active(newval) {
      if(newval==2)this.$router.push('/roadtrip')
      else if(newval==3)this.$router.push('/customer')
      else if(newval==4){this.$router.push('/mine')}
 else{this.$router.push('/')}
    }
  },
}
</script>

<style lang="less">
</style>
