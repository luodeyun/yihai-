<template>
    <div id = 'homeMain2'>
        <van-notify id="van-notify" />
       <homecenter1></homecenter1>                                                                                                
        <homebottom></homebottom>
     </div>
</template>;

<script>
import homecenter1 from "./homecenter1.vue";
import homebottom from "./homebottom.vue";
export default {
  components: {
    homecenter1,
    homebottom
  },
  beforeRouteLeave (to, from, next) {
    console.log(to.name,'333');
    
      if(to.name=='login') {
        console.log('22');
        
        this.$notify({ type: "danger", message: "因为您未登录，请登录！！" });}
      next()     
  }
};
</script>
 <style scoped lang='less'>
.homeMain2 {
  width: 360px;

}
</style>