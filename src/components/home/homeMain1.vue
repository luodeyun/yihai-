<template>
 <div class='homeMain'>
      <div>
           <div class='daohang' @click='changesty'>  
               <router-link to='/main/home/homemain'  class='chinacar' style='color:#000;backgroundColor:#fff; borderRadius:5px 5px 5px 5px' ref>国内租车</router-link>
               <router-link to='/main/mine'  class='chinacar'>高端专车</router-link>
               <router-link to='/main/mine'  class="chinacar">超值套餐</router-link>
               <router-link to='/main/home/sea'  class="chinacar" ref='ss'>海外租车</router-link>
         </div> 
         <router-view ></router-view>
      </div>
    </div>
</template>;
<script>
import homeMain from './homeMain'
export default {
  components: {
    homeMain
  },
  mounted() {
    this.$router.push('/main/home/homemain')
  },
  methods:{
    changesty(e){
     for (var i =0;i<=4;i++){
      if(e.target.innerHTML=='国内租车'){
         e.target.parentNode.children[3].style='';         
          e.target.style.color='#000'
          e.target.style.backgroundColor='#fff'
          e.target.style.borderRadius='5px 5px 5px 5px'
          
     }else if(e.target.innerHTML=='海外租车'){
          e.target.parentNode.children[0].style='';
          e.target.style.color='#000'
          e.target.style.backgroundColor='#fff'
          e.target.style.borderRadius='5px 5px 5px 5px'
     }
     }   
    }
  }
  
};
</script>
 <style scoped lang='less'>
/*大页面 */
.homeMain {
  position: absolute;
  left: 0;
  top:150px;

  
  //  background-color: #bfa; 
  height: 1000px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
background-color: #FAFAFA;
}
.daohang {
    border-radius: 5px;
    width: 95vw;
    display: flex;
    height: 30px;
    justify-content: space-between;
    align-items: center;
    background: rgba(0, 0, 0, 0.5);
    .chinacar {
      display: inline-block;
      color: #fff;
      height: 22px;
      padding:4px;
      line-height:22px;
      font-size: 12px; 
      
    }
  }
.changesty{
  
  background: #fff ;color:#000}
  // .zuihou{
  //     display: inline-block;
  //     color: #fff;
  //     width: 20%;
  //     height: 30px;
  //     padding: 0;
  //     margin-left: 0;
  //     font-size: 12px;
  //     text-align: center;
  //     line-height: 30px;
  //     border-radius: 5px;
  // }
 
</style>