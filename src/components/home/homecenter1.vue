<template>
    <div class='homeMaincenter'>  
            <div  class='election'>
                <span>
                     <van-badge dot  color='#FFCA28'></van-badge>
                     选择城市或景点</span>
                <span>异地还车</span>
            </div>
         <button @click='dianwo'>dianwo</button> 
    </div> 
</template>;

<script>
export default {
  components: {},
  methods: {
    dianwo() {
      this.$router.push("/election");
    }
  }
};
</script>
 <style scoped lang='less'>
.homeMaincenter {
 background-color: #bfa;
 width: 95vw;
  height:160px
}
.homeMaincenter .election {
  display: flex;
  justify-content: space-between;
  padding: 15px;
  font-size: 12px;
  color: #6683b5;
}
</style>