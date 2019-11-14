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

Vue.prototype.$API= API
Vue.component('GshopHeader',GshopHeader)

Vue.component(Button.name, Button)

new Vue({

  el:'#app',
  components:{
    App
  },
  template:'<App/>',
  router,
  store
})