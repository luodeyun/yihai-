import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css'; 
import './assets/css/reset.css'
import BestCity from 'best-city'
Vue.config.productionTip = false
Vue.use(Vant);
Vue.use(BestCity)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
