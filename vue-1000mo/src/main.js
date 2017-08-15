import Vue from 'vue'
import App from './App.vue'
import router from "./router.js"
// import store from "./store.js";

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'


new Vue({
  el: '#app',
  router,
  // store,
  render: h => h(App)
})
