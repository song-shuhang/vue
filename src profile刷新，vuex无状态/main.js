import Vue from 'vue'
import App from './App'
import 'lib-flexible/flexible'

import './veevalidate'//引入表单的验证
import * as API from './api'


import router from './router'
import store from './store'

import GshopHeader from './components/GshopHeader/GshopHeader.vue'

Vue.prototype.$API= API
Vue.component('GshopHeader',GshopHeader)
new Vue({

  el:'#app',
  components:{
    App
  },
  template:'<App/>',
  router,
  store
})