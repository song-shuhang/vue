import {
    SAVE_ADDRESS,
    SAVE_CATEGORYS,
    SAVE_SHOPS,
    SAVE_USER,
    SAVE_TOKEN
} from './mutations-type'


export default {//对象里面是k/v 的组合，要想接受变量必须是中括号
    //{}这是自己写的话，规定action 传过来的是对象里面k叫address
    [SAVE_ADDRESS](state,{address}){
        state.address = address
    },
    [SAVE_CATEGORYS](state, {categorys}){
        state.categorys = categorys
    },
    [SAVE_SHOPS](state, {shops}){
        state.shops = shops
    },
    [SAVE_USER](state, {user}){
        state.user = user
      },
      [SAVE_TOKEN](state, {token}){
        // 存储到本地localStorage || sessionStorage
        localStorage.setItem('token_key', token)
        state.token = token
      },
}