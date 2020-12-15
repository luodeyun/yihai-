<template>
    <div id = 'saypage' >
        <div class='details-header' >
            <span class='backIcon' @click='back'><van-icon name="arrow-left" /> </span>
            <img src="@/assets/img/face.png" alt="" class='details-header-img'>
            <span class='details-header-title'>
                <div class='title-head'>大熊</div>
                <div class='title-time'>{{item.timeTips}}</div>
            </span>
        </div>
       <van-swipe class="my-swipe"  indicator-color="white">
           
           <van-swipe-item v-for='i in item.imgList' :key='i.url'><img :src="`http://localhost:3000/discover/${i.url}.jpg`" alt=""></van-swipe-item>
       </van-swipe>
        <span class='backicon'><p><img src="@/assets/img/eye.png" alt="">{{item.pageViewCount}}</p><p>|</p><p><img src="@/assets/img/love.png" alt="">{{item.praiseCount}}</p></span>
        <div class='pagecontain'>
         <p class='pagecontain-first'>{{item.title}}</p>    
         <p class='pagecontain-first'>{{item.content}}</p>
        </div>    
        <div class='bottom'>
         <span><img src="@/assets/img/lovexing.png" alt=""><p>{{item.shareCount}}</p></span>
         <span><img src="@/assets/img/fenxiangya.png" alt=""><p>{{item.praiseCount}}</p></span>    
        </div> 
     </div>
</template>;
<script>
import { req_imgUrl } from "@/network/Reqdiscover.js";
export default {
  name:'saypage',
  components: {},
  mounted() {
    this.initdata(this.$route.params.id);
  },
  data() {
    return {
      item: {}
    };
  },
  methods: {
    initdata(Data) {
      req_imgUrl(Data).then(res => {
        console.log(res);
          
        this.item = res;  
      });
    },
    back(){
        this.$router.go(-1)
    }
  },
  // beforeRouteLeave (to, from, next) {
  //     to.meta.keepAlive=true;
  //     next()     
  // }
};
</script>
 <style scoped lang='less'>
 #saypage{
     background-color: #F5F5F9;
     height: 100vh;
 }
.details-header {
  width: 100vw;
background-color: #fff;
  padding-top: 1vh;
}
.details-header-img {
  overflow: hidden;
  display: inline-block;
  width: 30px;
  height: 30px;
  position: relative;
  left: 0;
  top: -10px;
}
.details-header-title {
  overflow: hidden;
  display: inline-block;
  margin-left: 10px;
  font-size: 14px;
  width: 78px;
  height: 40px;

  .title-head {
    margin: 3px;
    font-weight: bold;
  }
  .title-time {
    margin: 3px;
    font-size: 12px;
  }
}
.backIcon {
  display: inline-block;
  padding-left: 10px;
  margin: 0;
  width: 30px;
  height: 40px;
  overflow: hidden;
  line-height: 30px;
}
//顶部end
  .my-swipe .van-swipe-item {
    color: #fff;
    width: 100vw;
    height: 37vh;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
    img{
         width:100vw;
         height:37vh}
  }
  .pagecontain{
      height: 40vh;
      width: 92vw;
      margin:3vh;
      overflow: hidden;
      word-wrap: break-word;

      :first-child{
          font-size: 20px;
          font-weight: bold;
          padding-bottom: 2vh;
      }
      :nth-child(2){
          font-size:16px;
          color: 333333;
          letter-spacing: 1px;
          line-height: normal;
      }
  }
  .bottom{
      width:100vw;
      height: 8vh;
      background-color: #fff;
      position: fixed;
      left:0;
      bottom:0;
      display: flex;
      justify-content: center;
     align-items: center;
     span{
         margin: 20px;
           p{
               display: inline;
               margin-left:5px;
               font-size:16px;
               font-weight: 700; 
           }
     }
     img{
         width:20px;
         height:20px;
        vertical-align: middle;
       
     }
}
.backicon {
  position: absolute;
  right: 2vw;
  top: 40vh;
  display: inline-block;
  height: 20px;
  color: #fff;
  font-size: 12px;
  background-color: rgba(93, 95, 75, 0.81);
  border-radius: 5px;
  display: flex;
  margin: 0;
  padding: 0;
  vertical-align: center;
  justify-content: space-between;
  p {
    display: flex;
    vertical-align: center;
    justify-content: space-between;
    padding: 4px;
    text-align: center;
    img {
      margin-right: 5px;
      width: 18px;
      height: 14px;
    }
  }
}
</style>