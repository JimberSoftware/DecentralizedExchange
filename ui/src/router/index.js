import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import InitiateWallet from '@/components/InitiateWallet/InitiateWallet'
import SignIn from '@/components/SignIn/SignIn'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/initiatewallet',
      name: 'InitiateWallet',
      component: InitiateWallet
    }
  ],
  mode: 'history'
})
