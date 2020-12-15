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
      <p @click="dianwo" class="address">{{ count.name }}</p>
      <p></p>
      <p @click="dianwo" class="address">{{ count.name }}</p>
    </div>
    <div class="containdate">
      <div @click="show = true">
        <div>{{ initmonth }}月{{ initday }}日</div>
        <p style="margin: 5px">周二</p>
      </div>
      <p class="Postion_">{{ dispance }}天</p>
      <p class="position_">_______________</p>
      <p></p>
      <div @click="show = true">
        <div>{{ endmonth }} 月{{ endday }}号</div>
        <p style="margin: 5px">周二</p>
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
      dispance: 2,
      initmonth: null,
      initday: null,
      endmonth: null,
      endday: null,
    };
  },

  components: {},
  mounted() {
    this.getmonthandday();
  },
  methods: {
    dianwo() {
      this.$router.push("/election");
    },
    formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(date) {
      const [start, end] = date;
      console.log(start, end);
      this.dispance = end.getDate() - start.getDate();
      this.show = false;
      this.initday = start.getDate();
      this.initmonth = start.getMonth() + 1;
      this.endday = end.getDate();
      this.endmonth = end.getMonth() + 1;
    },
    getmonthandday() {
      this.initmonth = new Date().getMonth() + 1;
      this.initday = new Date().getDate();
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
</style>