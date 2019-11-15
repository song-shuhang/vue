import Vue from 'vue'
import App from './App'
import 'lib-flexible/flexible'

import './veevalidate'//引入表单的验证
import * as API from './api'

import {Button} from 'mint-ui'

import router from './router'
import store from './store'

import './mock/mockServe' // 引入mock 模拟后台没给接口
import GshopHeader from './components/GshopHeader/GshopHeader.vue'

import CartControl  from './components/CartControl/CartControl.vue'

Vue.prototype.$API= API
// 全局注册
Vue.component('GshopHeader',GshopHeader)

Vue.component(Button.name, Button)

Vue.component('CartControl',CartControl)

// 组件内部的实例对象的原型对象  var xx = new Vue
new Vue({

  el:'#app',
  components:{
    App
  },
  template:'<App/>',
  router,
  store
})