// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import MyWallet from './components/Application/MyWallet.vue'
import NewOrder from './components/Application/NewOrder.vue'
import Orders from './components/Application/Orders.vue'
import { store } from './store'

Vue.use(Vuetify, {
  theme: {
    primary: '#0d2e75',
    secondary: '#f2f6ff',
    accent: '#00e385',
    error: '#b71c1c'
  }
})

Vue.config.productionTip = false

Vue.component('app', App)
Vue.component('my-wallet', MyWallet)
Vue.component('new-order', NewOrder)
Vue.component('orders', Orders)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
