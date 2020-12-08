<template>
    <div class='homebottom'>
      
          <span class='biaoti'>游记攻略</span>  
          <div class='contain'>  
              <div class='containleft'>
                  <div class='containsmall' v-for='(item,index)   of  containfont.slice(0,1)' :key='index'  >
                         <img :src="`http://localhost:3000/img/${item.imgname}.jpg`" :alt="item.address"  ref='ssss' style='height:150px'>  
                         <span class='nickwrite'>{{item.nickwrite}}</span>
                         <div class='containbottom'>
                            <span id='imgfontsize'>
                                 <img src="@/assets/img/8edc44a9873944e6b24d50f86f9bfab8.jpg" alt="" >
                             <span class='yihaizjj'>一嗨自驾君</span>
                             </span> 
                            <span id='imgfontsize'><img src="@/assets/img/sadrasdasd.png" alt="" >{{item.counter}}</span> 
                        </div>
                 </div>
                 <div class='containsmall' v-for='(item,index)   of  containfont.slice(1)' :key='containfont[index]._id'  >
                         <img :src="`http://localhost:3000/img/${item.imgname}.jpg`" :alt="item.address"  ref='ssss' >  
                         <span class='nickwrite'>{{item.nickwrite}}</span>
                         <div class='containbottom'>
                            <span id='imgfontsize'>
                                 <img src="@/assets/img/a274f1880e184e92a7441cfc6d127ff2.jpg" alt="" >
                             <span class='yihaizjj'>一嗨自驾君</span>
                             </span> 
                            <span id='imgfontsize'><img src="@/assets/img/sadrasdasd.png" alt="" >{{item.counter}}</span> 
                        </div>
                 </div>
              </div>
              <div class='containright'>
                   <div class='containsmall' v-for='(item,index)   of  containend' :key='containend[index]._id'  >
                         <img :src="`http://localhost:3000/img/${item.imgname}.jpg`" :alt="item.address"  ref='ssss' >  
                         <span class='nickwrite'>{{item.nickwrite}}</span>
                         <div class='containbottom'>
                            <span id='imgfontsize' >
                                 <img src="@/assets/img/8edc44a9873944e6b24d50f86f9bfab8.jpg" alt="" >
                             <span class='yihaizjj'>一嗨自驾君</span>
                             </span> 
                            <span id='imgfontsize'><img src="@/assets/img/sadrasdasd.png" alt="" >{{item.counter}}</span> 
                        </div>
                 </div>
               </div> 
          </div>
    </div>
</template>;

<script >
import { getyj } from "@/network/ReqImg.js";
export default {
  components: {},
  data() {
    return {
      containfont: [],
      containend: [],
      textcontain: "",
      imgpath1:'@/assets/img/8edc44a9873944e6b24d50f86f9bfab8.jpg',
      imgpath2:'@/assets/img/a274f1880e184e92a7441cfc6d127ff2.jpg'
    };
  },
  created() {},
  mounted() {
    getyj().then(res => {
      let midlength = res.length / 2;
      let resfont = res.slice(0, midlength);
      let resend = res.slice(midlength);
      for (let item of resfont) {
        this.containfont.push(item);
      }
      for (let item of resend) {
        this.containend.push(item);
      }
    });
  }
};
</script>
 <style scoped lang='less'>
.homebottom {
  margin-top: 20px;
  margin-bottom: 50px;

  //   background-color: pink;
}
.contain {
  display: flex;
  justify-content: space-between;
  width: 95vw;
  //   background-color: #bfa;
}
.containleft {
  width: 175px;
  // background-color: pink;
}
.containright {
  width: 175px;
}
.containsmall {
  //小盒子设置
  width: 175px;
  margin: 10px 0;
  img {
    width: 175px;
    height: 200px;
    border-radius: 10px;
  }
  .nickwrite {
    display: inline-block;
    line-height:18px;
    width: 160px;
    font-size: 12px;
    margin: 10px 0;
  }
}
.homebottom {
  margin-bottom: 50px;
}
.containbottom {
  display: flex;
  justify-content: space-between;
  margin-right: 10px;
  font-size: 12px;
  
}
.homebottom  #imgfontsize img{
     vertical-align: middle;
    width: 20px !important;
    height: 18px !important;
    border-radius: 10px;
    margin-right:3px 
  }
</style>