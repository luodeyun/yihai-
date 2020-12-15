import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    val: { name: "武汉" },
  },
  mutations: {
    setVla(state, val) {
    if(val){
      state.val = val;
    }
     else {
       return state.name
     }
    },
  },
  actions: {},
  modules: {},
});
