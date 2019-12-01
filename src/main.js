import Vue from 'vue'

import { router } from './_router';
import App from './App.vue'

import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'
import 'es6-promise/auto'
import { store } from './_store';
import VueCookies from 'vue-cookies';
import JwtDecripter from 'vue-jwt-decode';

Vue.use(VueCookies);
Vue.prototype.$http = axios;
Vue.use(BootstrapVue);
Vue.use(JwtDecripter);
Vue.config.productionTip = false;


new Vue({
  store: store,
  router,
  render: h => h(App),
}).$mount('#app');
