<template>
    <div id = 'details'>
        <button @click="Reqrecommend()">拿数据</button>
        <div v-for='(item,index) of Arr' :key='index' @click='chakan(item.operationId)'>
       <span class='details-contain'>
          <div>
              <img :src="`${item.imgUrl}`" alt="" style='borderRadius:8px' class='details-contain-img' >
              <p class='titlesty'>{{item.summary}}</p>
             <span class='spansty'>
              <span class='imgstyle'></span>    
              <p class='futitle'>驾驭-淘涂涂旅行</p>
             <span class='imgstyle'>图</span>
              <p class='futitle'>{{item.pageView}}</p>
             </span> 
          </div> 
           
       </span> 
        </div>
        <a class='fanhui'  @click='back'  v-show='btnfanhui' ><img src="@/assets/img/fanhuidingbu.png" alt=""></a>
     </div>
</template>;

<script>
import { recommend } from "@/network/ReqImg.js";
import loginVue from '../../views/login.vue';
export default {
  name:'recommend',
  components: {},
  data() {
    return {
      arr: [],
      btnfanhui: false,
      count:0,
      Arr:[]
    };
  },
  created() {

 this.Reqrecommend(this.count)
       
    
  },
  mounted() {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop >= 800) {
        this.btnfanhui = true;
      } else {
        this.btnfanhui = false;
      }
    });
    
  },
  methods: {
    back() {
      let timer;
      timer = setInterval(function() {
        var scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        var ispeed = Math.floor(scrollTop / 6);
        if (scrollTop === 5) {
          clearInterval(timer);
        }
        document.documentElement.scrollTop = document.body.scrollTop =
          scrollTop - ispeed;
      }, 30);
    },
    chakan(operationId) {
        this.$router.push({
            name:'saypage',
            params:{id:operationId}
        })
    },
    Reqrecommend(count){
       recommend(count).then((res)=>{
           console.log(res);
           res[0].result.forEach(item=>{
             this.Arr.push(item)
         })
          console.log(this.Arr);
       }) 
      
       
    }
  },
  
  beforeRouteLeave (to, from, next) {
      if(to.name!=='saypage'){
        this.$route.meta.keepAlive = false  
          next()
      }
     else {
       this.$route.meta.keepAlive=true
       next()
     }
  }

};
</script>
 <style scoped lang='less'>
#details {
    margin-top: 2vh;
    width: 96vw;
    
    background-color: #23b7b7
}
.details-contain {
  margin: 2vw;
  display: inline-block;
  position: relative;
  background-color:#bfa;
  display: flex;
//   height: 25vh;
padding-bottom:1vh;
  .details-contain-img {
    display: inline-block;
    width: 44vw;
    height: 120px;
    border-radius: 8px;
    padding:3px;
  }
  .details-contain-content {
    display: inline-block;
    width: 44vw;
    margin-top: 2vh;
    font-size: 14px;
    max-height: 95px;
    text-overflow: ellipsis;
    overflow: hidden;
    word-wrap: break-word;
    letter-spacing: 1px;
    line-height: normal;
  }
}
.fanhui {
  position: fixed;
  left: 85vw;
  bottom: 20vh;

  display: inline-block;
  width: 40px;
  height: 40px;
  background-color: #fff;
  border-radius: 20px;
  border: 1px solid gray;
  text-align: center;
  img {
    margin-top: 2px;
    width: 40px;
    height: 35px;
  }

}
.imgstyle{
    width: 20px;
    height: 20px;
    line-height: 30px;
    background-color: orange;
}
.titlesty{
    font-size: 14px;
    padding-left: 5px;
    width: 44vw;
}
.futitle{
    font-size: 12px;
    text-align: center;
    line-height: 30px;
    margin-left:2px; 
}
.spansty{
display:flex;
text-align: center;
}

</style>