<template>
  <div class="home" >
   <homeswiper> </homeswiper>
    <home-main1></home-main1>
  </div>
</template>
<script>
import homeMain1 from "@/components/home/homeMain1";
import homeswiper from '@/components/home/homeswiper'
export default {
  //主页面  分别包含了上部分轮播图和下部分内容，轮播：homeswipe 内容：homeMain1
  //内容是动态的可以变的所以抽成组件，
  //在homeMain1中为导航顶部和内容这样就形成了3级路由  导航顶部： homeMain1 下面内容可以变
  // 所以homeMain1下面我抽成路由组件 为 homeMain(地区选择和日期选择) 和homebottom(游记攻略)
  name: "Home",
  components: {
    homeMain1,
    homeswiper
  },
};
</script>
 <style lang="less">
.home{
  height: 100vh;
  width:100vw;
}

</style>
