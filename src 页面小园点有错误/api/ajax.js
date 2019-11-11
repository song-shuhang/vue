// 对ajax 的二次封装
import axios from 'axios'
import qs from 'qs'

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
    return config
})


// 2. 添加响应拦截器
instance.interceptors.response.use(
    response=>response.data,
    error=>{

        alert('请求失败')
        return new Promise(()=>{})// 手动返回一个状态为pending的promsie实例，保证不会自动进入下一个成功的回调
    }
)
export default instance