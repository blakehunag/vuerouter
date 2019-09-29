import Vue from 'vue'
import App from './App'
import router from './router'       //export default 
import {store} from './store/store' //export const store ¦³©R¦W
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
