import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

import shop from './modules/shop'

Vue.use(Vuex)


export default new Vuex.Store({
    modules:{
        shop
    },
    state,
    actions,
    mutations,
    getters
})