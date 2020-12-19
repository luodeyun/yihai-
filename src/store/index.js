import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token:'',
    userPhone:'您还未登录哦',
    username:'',
    initval: {
      name: "武汉"
    },
    endval: {
      name: "武汉"
    },
    date: "",
    dispance:1,
    initmonth: new Date().getMonth() + 1, //开始的月份
    initday: new Date().getDate(), //开始的天数
    endmonth: new Date().getMonth() + 1, //结束的月份
    endday: new Date().getDate() + 1, //结束的天数
    weekday: new Date().getDay() - 1, //开始的星期几
    weekdayend: new Date().getDay() //结束的星期皆
  },
  mutations: {
    setPhone(state,s){
      state.userPhone=s
   }, setName(state,s){
    state.username=s
 },
    settoken(state,s){
       state.token=s
    },
    initVla(state, val) {
      if (val) {
        state.initval = val;
      } else {
        return state.initval.name
      }

    },
    endVla(state, val) {
      if (val) {
        state.endval = val;
      } else {
        return state.endval.name
      }
    },
    getday(state, pyload) {
      console.log(pyload);
      let {
        endday,
        endmonth,
        initday,
        initmonth,
        weekday,
        weekdayend,
        dispance
      } = pyload;
      state.endday = endday,
      state.endmonth = endmonth
      state.initmonth = initmonth
      state.initday = initday
      state.weekday = weekday
      state.weekdayend = weekdayend
      state.dispance=dispance
    }
  },
  actions: {},
  modules: {},
});