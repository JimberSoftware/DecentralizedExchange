// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import MyWallet from './components/Application/MyWallet.vue'
import NewOrder from './components/Application/NewOrder.vue'
import OrderHistory from './components/Application/OrderHistory.vue'
import { store } from './store'

Vue.use(Vuetify)

Vue.config.productionTip = false

Vue.component('my-wallet', MyWallet)
Vue.component('new-order', NewOrder)
Vue.component('order-history', OrderHistory)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
