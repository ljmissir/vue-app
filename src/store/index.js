/*
 * author: liaojianming
 * date: 2019-01-14
 * description: index.js
*/

import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import getters from './getters';
import state from './state';
import mutations from './mutations';

import createLogger from 'vuex/dist/logger';
const debug = process.env.NODE_ENV !== 'production';

Vue.use(Vuex);

// 调用new Vuex.Store()方法，实例化一个Store对象，并对外暴露
export default new Vuex.Store({
    actions,
    getters,
    state,
    mutations,
    strict: debug,
    plugins: debug ? [createLogger()] : []
});
