<template>
  <div class="homeMaincenter">
    <div class="election">
      <span>
        <van-badge dot color="#FFCA28"></van-badge>
        选择城市或景点</span
      >
      <p></p>
      <span>异地还车</span>
    </div>
    <div class="containcity">
      <p @click="elecity" class="address">{{ count.name }}</p>
      <p></p>
      <p @click="backcar" class="address">{{ count.name }}</p>
    </div>
    <div class="containdate">
      <div @click="show = true">
        <div class='monday'>{{ initmonth }}月{{ initday }}日</div>
        <p class='weekday'>星期{{weekday}}</p>
      </div>
      <p class="Postion_">{{ dispance }}天</p>
      <p class="position_">_______________</p>
      <p></p>
      <div @click="show = true">
        <div  class='monday'>{{ endmonth }}月{{ endday }}日</div>
        <p  class='weekday'>星期{{weekdayend}}</p>
      </div>

      <van-calendar v-model="show" type="range" @confirm="onConfirm" />
    </div>
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
      weekday:null,
      weekdayend:null
    };
  },

  components: {},
  mounted() {
    this.getmonthandday();
  },
  methods: {
    elecity() {
      this.$router.push("/election");
    },
     backcar() {
      this.$router.push("/election");
    },
    formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(date) {
      const [start, end] = date;
      let arr =['一','二','三','四','五','六','日']
      console.log(start, end);
      let a = (end.getDate() - start.getDate())
      console.log();
      
      this.dispance = (end-start)/1000/60/60/24;
      this.show = false;
      this.initday = start.getDate();
      this.initmonth = start.getMonth() + 1;
      this.endday = end.getDate();
      this.endmonth = end.getMonth() + 1;
      this.weekday=arr[start.getDay()]
      this.weekdayend=arr[end.getDay()]
    },
    getmonthandday() {
      let arr =['一','二','三','四','五','六','日']
      this.initmonth = new Date().getMonth() + 1;
      this.initday = new Date().getDate();
      this.weekday = arr[new Date().getDay()]
      this.endmonth = new Date().getMonth() + 1;
      this.endday = new Date().getDate()+1;
      this.weekdayend =arr[ new Date().getDay()+1]
    },

  },
  computed: {
    count() {
      return this.$store.state.val;
    },
  },
};
</script>
 <style scoped lang='less'>
.homeMaincenter {
  background-color: #fff;
  width: 98vw;
  height: 22vh;
  margin: 0 auto;
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
  border-bottom: 1px solid #aaaaaa;
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
  border-bottom: 1px solid #aaaaaa;
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
.monday{
  width:80px;
  height: 21px;
  text-align: center;
  line-height: 21px;
}.weekday{
  width:70px;
  height: 21px;
  text-align: center;
  line-height: 21px
}
</style>