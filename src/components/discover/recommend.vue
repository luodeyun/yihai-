<template>
    <div id = 'details'>
     <div>
        <div v-for='(item,index) of arr.slice(0,1)' :key='index' @click='chakan(item.id)' style='height:140px'>
            <span class='details-contain' style='height:100px'>
               <div style='height:90px'>
                   <img :src="`${item.imgUrl}`" alt="" style='height:90px' class='details-contain-img   ' >
                   <p class='titlesty'>{{item.summary}}</p>
                  <span class='spansty'>
                   <span class='imgstyle'><img src="@/assets/img/8edc44a9873944e6b24d50f86f9bfab8.jpg" alt="" ></span>    
                   <p class='futitle'>驾驭-淘涂涂旅行</p>
                  <span class='imgstyle'><img src="@/assets/img/sadrasdasd.png" alt="" ></span>
                   <p class='futitle'>{{item.pageView}}</p>
                  </span> 
               </div> 
            </span> 
        </div>

        <div v-for='(item,index) of arr.slice(1)' :key='index+100' @click='chakan(item.id)' >
            <span class='details-contain'>
               <div>
                   <img :src="`${item.imgUrl}`" alt="" style='borderRadius:8px' class='details-contain-img' >
                   <p class='titlesty'>{{item.summary}}</p>
                  <span class='spansty'>
                   <span class='imgstyle'><img src="@/assets/img/8edc44a9873944e6b24d50f86f9bfab8.jpg" alt="" ></span>    
                   <p class='futitle'>驾驭-淘涂涂旅行</p>
                  <span class='imgstyle'><img src="@/assets/img/sadrasdasd.png" alt="" ></span>
                   <p class='futitle'>{{item.pageView}}</p>
                  </span> 
               </div> 
            </span> 
        </div>
        </div>
        <div>
           <div v-for='(item,index) of Arr' :key='index+100' @click='chakan(item.id)'>
            <span class='details-contain'>
               <div>
                   <img :src="`${item.imgUrl}`" alt="" style='borderRadius:8px' class='details-contain-img' >
                   <p class='titlesty'>{{item.summary}}</p>
                  <span class='spansty'>
                   <span class='imgstyle'><img src="@/assets/img/a274f1880e184e92a7441cfc6d127ff2.jpg" alt="" ></span>    
                   <p class='futitle'>驾驭-淘涂涂旅行</p>
               <span class='imgstyle'><img src="@/assets/img/sadrasdasd.png" alt="" ></span>
                   <p class='futitle'>{{item.pageView}}</p>
                  </span> 
               </div> 
            </span> 
        </div>
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
      arr: [],  //前面
      btnfanhui: false,
      count:0,
      Arr:[], //后面,
  
    
    };
  },
  created() {
     this.Reqrecommend()
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
    chakan(id) {
        console.log(id);
        
    },
    Reqrecommend(){  
       recommend().then((res)=>{
           console.log(res);
           
             let midlength = res.length / 2;
             let resfont = res.slice(0, midlength);
             let resend = res.slice(midlength);
             console.log(resfont ,resend);
             
              resfont.forEach(item=>{
                item.result.forEach((i)=>{
                 this.Arr.push(i)
                }
                )
             })
              resend.forEach(item=>{
                   item.result.forEach((i)=>{
                 this.arr.push(i)
                }
                )
             })  
         })            
    },
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
  display: flex;
  flex-wrap: wrap;
  // background-color: #23b7b7
}
.details-contain {
  margin-left: 1vw;
  display: inline-block;
  position: relative;
  //   background-color:#bfa;
  display: flex;
  //   height: 25vh;
  padding-bottom: 1vh;
  .details-contain-img {
    display: inline-block;
    width: 44vw;
    height: 120px;
    border-radius: 8px;
    padding: 3px;
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
.imgstyle {
  width: 20px;
  height: 20px;
  line-height: 30px;
  // background-color: orange;
  img {
    width: 20px;
    height: 20px;
    line-height: 30px;
    // background-color: orange;
    border-radius: 10px;
    vertical-align: middle;
  }
}
.titlesty {
  font-size: 14px;
  padding-left: 5px;
  width: 44vw;
}
.futitle {
  font-size: 12px;
  text-align: center;
  line-height: 30px;
  margin-left: 2px;
}
.spansty {
  display: flex;
  text-align: center;
}
</style>