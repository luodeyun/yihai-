<template>
 <div class='homeMain'>
         <div class='homeMaincenter'>   
            <div class='daohang'>  
               <router-link to='/main/mine' class='chinacar' style='background: #fff ;color:#000'>国内租车</router-link>
               <router-link to='/main/mine' class='chinacar'>高端专车</router-link>
               <router-link to='/main/mine'  class="chinacar">超值套餐</router-link>
               <router-link to='/main/mine' class='chinacar'>海外租车</router-link>
             </div> 
            <div  class='election'>
                <span>
                     <van-badge dot  color='#FFCA28'></van-badge>
                     选择城市或景点</span>
                <span>异地还车</span>
            </div>
         <button @click='dianwo'>dianwo</button> 
        </div>
           
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
/*大页面 */
.homeMain {
  position: absolute;
  left: 0;
  top: (130/667 * 100) vh;
  padding: 0;
  margin: 0;
  left: 0;
  right: 0;
  /* background-color: #bfa; */
  height: 1000px;
  width: 100%;
  .homeMaincenter {
    transform: translateX(10px);
    width: 95vw;
    border-radius: 5px;
    .daohang {
      border-radius: 5px;
      height: (30/667*100)vh;
      width: 95vw;
      background: rgba(0, 0, 0, 0.5);
      .chinacar {
           display: inline-block;
           color: #fff;
           width: 20%;
           height: 30px;
           margin-right: 17px;
           font-size: 12px;
           text-align: center;
           line-height: 30px;
           border-radius: 5px;
           }
    }
  }
}


 .homeMain   .homeMaincenter .election {
  display: flex;
  justify-content: space-between;
  padding: 15px;
  font-size: 12px;
  color: #6683b5;
}
</style>