import Vue from 'vue'

import { store } from './_store';
import { router } from './_router';
import App from './App.vue'

import BootstrapVue from 'bootstrap-vue'
import 'es6-promise/auto'

Vue.use(BootstrapVue);
Vue.config.productionTip = false;


new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
});
