import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        sum: 0,
    },
    mutations: {
        increase: state => state.sum += 1,
        decrease: state => state.sum -= 1,
    }
});
