<template>
  <div id="mine">
    <div class="mine-header">
      <span class="mine-header-img"> 头像 </span>
      <div class="mine-header-rigth">
        <span class="mine-header-right-phone">18372028861</span>
        <div class="mine-header-right-vip">
          <span>普通会员</span><span>待认证</span>
        </div>
      </div>
    </div>
    <div class="mine-contain">
      <div class="mine-contain-first">我的订单</div>
      <div class="mine-contain-sconed">
        <span class="mine-contain-sconed-c"
          ><img src="@/assets/img/qiche.png" alt="" />国内自驾</span
        >
        <span class="mine-contain-sconed-c"
          ><img src="@/assets/img/taocan.png" alt="" />超值套餐</span
        >
        <span class="mine-contain-sconed-c"
          ><img src="@/assets/img/zhuanche.png" alt="" />高端专车</span
        >
        <span class="mine-contain-sconed-c"
          ><img src="@/assets/img/jingdian.png" alt="" />景点门票</span
        >
        <span class="mine-contain-sconed-c"
          ><img src="@/assets/img/haiwai.png" alt="" />海外自驾</span
        >
      </div>
    </div>
    <div class="mine-contain">
      <div class="mine-contain-first">我的钱包</div>
      <div class="mine-contain-sconed">
        <span class="mine-contain-sconed-c"
          ><img src="@/assets/img/qianbao.png" alt="" />国内自驾</span
        >
        <span class="mine-contain-sconed-c"
          ><img src="@/assets/img/jifen.png" alt="" />国内自驾</span
        >
        <span class="mine-contain-sconed-c"
          ><img src="@/assets/img/youhuijuan.png" alt="" />国内自驾</span
        >
        <span class="mine-contain-sconed-c"
          ><img src="@/assets/img/xyk.png" alt="" />国内自驾</span
        >
        <span class="mine-contain-sconed-c"
          ><img src="@/assets/img/daijing.png" alt="" />国内自驾</span
        >
      </div>
    </div>
    <div class="mine-contain">
      <div class="mine-contain-first">我的订单</div>
      <div class="mine-contain-sconed">
        <span class="mine-contain-sconed-c"
          ><img src="@/assets/img/qiye.png" alt="" />企业信息</span
        >
        <span class="mine-contain-sconed-c"
          ><img src="@/assets/img/kaipiao.png" alt="" />开票管理</span
        >
        <span class="mine-contain-sconed-c"
          ><img src="@/assets/img/weizhang.png" alt="" />违章查询</span
        >
        <span class="mine-contain-sconed-c"
          ><img src="@/assets/img/help.png" alt="" />帮助中心</span
        >
        <span class="mine-contain-sconed-c"
          ><img src="@/assets/img/weixing.png" alt="" />公众号</span
        >
      </div>
    </div>

    <div class="mine-bottom">
      <div class="mine-bottom-first">
        <div>
          <span class="mine-bottom-first-last"
            ><img src="@/assets/img/liwu.png" alt=""
          /></span>
          <span class="mine-bottom-first-last" style="width: 60px"
            >全民砍价</span
          >
        </div>
        <span class="mine-bottom-first-last"><van-icon name="arrow" /></span>
      </div>
      <div class="mine-bottom-first">
        <div>
          <span class="mine-bottom-first-last"
            ><img src="@/assets/img/changyong.png" alt=""
          /></span>
          <span class="mine-bottom-first-last" style="width: 60px"
            >常用信息</span
          >
        </div>
        <span class="mine-bottom-first-last"><van-icon name="arrow" /></span>
      </div>
      <div class="mine-bottom-first">
        <div>
          <span class="mine-bottom-first-last"
            ><img src="@/assets/img/yijian.png" alt=""
          /></span>
          <span class="mine-bottom-first-last" style="width: 60px"
            >意见反馈</span
          >
        </div>
        <span class="mine-bottom-first-last"><van-icon name="arrow" /></span>
      </div>
      <div class="mine-bottom-first">
        <div>
          <span class="mine-bottom-first-last"
            ><img src="@/assets/img/fengxiang.png" alt=""
          /></span>
          <span class="mine-bottom-first-last" style="width: 60px"
            >体验分享</span
          >
        </div>
        <span class="mine-bottom-first-last"><van-icon name="arrow" /></span>
      </div>
    </div>
  </div>
</template>;
<script>
export default {
  components: {},
  data() {
    return {};
  },
};
</script>
 <style lang='less' scoped>
#mine {
  color: #666a6d;
  padding: 0;
  margin: 0;
  width: 100vw;
  margin-bottom: 10vh;
  overflow: scroll;
  background-color: #f3f3f3;
}
.mine-header {
  width: 100vw;
  height: 18vh;
  background-color: #00ffff;
  display: flex;
  align-items: center;
  .mine-header-img {
    display: inline-block;
    width: 10vh;
    height: 10vh;
    margin: 0 5vh;
    border-radius: 5vh;
    text-align: center;
    line-height: 10vh;
    background-color: #fff;
  }
  .mine-header-rigth {
    background-color: #fff;
    width: 50vw;
    height: 10vh;
    .mine-header-right-phone {
      background-color: #bfa;
      display: inline-block;
      text-align: center;
      line-height: 6vh;
      height: 6vh;
    }
    .mine-header-right-vip {
      background-color: green;
      height: 4vh;
      width: 38vw;
      color: #fff;
      font-size: 12px;
      line-height: 4vh;
      display: flex;
      justify-content: space-between;
      span {
        margin: 0 2vw;
      }
    }
  }
}
.mine-contain {
  width: 96vw;
  height: 18vh;
  border-radius: 8px;
  background-color: #fff;
  margin: 1vh auto;
}
.mine-contain-first {
  font-size: 14px;
  line-height: 3vh;
  height: 3vh;
  padding: 1vh;
  border-bottom: 1px solid #aaaaaa;
}
.mine-contain-sconed {
  display: flex;
  justify-content: space-around;
  font-size: 12px;
  height: 13vh;
  .mine-contain-sconed-c {
    height: 9vh;
    width: 15vw;
    margin-top: 2vh;
    background-color: #fff;
    font-size: 12px;
    text-align: center;
    img {
      display: block;
      width: 8vw;
      height: 4vh;
      margin: 1vh auto;
    }
  }
}
.mine-bottom {
  width: 96vw;
  margin: auto;
  padding: 0;
  border-radius: 8px;
  background-color: #fff;
  .mine-bottom-first {
    font-size: 12px;
    width: 94vw;
    height: 8vh;
    margin-left: 2vw;
    border-bottom: 1px solid #bcb9b9;
    display: flex;
    justify-content: space-between;

    .mine-bottom-first-last {
      display: inline-block;
      margin-top: 1vh;

      width: 6vw;
      height: 6vh;
      line-height: 6vh;
      text-align: center;

      img {
        margin-bottom: -0.5vh;
        width: 4vw;
        height: 2.5vh;
      }
    }
  }
}
</style>