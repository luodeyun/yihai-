<template>
 <div class='homeMain'>
         <div class='homeMaincenter'>   
            <div class='daohang'>  
               <router-link to='/mine' class='chinacar' style='background: #fff ;color:#000'>国内租车</router-link>
               <router-link to='/mine' class='chinacar'>高端专车</router-link>
               <router-link to='/mine'  class="chinacar">超值套餐</router-link>
               <router-link to='/mine' class='chinacar'>海外租车</router-link>
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
  methods:{
      dianwo(){
          this.$router.push('/election')
      }
  }
};
</script>
 <style scoped>
.homeMain {
  position: absolute;
  left: 0;
  top: 130px;
  padding: 0;
  margin: 0;
  left: 0;
  right: 0;
  background-color: #bfa;
  height: 1000px;
  width: 100%;
}

.daohang {
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.5);
}
.homeMaincenter {
  transform: translateX(10px);
  width: 340px;

  /* background-color: pink; */
  border-radius: 5px;
}
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
.election {
  display: flex;
  justify-content: space-between;
  padding: 15px;
  font-size: 12px;
  color: #6683b5;
}
</style>