import Msite from '../pages/Msite/Msite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'

import Login from '../pages/Login/Login.vue'



export default [
    {
        path:'/msite',
        component:Msite,
        meta: { // 传多个键值对，隐式传参，缺点： 不能动态传参
            isShowFooterGuide: true
          }
    },
    {
        path:'/order',
        component:Order,
        meta: { // 传多个键值对，隐式传参，缺点： 不能动态传参
            isShowFooterGuide: true
          }
    },
    {
        path:'/profile',
        component:Profile,
        meta: { // 传多个键值对，隐式传参，缺点： 不能动态传参
            isShowFooterGuide: true
          }
    },
    {
        path:'/search',
        component:Search,
        meta: { // 传多个键值对，隐式传参，缺点： 不能动态传参
            isShowFooterGuide: true
          }
    },
    {
        path:'/',
        redirect:'/msite'
    },
    {
        path:'/login',
        component:Login
    }
]