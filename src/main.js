import Vue from 'vue'

import { store } from './store/authentication.module';
import { router } from './_router';
import App from './App.vue'

import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);
Vue.config.productionTip = false;


new Vue({
  el: '#app',
  store: store,
  router: router,
  render: h => h(App),
});
