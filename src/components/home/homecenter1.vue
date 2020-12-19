<template>
  <div class="homeMaincenter">
  
    <div class="election">
      <span>
        <van-badge dot color="#FB4B30 "></van-badge>
        选择城市</span
      >
      <p></p>
      <span>还车点</span>
    </div>
    <div class="containcity">
      <p @click="elecity(1)" class="address">{{ count.name }}</p>
      <p></p>
      <p @click="backcar(2)" class="address">{{ endcount.name }}</p>
    </div>
    <div class="containdate">
      <div @click="show = true">
        <div class='monday'>{{ $store.state.initmonth }}月{{ $store.state.initday }}日</div>
        <p class='weekday'>星期{{$store.state.weekday}}</p>
      </div>
      <p class="Postion_">{{$store.state.dispance}}天</p>
      <p class="position_">_______________</p>
      <p></p>
      <div @click="show = true">
        <div  class='monday'>{{$store.state.endmonth}}月{{$store.state.endday }}日</div>
        <p  class='weekday'>星期{{$store.state.weekdayend}}</p>
      </div>
      <van-calendar v-model="show" type="range" @confirm="onConfirm" />
     
    </div>
     <div class='elecar'><van-button color="linear-gradient(to right, #ff6034, #ee0a24)" size='large' @click='electioncar'>
       去选车
</van-button></div>
  </div>
</template>;

<script>
export default {
  data() {
    return {
      date: "",
      show: false,
      dispance: 1,
      initmonth: null,
      initday: null,
      endmonth: null,
      endday: null,
      weekday: null,
      weekdayend: null
    };
  },
  components: {},
  mounted() {
    this.getmonthandday();
  },
  methods: {
    elecity(a) {
    this.$router.push({
        name:'election',
        params:{id:a}
      });
    },
    backcar(a) {
      this.$router.push({
        name:'election',
        params:{id:a}
      });
    },
    formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(date) {
      const [start, end] = date;
      let arr = ["一", "二", "三", "四", "五", "六", "日"]
      let a = end.getDate() - start.getDate();
      this.dispance = (end - start) / 1000 / 60 / 60 / 24; //距离天数  
      this.show = false;
      this.initday = start.getDate();      //初始日期 几号
      this.initmonth = start.getMonth() + 1;//初始月份 几月
      this.endday = end.getDate();       //结束日期 几号
      this.endmonth = end.getMonth() + 1; //结束月份
      this.weekday = arr[start.getDay()];  //开始星期几
      this.weekdayend = arr[end.getDay()]; //结束星期几
      let obj = {
        initday:this.initday,
        endday:this.endday,
        initmonth:this.initmonth,
        endmonth:this.endmonth,
        weekday:this.weekday,
        weekdayend:this.weekdayend,
        dispance:this.dispance
      }
      this.$store.commit('getday',obj)
    },

    //初始日期 
    getmonthandday() {
    
      let arr = ["一", "二", "三", "四", "五", "六", "日"];
      this.initmonth = new Date().getMonth() + 1; //现在的月份
      this.initday = new Date().getDate();     //现在的日期（几号）
      this.weekday = arr[new Date().getDay() - 1];// 现在的星期几
      this.endmonth = new Date().getMonth() + 1; //结束的月份
      this.endday = new Date().getDate() + 1; //结束的日期
      this.weekdayend = arr[new Date().getDay()]; //结束的星期几 
          let obj = {
        initday:this.initday,
        endday:this.endday,
        initmonth:this.initmonth,
        endmonth:this.endmonth,
        weekday:this.weekday,
        weekdayend:this.weekdayend,
        dispance:this.dispance
      }
       this.$store.commit('getday',obj)
    },
    electioncar(){
      this.$router.push({name:'electioncar'})
    }
  },
  computed: {
    count() {
      return this.$store.state.initval;
    },
     endcount() {
      return this.$store.state.endval;
    },
  },
  beforeRouteLeave (to, from, next) {
    console.log(to.name,'333');
    
      if(to.name=='login') {
        console.log('22');
        
        this.$notify({ type: "danger", message: "欢迎您来到一嗨租车" });}
      next()     
  }
};

</script>
 <style scoped lang='less'>
.homeMaincenter {
  background-color: #fff;
  width: 98vw;
  height: 28vh;
  margin: 2px auto;
}
.homeMaincenter .election {
  display: flex;
  justify-content: space-around;
  padding: 10px;
  padding-bottom: 10px;
  font-size: 12px;
  color: #6683b5;
}
.containcity {
  width: 98vw;
  height: 5vh;
  margin: 0 auto;
  // background-color: #f00;
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid rgb(233, 238, 238);
  .address {
    width: 16vw;
    height: 5vh;
    font-size: 14px;
    margin-left: 5vh;
    font-weight: 700;
  }
}
.containdate {
  position: relative;
  width: 98vw;
  height: 10vh;
  margin: 0 auto;
  // background-color: #bfa;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid rgb(233, 238, 238);
}
.position_ {
  color: #aaaaaa;
  position: absolute;
  left: 37%;
}
.Postion_ {
  color: #aaaaaa;
  position: absolute;
  left: 48%;
  top: 30%;
}
.monday {
  width: 80px;
  height: 21px;
  text-align: center;
  line-height: 21px;
}
.weekday {
  width: 70px;
  height: 21px;
  text-align: center;
  line-height: 21px;
}
.elecar{
  width:90vw;
  height:6vh;
  // background-color: #bfa;
  display: flex;
  justify-content: center;align-items: center;
  border-bottom: 1px solid  rgb(233, 238, 238);
  margin: 5px auto
}
</style>