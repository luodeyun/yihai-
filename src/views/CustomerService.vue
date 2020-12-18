<template>
  <div id="customer">
    <div class="nav-bar">
      <span>客服中心</span>
      <span><img src="@/assets/img/phone2.png" alt=""></span>
    </div>
    <div class="iconbar">
      <span><img src="@/assets/img/kp.png" alt=""><p>开票管理</p></span>
      <span><img src="@/assets/img/weizhang2.png" alt=""><p>违章处理</p></span>
      <span><img src="@/assets/img/yijianfankui2.png" alt=""><p>意见反馈</p></span>
    </div>
    <div class="grass">
      <div class="grass-top">
        猜你想问</div>
      <div class="grass-con">
        <div class="grass-con-top">
          <span>预定流程</span>
          <span>免押金租车服务</span>
        </div>
        <div class="grass-con-bottom">
          <span>预定流程</span>
          <span>免押金租车服务</span>
        </div>
        <div class="grass-bottom">不是你想问的?联系人工客服</div>
      </div>
    </div>
    <div class="bottom">
      <div class="bottom-bar">
        <span @click="onchange" :class="actionR ? 'demo' : ''">国内自驾</span>
        <span @click="offchange" :class="actionG ? 'demo' : ''"> 高端专车</span>
      </div>
      <div class="roadtrip" v-if="actionR">
        <van-collapse v-model="active">
          <van-collapse-item title="基本租车规则" name="1" class="p">
            <p>预定流程</p>
            <p>修改订单</p>
            <p>取车流程</p>
            <p>车辆使用</p>
            <p>车辆归还</p>
            <p>服务完成</p>
            <p>取消预定</p>
          </van-collapse-item>
          <van-collapse-item title="预付订单" name="2" class="p">
            <p>预付订单规则</p>
          </van-collapse-item>
          <van-collapse-item title="注册登录" name="3" class="p">
            <p>会员注册</p>
            <p>找回密码</p>
            <p>修改密码</p>
            <p>注销账号</p>
          </van-collapse-item>
          <van-collapse-item title="事故处理" name="4" class="p">
            <p>事故处理</p>
            <p>车辆事故处理指引</p>
            <p>基本保障服务费说明</p>
            <p>增值服务</p>
            <p>备用车使用</p>
          </van-collapse-item>
          <van-collapse-item title="芝麻信用" name="5" class="p">
            <p>免押金租车服务？</p>
            <p>详细规则？</p>
            <p>什么是芝麻信用分？</p>
            <p>如何查询芝麻信用分？</p>
            <p>订单是否可以部分免押？</p>
            <p>官网订单是否可以享受免押服务？</p>
            <p>常用租车人是否可以享受免押服务？</p>
            <p>订单费用预期是否会对芝麻信用造成影响</p>
            <p>什么是负面记录</p>
            <p>双免订单修改</p>
          </van-collapse-item>
          <van-collapse-item title="友情提示" name="6" class="p">
            <p>客服热线</p>
            <p>投诉</p>
            <p>避免高峰取车还车</p>
            <p>新用户</p>
            <p>客户信息变更</p>
          </van-collapse-item>
          <van-collapse-item title="违章处理" name="7" class="p">
            <p>处理违章的材料</p>
            <p>违章处理地</p>
            <p>行驶证扫描件</p>
            <p>预约原件</p>
            <p>违章处理中</p>
            <p>违章处理后</p>
          </van-collapse-item>
          <van-collapse-item title="积分商城" name="8" class="p">
            <p>积分比例</p>
            <p>积分获得</p>
            <p>积分规则</p>
            <p>积分查询</p>
            <p>积分兑换</p>
            <p>积分抵扣</p>
            <p>积分有效期</p>
          </van-collapse-item>
        </van-collapse>
      </div>
      <div class="gaoduan" v-if="actionG">
        <van-collapse v-model="activeName" accordion>
          <van-collapse-item title="查询信息" name="1" class="p">
            <p>用车城市</p>
            <p>用车类型</p>
            <p>提供车型</p>
            <p>司机信息</p>
            <p>查询订单</p>
          </van-collapse-item>
          <van-collapse-item title="预定" name="2" class="p">
            <p>预定渠道</p>
            <p>如何预定？</p>
          </van-collapse-item>
          <van-collapse-item title="账户相关" name="3" class="p">
            <p>如何绑定信用卡</p>
            <p>如何绑定企业账户</p>
          </van-collapse-item>
          <van-collapse-item title="取消" name="4" class="p">
            <p>常规取消条款</p>
            <p>紧急用车取消条款</p>
          </van-collapse-item>
          <van-collapse-item title="发票相关" name="5" class="p">
            <p>如何申请发票</p>
            <p>发票开具时效</p>
            <p>没有收到电子发票</p>
          </van-collapse-item>
          <van-collapse-item title="费用相关" name="6" class="p">
            <p>支付方式</p>
          </van-collapse-item>
          <van-collapse-item title="计费规则" name="7" class="p">
            <p>超公里费</p>
            <p>超时费</p>
            <p>路桥费,停车费</p>
            <p>驾驶员食宿费</p>
            <p>空驶费</p>
            <p>夜间服务费</p>
            <p>等待费</p>
          </van-collapse-item>
        </van-collapse>
      </div>
    </div>
  </div>
</template>;

<script>
export default {
  components: {},
  data() {
    return {
      activeName: ["0"],
      actionR: true,
      actionG: false,
      active: ["0"],
    };
  },
  methods: {
    onchange() {
      // 点击国家出现 高端消失
      this.actionR = true;
      this.actionG = false;
    },
    offchange() {
      // 点击国家出现 高端消失
      this.actionR = false;
      this.actionG = true;
    },
  },
};
</script>
 <style scoped lang='less'>
#customer {
  width: 100vw;
}
.nav-bar {
  position: fixed;
  padding: 2vw;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 96vw;
  height: 4vh;
  font-weight: 700;
 background-color: #fff;
  img{
    width: 6vw;
    height: 3vh;
  }
}
.iconbar {
  margin-top: 6vh;
  width: 100vw;
  height: 14vh;
  // background-color: aqua;
  display: flex;
  justify-content: space-around;
  align-items: center;
  span {
    width: 14vw;
    height: 10vh;
    // background-color: blanchedalmond;
    display: flex;
    justify-content: space-around;
    flex-flow: column;
    font-size: 12px;
    img{
      margin-left:2vw; 
      width:10vw;
      height: 6vh;
    }
   p{
     margin-left:1vw;
   }
  }
}
.grass {
  width: 100vw;
  height: 29vh;
  // background-color: chartreuse;
  .grass-top {
    width: 96vw;
    height: 5vh;
    padding:0 2vw;
    // background-color: cornflowerblue;
    font-weight: 700;
  }
  .grass-con {
    width: 94vw;
    margin: 0 3vw;
    height: 16vh;
    background-color: #bfa;
    .grass-con-top {
      width: 94vw;
      height: 8vh;
      background-color: #fff;
      span {
        display: inline-block;
        width: 43vw;
        height: 6vh;
        border-radius: 10px;
        background-color:rgb(224, 223, 223);
        margin: 1vh 2vw;
        text-align: center;
        line-height: 6vh;
        font-size:14px; 
      }
    }
    .grass-con-bottom {
      width: 94vw;
      height: 8vh;
      background-color: #fff;
      span {
        display: inline-block;
        width: 43vw;
        height: 6vh;
        border-radius: 10px;
        background-color: rgb(224, 223, 223);
        margin: 1vh 2vw;
        font-size:14px; 
        text-align: center;
        line-height: 6vh;
      }
    }
  }
  .grass-bottom {
    width: 90vw;
    height: 5vh;
    margin: 1.5vw auto;
    color: #FF9938;
    border:1px solid orange; 
    font-size: 14px;
    letter-spacing: 2px;
    background-color: #fff;
    border-radius: 15px;
    text-align: center;
    line-height: 5vh;
  }
}
.bottom {
  width: 100vw;
}
.bottom-bar {
  width: 50vw;
  height: 5vh;
  background-color: #fff;
  span {
    width: 23vw;
    height: 5vh;
    margin: 0 2vw;
    text-align: center;
    line-height: 5vh;
    font-weight: 700;
  }
}
.demo {
  color: orange;
}
.roadtrip {
  width: 94vw;
  margin-top: 2vh;
}
.gaoduan {
  width: 94vw;
  margin-top: 2vh;
}
.p p {
  width: 92vw;
  height: 5vh;
  //   text-align: center;
  line-height: 5vh;
  background-color: gainsboro;
  border-bottom: 1px solid #dddddd;
  margin: 2px 0;
  padding: 0;
}
</style>