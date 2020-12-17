<template>
    <div id = 'orderfrom'>
              <van-nav-bar class='navbar'
             title="订单详情"
             left-arrow
             @click-left="back"/>   
             <div class='container-top'>
                 <div class="container-top-one">
                     <span >汽车图片</span>
                     <div class='qiche'>
                        <p class='carname'>大众朗逸</p>
                      
                            <p class='carname2'>自动16L|三厢|5座</p>
                        
                     </div>
                 </div>
                 <div class='container-top-two'>地点样式</div>
             </div>
             <div class='container-top-con'>
                <div class='container-top-con-one'>
                <div> <p class='conone'>￥355</p>
                       <span class='contwo'>嘉年华-特价车</span>
                      <p class='conthree'>折后费用</p></div>
                     
                </div>
                 <div class='container-top-con-two'>
                  <div class='container-top-con-two-one'>
                    <div>
                         <span><img src="@/assets/img/wenhao.png" alt="" class='wenhao'></span>
                        <span style='margin-left:2vw '>行无忧(48元)</span>
                    </div>
                    <div style='margin-right:2vw'><van-checkbox v-model="checked"></van-checkbox></div>
                  </div>
                   <div class='container-top-con-two-one'>
                    <div >
                        <span><img src="@/assets/img/wenhao.png" alt="" class='wenhao'></span>
                        <span style='margin-left:2vw'>免除加油服务费(50元)</span>
                    </div>
                    <div style='margin-right:2vw'><van-checkbox v-model="checked"></van-checkbox></div>
                  </div>
                   <div class='container-top-con-two-one'>
                    <div >
                          <span><img src="@/assets/img/wenhao.png" alt="" class='wenhao'></span>
                        <span style='margin-left:2vw'>基础补充保障(105元)</span>
                    </div>
                    <div style='margin-right:2vw'><van-checkbox v-model="checked"></van-checkbox></div>
                  </div>
                  <div class='container-top-con-two-one'>
                    <div >
                      <span><img src="@/assets/img/wenhao.png" alt="" class='wenhao'></span>
                        <span style='margin-left:2vw'>行高级补充保障(144元)</span>
                    </div>
                    <div style='margin-right:2vw'><van-checkbox v-model="checked"></van-checkbox></div>
                  </div>
                  <div class='container-top-con-two-one'>
                    <div >
                          <span><img src="@/assets/img/wenhao.png" alt="" class='wenhao'></span>
                        <span style='margin-left:2vw'>尊享补充保障(189元)</span>
                    </div>
                    <div style='margin-right:2vw'><van-checkbox v-model="checked"></van-checkbox></div>
                  </div>
                  <div class='container-top-con-two-one'>
                    <div >
                           <span><img src="@/assets/img/wenhao.png" alt="" class='wenhao'></span>
                        <span style='margin-left:2vw'>租手机支架(4元)</span>
                    </div>
                    <div style='margin-right:2vw'><van-checkbox v-model="checked"></van-checkbox></div>
                  </div>
                   <div class='container-top-con-two-one'>
                    <div >
                          <span><img src="@/assets/img/wenhao.png" alt="" class='wenhao'></span>
                        <span style='margin-left:2vw'>购买手机支架</span>
                    </div>
                    <div style='margin-right:2vw'><van-checkbox v-model="checked"></van-checkbox></div>
                  </div>
                 
                </div>
             </div>
             <div class='bottom'><button>提交订单</button>
</div>
             
     </div>
</template>;

<script>
export default {
  components: {},
  data () {
      return {
          checked:true
      }
  },
  methods: {
    back() {
      this.$router.go(-1);
    }
  }
};
</script>
 <style scoped lang='less'>
#orderfrom {
  width: 100vw;
 background-color: #F7F7F7;
  position: relative;
}
.navbar {
  background-color: #29b7b7;
  color: #fff !important;
  position: fixed;
  width: 100vw;
  left: 0;
  top: 0;
}
//汽车样式 与 地点样式
.container-top {
  width: 100vw;
  height: 26vh;
  margin-top: 6.9vh;
  background-color: #bfa;
  .container-top-one {
    width: 100vw;
    height: 12vh;
    background-color: orange;
    display: flex;
    justify-content: center;
    align-items: center;
    span{  //汽车图片样式
     width:18vw;
     height: 8vh;
     background-color: #bfa;
     margin-right:2vh;
    }
    //汽车属性样式
   .qiche{
       width: 35vw;
       height: 8vh;
       background-color: #bcc;
       .carname{
           height: 5vh;
           background-color: aqua;
           color: #29B7B7;
           line-height: 5vh;
       }
      .carname2{
          height: 3vh;
          color: whitesmoke;
          font-size: 12px;
        line-height: 3vh
      }
   }

  }
  .container-top-two {
    width: 100vw;
    height: 14vh;
    background-color: gainsboro;
  }
}
//    
                    
.container-top-con {
  width: 92vw;
  height: 100vh;
  margin: 3vh auto;
  background-color: pink;
  //费用明细
  .container-top-con-one {
    height: 18vh;
    background-color: #29b7b7;
    position: sticky;
    top:6.8vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index:99;
    flex-direction: row;
    flex-wrap: wrap;
   .conone{
       width: 34vw;
       height: 3vh;
       margin: 1vh;
       text-align: center;
       line-height: 3vh;
   
       font-size: 18px
   }
   .contwo{
       width: 34vw;
       display: block;
       height: 3vh;
       margin: 1vh;
           text-align: center;
       line-height: 3vh;
       border: 1px solid #FF7E00;
       border-radius:5px ;
       font-size: 14px;
       color: #FF7E00;
       background-color: #fff
   }
   .conthree{
       width: 34vw;
       height: 3vh;
       margin: 1vh;
       text-align: center;
       line-height: 3vh;
       background-color: #bfa;
       color: #29B7B7;
       font-size: 12px
   }
  }
  //行无忧
  .container-top-con-two{
      margin-top:3vh;
    //   height: 52vh;
    //   background-color: #bfa;
     background-color: #fff;
      .container-top-con-two-one{
           color: #29B7B7;
          width:88vw;
          height: 6vh;
          border-bottom:1px solid #EAEAEA;
          padding: 1vh;
          display: flex;
          justify-content: space-between;
          align-items: center;
           .wenhao{
                width:30px;
                vertical-align: middle
           }
      }
  }
}
//提交订单
.bottom{
    position: fixed;
    left: 0;
    bottom: 0;
    width:100vh;
    height: 7vh;
    background-color: #29b7b7;
    
    button{ 
    width: 94vw;
    height: 7vh;
    position: absolute;
    left: 50%;
    top:0;
    border-radius:5px;
     border:none;
    background-color:  #FF7E00;
    color: white;
    transform: translateX(-86vw);

    }
   
}

</style>