<template>
    <div id = 'discover'>
       <homeswiper>
           <div slot='searchbar'></div>
           <div slot='buttonbar'></div>
        </homeswiper> 
         <span class='backIcon' @click='gohome'><van-icon name="arrow-left" size='28px' color='#F9FAFA' /> </span>
        <div class='discover-contain'>
            <div class='discover-contain-header'>
               <a class='discover-contain-header-neirong ' v-for='(item,index) of headerContain' :key='index'>
                    <div><img :src="require(`@/assets/img/${item.imgurl}.png`)" alt=""></div>
                     <span>{{item.message}}</span>               
               </a>      
            </div>
            <div class='discover-contain-bottom'>
                  <div class='discover-contain-bottom-header'    ref='header'   >
              
                  
                    <span @click='active=1' :class="[active==1?nofontsty:fontsty]">发现</span>
                    <span @click="active=2" :class="[active==2?nofontsty:fontsty]">推荐游记</span>
                  
                  </div>
                          
                        <det v-show='active==1'></det>
                        <recommend v-show='active==2'></recommend> 
            </div>
        </div>

     </div>
</template>;

<script>
import homeswiper from "@/components/home/homeswiper";
import det from './details';
import recommend from './recommend';
export default {
  name: "discover",
  components: {
    homeswiper,
    det,
    recommend,
    
  },
  data() {
    return {
      headerContain: [
        { imgurl: "menpiao", message: "门票" },
        { imgurl: "gonglue", message: "攻略游记" },
        { imgurl: "gaotie", message: "高铁" },
        { imgurl: "fangche", message: "房车游" },
        { imgurl: "xiaoche", message: "四轮生活" }

      ],
      active:1,
      recommends:false,
      clearsty1: true,
      fontsty:'fontsty',
      nofontsty:'nofontsty'
    };
  },
  methods: {
    changesty(){
     
     
   

    }, 
   
    gohome() {
      this.$router.push({ name: "homemain" });
    }
  }
};
</script>
 <style scoped lang='less'>
   .fontsty{
     font-size: 14px;
     font-weight: 400;
   }
   .nofontsty{
     font-size: 16px;
     font-weight: 700
   }
#discover {
  width: 100vw;
  height: 800px;
}
.discover-contain {
  width: 100vw;
  .discover-contain-header {
    width: 94vw;
    padding: 3vw;
    display: flex;
    padding-bottom: 1vw;
    justify-content: space-around;
    .discover-contain-header-neirong {
      width: 14vw;
      height: 10vh;
      font-size: 12px;
      color: #666a6d;
      text-align: center;
      line-height: 12px;
      img {
        width: 8vw;
        height: 4vh;
        margin-bottom: 1vh;
      }
    }
  }
}
.discover-contain-bottom {
  width: 94vw;
  margin: 0 auto;
  //   background-color: antiquewhite;
}
.discover-contain-bottom-header {
  font-size: 14px;
  position: sticky;
  top: 0vh;
  height: 30px;
  background-color: #fff;
  z-index: 999;
  line-height: 30px;
  a {
    margin: 8px;
  }
  span{
    display: inline-block;
    width: 70px;
  }
    
}

.backIcon {
  position: absolute;
  left: 2vw;
  top: 2vh;
  display: inline-block;
  width: 8vw;
  height: 4vh;
  border-radius: 10px;
  background-color: rgba(140, 140, 140, 0.514);
}
</style>