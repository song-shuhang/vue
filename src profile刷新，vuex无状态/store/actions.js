import {
    getAddress,
    getCategorys,
    getShops
}from '../api'
import {
    SAVE_ADDRESS,
    SAVE_CATEGORYS,
    SAVE_SHOPS,
    SAVE_USER,
    SAVE_TOKEN
  } from "./mutations-type";

export default {
    async getAddressAction({commit}){
         //1. 发送请求获取数据
        let result = await getAddress(40.10038,116.36867)
        if (result.code ===0) {
            // 2. 调用mutation，将数据交给mutation
            commit(SAVE_ADDRESS, {address: result.data}) // ??? 
            // mutation?? 他里面是怎末接的，他的第一个值state,是固定的吗
            //老的state？？？

        }

    },
    async getCategorysAction({commit}){
        let result = await getCategorys()
        if(result.code === 0){
          commit(SAVE_CATEGORYS, {categorys: result.data})
         // 方法二需要一个函数 typeof fn === 'function' && fn()
        }
      },

    async getShopsAction({commit,state}){
      let result = await getShops(state.latitude, state.longitude)
      if (result.code ===0) {
        commit(SAVE_SHOPS,{shops: result.data})
      }
    },
    getUserAction({commit}, {user}){
      commit(SAVE_TOKEN, {token: user.token})
      delete user.token
      commit(SAVE_USER, {user})
    }  
}