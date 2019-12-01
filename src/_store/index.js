import Vuex from 'vuex';
import Vue from "vue";
Vue.use(Vuex);

import { authentication } from './authentication.module';

export const store = new Vuex.Store({
    modules: {
        authentication
    }
});
