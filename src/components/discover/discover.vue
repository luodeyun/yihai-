<template>
    <div id = 'discover'>
       <homeswiper>
           <div slot='searchbar'></div>
           <div slot='buttonbar'></div>
        </homeswiper>
        <div class='discover-contain'>
            <div class='discover-contain-header'>
               <a class='discover-contain-header-neirong ' v-for='(item,index) of headerContain' :key='index'>
                    <div><img :src="require(`@/assets/img/${item.imgurl}.png`)" alt=""></div>
                     <span>{{item.message}}</span>               
               </a>      
            </div>
            <div class='discover-contain-bottom'>
                  <div class='discover-contain-bottom-header'  ref='header'  >
                    <router-link  @click.native.capture ='changesty' to='/discover/details' style='color:black'>发现</router-link>
                    <router-link @click.native.prevent ='changesty' to='/discover/recommend' style='color:black'>推荐游记</router-link>
                    <router-link @click.native ='changesty' to='/discover/farmwagon' style='color:black'>四轮生活</router-link>    
                  </div>
                  <router-view></router-view>
            </div>
        </div>

     </div>
</template>;

<script>
import homeswiper from "@/components/home/homeswiper";
export default {
  components: {
    homeswiper
  },
  data() {
    return {
      headerContain: [
        { imgurl: "menpiao", message: "门票" },
        { imgurl: "gonglue", message: "攻略游记" },
        { imgurl: "gaotie", message: "高铁" },
        { imgurl: "fangche", message: "房车游" },
        { imgurl: "xiaoche", message: "四轮生活" }
      ]
    };
  },    
  mounted(){
      this.$router.push({name:'details'})
  },
  methods: {
        changesty(e) {
           
            
            let arr = this.$refs.header.children;
            arr.forEach(element => {
              element.style.fontSize = "14px";
              element.style.fontWeight = "400";
            } )
            e.target.style.fontSize = "16px";
            e.target.style.fontWeight = "700";
          
        }
    }
};
</script>
 <style scoped lang='less'>
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
  height: 600px;
  margin: 0 auto;
//   background-color: antiquewhite;
}
.discover-contain-bottom-header {
  font-size: 14px;
  height: 30px;
 
  a
  {
    margin: 8px;
    
  }
}
.discover-contain-bottom-header  :first-child{
    font-weight: bold;
    font-size: 16px;
 
}

</style>