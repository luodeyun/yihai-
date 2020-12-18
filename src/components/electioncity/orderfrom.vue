<template>
    <div id = 'orderfrom'>
            <van-nav-bar class='navbar'
             :title="changetitle"
             left-arrow
            left-text="返回"
             @click-left="back"/>   
             <div class='container-top'>
                 <div class="container-top-one">
                     <span ><img :src="CarTypeItem" alt="" style='width:18vw;height:7vh'></span>
                     <div class='qiche'>
                        <p class='carname'>{{CarName}}</p>
                            <p class='carname2'>{{CommonDescription}}</p>
                     </div>
                 </div>
                 <div class='container-top-two'>
                   <div>
                     <p>{{initval}}</p>
                     <p class='date'>租车日期{{initmonth}}-{{this.$store.state.initday}}</p>
                    </div>
                   <div class='imgstyle'>
                <img src="@/assets/img/leftallow.png" alt="2"><span>{{dispance}}</span><img src="@/assets/img/rightallow.png" alt="2">
                   
                     </div>
                   <div>
                     <p>{{endval}}</p>
                     <p class='date'>还车日期{{endmonth}}-{{this.$store.state.endday}}</p>
                     </div>
                 </div>
             </div>
             <div class='container-top-con'>
                <div class='container-top-con-one'>
                <div> <p class='conone'>￥{{FloorPrice}}</p>
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
  data() {
    return {
      checked: true,
      CarTypeItem: "", //汽车图片地址
      CommonDescription: "", //汽车描述
      CarName: "",
      FloorPrice: "",
      changetitle: "订单详情"
    };
  },
  mounted() {
    this.FloorPrice = this.$route.params.item.FloorPrice;
    this.CarTypeItem = this.$route.params.item.CarTypeItem.SmallImagePath;
    this.CarName = this.$route.params.item.CarTypeItem.Name;
    this.CommonDescription = this.$route.params.item.CommonDescription;
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop >= 100) {
        this.changetitle = this.CarName;
      } else {
        this.changetitle = "订单详情";
      }
    });
  },
  methods: {
    back() {
      this.$router.go(-1);
    }
  },
  computed: {
    initval() {
      return this.$store.state.initval.name;
    },
    endval() {
      return this.$store.state.endval.name;
    },
    dispance() {
      return this.$store.state.dispance;
    },
    initmonth() {
      return this.$store.state.initmonth;
    },
    endmonth() {
      return this.$store.state.endmonth;
    }
  }
};
</script>
 <style scoped lang='less'>
.navbar {
  color: #fff !important;
  /deep/.van-nav-bar__title {
    color: #fff !important;
  }
  /deep/.van-nav-bar__arrow {
    color: #fff !important;
  }
  /deep/.van-nav-bar__text {
    color: #fff !important;
  }
}
#orderfrom {
  width: 100vw;
  background-color: #f7f7f7;
  position: relative;
  .navbar {
    background-color: #29b7b7;
    position: fixed;
    width: 100vw;
    left: 0;
    top: 0;
  }
}

//汽车样式 与 地点样式
.container-top {
  width: 100vw;
  height: 26vh;
  margin-top: 6.9vh;
  // background-color: #bfa;
  .container-top-one {
    width: 100vw;
    height: 12vh;
    // background-color: orange;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      //汽车图片样式
      width: 18vw;
      height: 8vh;
      // background-color: #bfa;
      margin-right: 2vh;
    }
    //汽车属性样式
    .qiche {
      width: 50vw;
      height: 8vh;
      // background-color: #bcc;
      .carname {
        height: 5vh;
        // background-color: aqua;
        color: #29b7b7;
        font-weight: 700;

        line-height: 5vh;
      }
      .carname2 {
        height: 3vh;
        color: #bcc;
        font-size: 14px;
        line-height: 3vh;
      }
    }
  }
  .container-top-two {
    width: 100vw;
    height: 14vh;
    background-color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    div {
      width: 26vw;
      height: 10vh;
      margin: 0 2vw;
      text-align: center;
      p{
         width:15vw;
         height: 4vh;
         margin: 1vh auto;
         img
         {
           width: 40px;
           height: 40px;
         }
          
      }
      .date{
      font-size: 12px;
      
      }
    }
  }
}
.imgstyle{
  display: inline-block;
  width: 36vw;
  height: 10vh;
  margin: 0;
  padding: 0;
  // background-color: #bfa;
  display: flex;
  justify-content: center;
  align-items: center;
    span{
      width: 40px;
      height: 40px;
      text-align: center;
      line-height: 40px;
    }
     img
         {vertical-align: center;
           width: 30px;
           height: 30px;
         }
  
}
//

.container-top-con {
  width: 92vw;
  height: 100vh;
  margin: 3vh auto;
  background-color: #fff;
  border: 1px solid #f7f7f7;

  //费用明细
  .container-top-con-one {
    height: 18vh;
    background-color: #fff;
    position: sticky;
    top: 6.8vh;
    display: flex;
    justify-content: center;
    border-radius: 5px;
    align-items: center;
    z-index: 99;
    flex-direction: row;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
    flex-wrap: wrap;
    .conone {
      width: 34vw;
      height: 3vh;
      margin: 1vh;
      text-align: center;
      line-height: 3vh;

      font-size: 18px;
    }
    .contwo {
      width: 34vw;
      display: block;
      height: 3vh;
      margin: 1vh;
      text-align: center;
      line-height: 3vh;
      border: 1px solid #ff7e00;
      border-radius: 5px;
      font-size: 14px;
      color: #ff7e00;
      background-color: #fff;
    }
    .conthree {
      width: 34vw;
      height: 3vh;
      margin: 1vh;
      text-align: center;
      line-height: 3vh;
      // background-color: #bfa;
      color: #29b7b7;
      font-size: 12px;
    }
  }
  //行无忧
  .container-top-con-two {
    margin-top: 3vh;
    //   height: 52vh;
    //   background-color: #bfa;
    background-color: #fff;
    .container-top-con-two-one {
      color: #29b7b7;
      width: 88vw;
      height: 6vh;
      border-bottom: 1px solid #eaeaea;
      padding: 1vh;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .wenhao {
        width: 30px;
        vertical-align: middle;
      }
    }
  }
}
//提交订单
.bottom {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100vh;
  height: 7vh;
  background-color: #29b7b7;

  button {
    width: 94vw;
    height: 7vh;
    position: absolute;
    left: 50%;
    top: 0;
    border-radius: 5px;
    border: none;
    background-color: #ff7e00;
    color: white;
    transform: translateX(-86vw);
  }
}
</style>