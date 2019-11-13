import {
    getShopDatas
} from '../../api'

import {SAVE_SHOPDATAS} from '../mutations-type'


// 模块化的vuex 的状态？？全在这里面
const state = {
    shopDatas:{},//
}

const actions = {
    async getShopDatasAction({commit}){

        let result = await getShopDatas()
        if (result.code ===0 ) {
            commit(SAVE_SHOPDATAS,{shopDatas:result.data})
        }
    }
}

const mutations = {
    [SAVE_SHOPDATAS](state,{shopDatas}){
        state.shopDatas = shopDatas
    }

}

const getters ={}

export default {

    state,
    mutations,
    actions,
    getters,

}