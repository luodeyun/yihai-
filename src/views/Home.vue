<template>
  <div class="home">
   

      <van-swipe class="my-swipe" :autoplay="2000" indicator-color="orange">
  <van-swipe-item><img class="imgsheet" src="http://localhost:3000/img/rBUFH16mp8qACkVoAAHZSiwngI4797.jpg" alt=""> </van-swipe-item>
  <van-swipe-item><img class="imgsheet" src="http://localhost:3000/img/rBUFH16mp8qACkVoAAHZSiwngI4797.jpg" alt=""></van-swipe-item>
  <van-swipe-item><img class="imgsheet" src="http://localhost:3000/img/rBUFH16mp8qACkVoAAHZSiwngI4797.jpg" alt=""></van-swipe-item>
  <van-swipe-item><img class="imgsheet" src="http://localhost:3000/img/rBUFH16mp8qACkVoAAHZSiwngI4797.jpg" alt=""> </van-swipe-item>
</van-swipe>
  </div>
</template>
<script>
import { getimg } from "@/network/ReqImg.js";
export default {
  name: "Home",
  data() {
    return {
      active: "1"
    };
  },
  mounted() {
    getimg().then(res=>{
      console.log(res);
    })
  },
  methods: {
    reqimg() {
      getimg().then(res => {
       console.log(res);

      });
    }
  }
};
</script>
<style scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.imgsheet{
  width:360px;
  height: 150px;
}
</style>
