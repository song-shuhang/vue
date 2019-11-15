import Vue from 'vue'

import  {getShopDatas} from '../../api'

import {SAVE_SHOPDATAS,ADD_FOOD_COUNT, DEL_FOOD_COUNT} from '../mutations-type'


// 模块化的vuex 的状态？？全在这里面, 对！
const state = {
    shopDatas:{},//// 初始化商家信息数据
    cartShops:[],//初始化购物车信息？？？为啥一开始可以判断出来
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

            // 添加到购物车？？
            state.cartShops.push(food)
        }
    },
    [DEL_FOOD_COUNT](state,{food}){
        if (food.count) {
            food.count--
            if (!!! food.count) {
                // 从购物车删除商品，截取的方法
                state.cartShops.splice(state.cartShops.indexOf(food),1)            }
        }
    },

}

const getters ={

    //总的数量    
    totalCount(state){
        return state.cartShops.reduce((pre,food)=>{
            return pre += food.count
        },0)
    },

    // 总的价格
    totalPrice(state){
        return state.cartShops.reduce((pre,food)=>{
            return pre += food.count * food.price
        },0)
    }

}

export default {

    state,
    mutations,
    actions,
    getters,

}