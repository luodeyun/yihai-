<template>
    <div id = 'homeMain2'>
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
  }
};
</script>
 <style scoped lang='less'>
.homeMain2 {
  width: 360px;

}
</style>