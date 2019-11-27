import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'
import VueRouter from 'vue-router'

Vue.prototype.$http = axios;
Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
