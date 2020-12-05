<template>
  <div class="home">
      <van-swipe class="my-swipe" :autoplay="2000"  style="height: 200px;" indicator-color="orange" >
  <van-swipe-item ><img class="imgsheet" v-if=' swiperimg[0]' :src="`http://localhost:3000/img/${swiperimg[0]}.jpg`" alt=""> </van-swipe-item>
  <van-swipe-item><img class="imgsheet"  :src="`http://localhost:3000/img/${swiperimg[1]}.jpg`" alt=""></van-swipe-item>
  <van-swipe-item><img class="imgsheet"  :src="`http://localhost:3000/img/${swiperimg[2]}.jpg`" alt=""></van-swipe-item>
  <van-swipe-item><img class="imgsheet"  :src="`http://localhost:3000/img/${swiperimg[3]}.jpg`" alt=""> </van-swipe-item>
</van-swipe>
  </div>
</template>
<script>
import { getimg } from "@/network/ReqImg.js";
export default {
  name: "Home",
  data() {
    return {
      active: "1",
     swiperimg:[]
    };
  },
  mounted() {
   
    getimg().then(res=>{
      console.log(res)
      res.forEach((item,index)=>{
        this.swiperimg[index]=item.ImageName
      })
    console.log(this.swiperimg);
    
  })},
  methods: {
  }
};
</script>
<style scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #ffffff;
}
.imgsheet {
  width: 360px;
  height: 200px;
}
</style>
