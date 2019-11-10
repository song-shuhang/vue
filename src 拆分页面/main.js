import Vue from 'vue'
import App from './App'
import 'lib-flexible/flexible'

import router from './router'


new Vue({

  el:'#app',
  components:{
    App
  },
  template:'<App/>',
  router

})