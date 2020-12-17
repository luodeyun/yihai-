<template>
    <div id = 'electioncar'>
        <van-nav-bar class='navbar'
             title="选择车型"
             left-text="返回"
             left-arrow
             @click-left="onClickLeft"/>       
        <van-sidebar v-model="activeKey" class='sildbar' >
            <van-sidebar-item title="推荐"  />
            <van-sidebar-item title="经济型" />
            <van-sidebar-item title="精英型" />
            <van-sidebar-item title="SUV" />
            <van-sidebar-item title="5-15座商务" />
            <van-sidebar-item title="高端车" />
        </van-sidebar>
        <div id='container' v-if='activeKey==0'>
           <div class='container-c' v-for='(item,index) of StorkPrice' :key='index'>
                <span class='container-left' @click='playauto(item.CarVideoDto.LongMovieUrlFifteen,item.CarTypeItem.Name)'><img :src="item.CarTypeItem.SmallImagePath" alt="carimg" @click='playauto' ><img src="@/assets/img/playatuo.png" alt="" class='playatuo'></span>
                <span class='container-rigth' @click="order"> 
                   <div>
                      <p class='container-title'>{{item.CarTypeItem.Name}}</p>
                      <p class='container-title-two'>{{item.CommonDescription}}</p>
                       <div>
                         <span class='container-title-three' v-for='(i,index) of item.CommonItem.Tags' :key='index+1000'>{{i.TagName}}</span>
                       </div>
                    </div>
                </span>
                <div class='container-bottom'> <div >￥<span class='container-price'>{{item.FloorPrice}}</span>日均价</div></div>
            </div>           
          </div>
         
        <div id='container' v-if='activeKey==1'> 
          <div class='container-c' v-for='(item,index) of StorckPricejj' :key='index+90'>
                <span class='container-left' @click='playauto(item.CarVideoDto.LongMovieUrlFifteen,item.CarTypeItem.Name)'><img :src="item.CarTypeItem.SmallImagePath" alt=""  @click='playauto'><img src="@/assets/img/playatuo.png" alt="" class='playatuo'></span>
                <span class='container-rigth'> 
                   <div>
                      <p class='container-title'>{{item.CarTypeItem.Name}}</p>
                      <p class='container-title-two'>{{item.CommonDescription}}</p>
                       <div>
                         <span class='container-title-three' v-for='(i,index) of item.CommonItem.Tags' :key='index+1000'>{{i.TagName}}</span>
                       </div>
                    </div>
                </span>
                <div class='container-bottom'> <div >￥<span class='container-price'>{{item.FloorPrice}}</span>日均价</div></div>
            </div>   

        </div>
        <div id='container' v-if='activeKey==2'>
           <div class='container-c' v-for='(item,index) of StorckPriceJY' :key='index+600'>
                <span class='container-left' @click='playauto(item.CarVideoDto.LongMovieUrlFifteen,item.CarTypeItem.Name)'><img :src="item.CarTypeItem.SmallImagePath" alt="" ><img src="@/assets/img/playatuo.png" alt="" class='playatuo'></span>
                <span class='container-rigth'> 
                   <div>
                      <p class='container-title'>{{item.CarTypeItem.Name}}</p>
                      <p class='container-title-two'>{{item.CommonDescription}}</p>
                       <div>
                         <span class='container-title-three' v-for='(i,index) of item.CommonItem.Tags' :key='index+1000'>{{i.TagName}}</span>
                       </div>
                    </div>
                </span>
                <div class='container-bottom'> <div >￥<span class='container-price'>{{item.FloorPrice}}</span>日均价</div></div>
            </div> 
        </div>
        <div id='container' v-if='activeKey==3'>
        <div class='container-c' v-for='(item,index) of StorckPriceSUV' :key='index+6000'>
                <span class='container-left' @click='playauto(item.CarVideoDto.LongMovieUrlFifteen,item.CarTypeItem.Name)'><img :src="item.CarTypeItem.SmallImagePath" alt="" ><img src="@/assets/img/playatuo.png" alt="" class='playatuo'></span>
                <span class='container-rigth'> 
                   <div>
                      <p class='container-title'>{{item.CarTypeItem.Name}}</p>
                      <p class='container-title-two'>{{item.CommonDescription}}</p>
                       <div>
                         <span class='container-title-three' v-for='(i,index) of item.CommonItem.Tags' :key='index+1000'>{{i.TagName}}</span>
                       </div>
                    </div>
                </span>
                <div class='container-bottom'> <div >￥<span class='container-price'>{{item.FloorPrice}}</span>日均价</div></div>
            </div> 
        </div>
        <div id='container' v-if='activeKey==4'>
        <div class='container-c' v-for='(item,index) of StorckPriceSW' :key='index+6000'>
                <span class='container-left' @click='playauto(item.CarVideoDto.LongMovieUrlFifteen,item.CarTypeItem.Name)'><img :src="item.CarTypeItem.SmallImagePath" alt="" ><img src="@/assets/img/playatuo.png" alt="" class='playatuo'></span>
                <span class='container-rigth'> 
                   <div>
                      <p class='container-title'>{{item.CarTypeItem.Name}}</p>
                      <p class='container-title-two'>{{item.CommonDescription}}</p>
                       <div>
                         <span class='container-title-three' v-for='(i,index) of item.CommonItem.Tags' :key='index+1000'>{{i.TagName}}</span>
                       </div>
                    </div>
                </span>
                <div class='container-bottom'> <div >￥<span class='container-price'>{{item.FloorPrice}}</span>日均价</div></div>
            </div> 
        </div>
        <div id='container' v-if='activeKey==5'>
        <div class='container-c' v-for='(item,index) of StorckPriceGW' :key='index+6000'>
                <span class='container-left' @click='playauto(item.CarVideoDto.LongMovieUrlFifteen,item.CarTypeItem.Name)'><img :src="item.CarTypeItem.SmallImagePath" alt="" ><img src="@/assets/img/playatuo.png" alt="" class='playatuo'></span>
                <span class='container-rigth'> 
                   <div>
                      <p class='container-title'>{{item.CarTypeItem.Name}}</p>
                      <p class='container-title-two'>{{item.CommonDescription}}</p>
                       <div>
                         <span class='container-title-three' v-for='(i,index) of item.CommonItem.Tags' :key='index+1000'>{{i.TagName}}</span>
                       </div>
                    </div>
                </span>
                <div class='container-bottom'> <div >￥<span class='container-price'>{{item.FloorPrice}}</span>日均价</div></div>
            </div> 
        </div>
    <div class='bottom'> <span @click="pullsss">价格从高到低</span> <span @click="diyu">价格从低到高</span>  </div>
     </div>
</template>;

<script>
import { reqcar } from "@/network/Reqcar";
export default {
  components: {},
  data() {
    return {
      activeKey: 0,
      StorckPriceList: [],
      sortType: true
    };
  },
  mounted() {
    this.pull();
  },
  methods: {
    onClickLeft() {  //路由回退
      this.$router.go(-1);
    },
    pull() { //获取数据
      reqcar().then(res => {
        this.StorckPriceList = res[0].StockPriceList;
      });
    },
    pullsss() {  //升序
      this.sortType = false;
    },
    diyu(){ //降序
      this.sortType = true
    },
    playauto(a,b){  //带参跳闸un视频页面
      this.$router.push({name:'playauto',params:{id:a,title:b}})
    } ,
    order(){
     this.$router.push({name:"orderfrom"})
    }

  },
  computed: {
    StorkPrice() {
      //全部进行排序
      let { StorckPriceList, sortType } = this;
      if (sortType) {
        StorckPriceList.sort((p1, p2) => {
        
          return p1.FloorPrice - p2.FloorPrice;
        });
      } else {
        StorckPriceList.sort((p1, p2) => {
          return p2.FloorPrice - p1.FloorPrice;
        });
      }
   
      return StorckPriceList;
    },
    StorckPricejj() { //经济型:价格低于200的筛选出来
      let { StorckPriceList, sortType } = this;
      let  StorckPricejj=StorckPriceList.filter((item)=>{
           return item.FloorPrice<=200
      })
      if (sortType) {
        StorckPricejj.sort((p1, p2) => {
          return p1.FloorPrice - p2.FloorPrice;
        });
      } else {
        StorckPricejj.sort((p1, p2) => {
          return p2.FloorPrice - p1.FloorPrice;
        });
      }
      return StorckPricejj;
    },
    StorckPriceJY() { //精英型:价格低于200的筛选出来
      let { StorckPriceList, sortType } = this;
      let  StorckPriceJY=StorckPriceList.filter((item)=>{
           return item.FloorPrice>=200&&item.FloorPrice<=500
      })
      if (sortType) {
        StorckPriceJY.sort((p1, p2) => {
          return p1.FloorPrice - p2.FloorPrice;
        });
      } else {
        StorckPriceJY.sort((p1, p2) => {
          return p2.FloorPrice - p1.FloorPrice;
        });
      }
      return StorckPriceJY;
    },
    StorckPriceSUV() { //SUV型:选出suv型
      let { StorckPriceList, sortType } = this;
      let  StorckPriceSUV=StorckPriceList.filter((item)=>{
           return item.CommonDescription.indexOf('SUV')>0
      })
      if (sortType) {
        StorckPriceSUV.sort((p1, p2) => {
          return p1.FloorPrice - p2.FloorPrice;
        });
      } else {
        StorckPriceSUV.sort((p1, p2) => {
          return p2.FloorPrice - p1.FloorPrice;
        });
      }
      return StorckPriceSUV;
    },
    StorckPriceSW() { //7座型:选出7座商务型
      let { StorckPriceList, sortType } = this;
      let  StorckPriceSW=StorckPriceList.filter((item)=>{
           return item.CommonDescription.indexOf('7座')>0
      })
      if (sortType) {
        StorckPriceSW.sort((p1, p2) => {
          return p1.FloorPrice - p2.FloorPrice;
        });
      } else {
        StorckPriceSW.sort((p1, p2) => {
          return p2.FloorPrice - p1.FloorPrice;
        });
      }
      return StorckPriceSW;
    },
    StorckPriceGW() { //7座型:选出7座商务型
      let { StorckPriceList, sortType } = this;
      let  StorckPriceGW=StorckPriceList.filter((item)=>{
           return item.FloorPrice>=500
      })
      if (sortType) {
        StorckPriceGW.sort((p1, p2) => {
          return p1.FloorPrice - p2.FloorPrice;
        });
      } else {
        StorckPriceGW.sort((p1, p2) => {
          return p2.FloorPrice - p1.FloorPrice;
        });
      }
      return StorckPriceGW;
    },

    
  }
};
</script>
 <style scoped lang='less'>
#container {
  position: absolute;
  top: 7vh;
  left: 80px;
  height: 86vh;
  width: 78vw;
  background-color: #f2f2f2;
  overflow: scroll;
  .container-left {
    position: relative;
    display: inline-block;
    // float: left;
    overflow: hidden;
    width: 23vw;
    height: 14vh;
    img {
      margin-top: 3vh;
      width: 22vw;
      height: 8vh;
    }
.playatuo{
  width: 5vw;
  height: 4vh;
  position: absolute;
  top: 2vh;
  left:8vw;
}
  }
  .container-rigth {
    display: inline-block;
    width: 54vw;
    height: 14vh;
    overflow: hidden;
    padding-left: 1vw;
    div {
      margin-top: 2vh;
    }
  }
  .container-c {
    margin-bottom: 2vh;
    background-color: #fff;
  }
  .container-bottom {
    width: 78vw;
    height: 6vh;
    overflow: hidden;
    color: #c7c7c7;
    font-size: 12px;
    border-bottom: 1px solid #29b7b7;
    // background-color: green;
    div {
      width: 30vw;
      padding: 0;
      height: 6vh;
      // background-color: aquamarine;
      float: right;
      line-height: 6vh;
    }
  }
}
.navbar {
  background-color: #29b7b7;
  color: #fff !important;
  position: fixed;
  width: 100vw;
  left: 0;
  top: 0;
}
.sildbar {
  position: fixed;
  left: 0;
  top: 7vh;
}
.container-title {
  width: 50vw;
  color: #50d6d6;
  font-size: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-bottom: 2vh;
}
.container-title-two {
  width: 50vw;
  color: #bebebe;
  font-size: 12px;
}
.container-title-three {
  width: 50vw;
  color: #ff9938;
  font-size: 12px;
  background-color: #fef4ef;
  padding: 2px;
}
.container-price {
  width: 10vw;
  height: 25px;
  color: #ff9938;
  font-size: 14px;
  display: inline-block;
  text-align: center;
  font-size: 16px
}
.bottom {
  width: 100vw;
  height: 8vh;
  background-color: #ff9938;
  position: fixed;
  left: 0;
  top: 92vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

</style>