<template>
  <div id="app"> 
    
     <keep-alive>
    <!-- 需要缓存的视图组件 -->
       <router-view v-if="$route.meta.keepAlive"></router-view>
  </keep-alive>
      
      <router-view v-if="!$route.meta.keepAlive"> </router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
     animate:''
    }
  },

};
</script>

<style scoped lang="less">


</style>
