// 对ajax 的二次封装
import axios from 'axios'
import qs from 'qs'

//映入了路由
import router from '../router'

import {MessageBox} from 'mint-ui'

/// 生成一个Axios的伪实例,
// 具备Axios实例对象的所有属性，方法，但是不是真实的Axios实例
const instance = axios.create({
    baseURL:'/api'
})

// 1. 添加请求拦截器
instance.interceptors.request.use(config=>{
    if (config.method.toUpperCase() ==='POST'&& config.data instanceof Object) {
        config.data = qs.stringify(config.data)
    }

    let token = localStorage.getItem( 'token_key')
        // if(token) {
        //     config.headers.authorization = token
        // }else{

        //     throw new Error('没有token，请登录')
        // }
         // 判断是否需要携带token
        if(config.headers.needToken){
            if(token){
            // 1. token携带的方式： 1) cookie 2) 请求参数 3) 放在请求头
            config.headers.authorization = token
            }else {
            throw new Error('没有token，请先登录')
            }
        }


    return config
})


// 2. 添加响应拦截器
instance.interceptors.response.use(
    response=>response.data,
    error=>{
        //没有token 没有返回，没有请求体 响应拦截器
        if (!error.response) {
            
            MessageBox.alert(error.massage)
            router.currentRoute.path !== '/login' && router.replace('/login')   
        }else{
            
            if (error.response.status === 401) {
                MessageBox.alert('请重新登录')
                router.currentRoute.path !== '/login' && router.replace('/login')   
            }else if(error.response.status === 404){
                MessageBox.alert('请求为找到')
            }else{
                MessageBox.alert('请求失败')
            }

        }
        
        MessageBox.alert('error.message')
        return new Promise(()=>{})// 手动返回一个状态为pending的promsie实例，保证不会自动进入下一个成功的回调
    }
)
export default instance