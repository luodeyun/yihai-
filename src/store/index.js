import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    val: { name: "武汉" },
  },
  mutations: {
    setVla(state, val) {
      state.val = val;
      console.log(state.val);
    },
  },
  actions: {},
  modules: {},
});
