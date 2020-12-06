<template>
  <div class="home" >
     <transition name="fade" >
  
          <van-search v-if='searchTf' v-model="searchvalue" placeholder="请输入您想要查找的车型品牌"  class='topBarSearch'  left   background="#000000" :label='wuhan'/>
     
     </transition>
    <van-button  type='default' round class='searchbtn' v-if='!searchTf'><van-icon name="search" class='searchIcon'/><span>搜索</span></van-button>
   <van-swipe class="my-swipe" :autoplay="2000"  style="height: 150px;" indicator-color="orange" >
       <van-swipe-item  v-for='(item,index) of swiperimg' :key ='index'><img class="imgsheet" v-if=' swiperimg[0]' :src="`http://localhost:3000/img/${item}.jpg`" alt=""> </van-swipe-item>   
   </van-swipe>
    <home-main1></home-main1>
  </div>
</template>
<script>
import homeMain1 from "@/components/home/homeMain1";
import { getimg } from "@/network/ReqImg.js";
export default {
  name: "Home",
  components: {
    homeMain1
  },
  data() {
    return {
      active: "1",
      swiperimg: [],
      searchvalue: "",
      wuhan: "武汉",
      searchTf: false
    };
  },
  mounted() {
    getimg().then(res => {
      res.forEach((item, index) => {
        this.swiperimg.push(item.ImageName);
      });
      window.addEventListener("scroll", this.handle);
    });
  },
  methods: {
    handle() {
      if (document.documentElement.scrollTop >= 100) {
        this.searchTf = true;
      } else {
        this.searchTf = false;
      }
    }
  }
};
</script>
<style scoped>
.my-swipe .van-swipe-item {
  position: relative;
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #ffffff;
}
.imgsheet {
  width: 360px;
  height: 150px;
}
.topBarSearch {
  position: fixed;
  top: 0;
  left: 0;
  float: right;
  padding: 0;
  width: 100%;
  height: 30px;
  z-index: 999;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
}
.fade-enter,
.fade-leave-to {
  transform: translateX(360px);
  opacity: 0;
}
.searchbtn {
  height: 30px;
  width: 70px;
  font-size: 12px;
  display: flex;
  justify-content: center;
  position: fixed;
  right: 10px;
  top: 10px;
  padding: 0;
  z-index: 999;
  color: #fff;
  background: rgba(0, 0, 0, 0.493);
}
.searchIcon {
  font-size: 16px;
  margin: 5px;
  float: left;
  height: 100%;
  margin: 0 auto;
  display: inline-block;
}
.searchbtn span {
  float: left;
}
</style>
