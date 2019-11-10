import Vue from 'vue'
import App from './App'
import 'lib-flexible/flexible'

import router from './router'

import GshopHeader from './components/GshopHeader/GshopHeader.vue'

Vue.component('GshopHeader',GshopHeader)
new Vue({

  el:'#app',
  components:{
    App
  },
  template:'<App/>',
  router

})