import Vue from 'vue'

import  {getShopDatas} from '../../api'

import {SAVE_SHOPDATAS,ADD_FOOD_COUNT, DEL_FOOD_COUNT} from '../mutations-type'


// 模块化的vuex 的状态？？全在这里面, 对！
const state = {
    shopDatas:{},//// 初始化商家信息数据
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
    },
    [ADD_FOOD_COUNT](state,{food}){
        if (food.count) {
            food.count++
        }else{
           
            Vue.set(food, 'count', 1)
        }
    },
    [DEL_FOOD_COUNT](state,{food}){
        if (food.count) {
            food.count--
        }
    },

}

const getters ={}

export default {

    state,
    mutations,
    actions,
    getters,

}