import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedOrders: [],
      // {
      //   boughtAmount: 20,
      //   boughtCoin: 'XRP',
      //   soldAmount: 60,
      //   soldCoin: 'TFT',
      //   date: '17/05/2018',
      //   state: 'initiated'
      // },
      // {
      //   boughtAmount: 20,
      //   boughtCoin: 'BTC',
      //   soldAmount: 46,
      //   soldCoin: 'ETH',
      //   date: '15/08/2018',
      //   state: 'done'
      // },
      // {
      //   boughtAmount: 20,
      //   boughtCoin: 'BTC',
      //   soldAmount: 46,
      //   soldCoin: 'ETH',
      //   date: '15/02/2018',
      //   state: 'in progress'
      // },
      // {
      //   boughtAmount: 20,
      //   boughtCoin: 'BTC',
      //   soldAmount: 46,
      //   soldCoin: 'ETH',
      //   date: '15/10/2018',
      //   state: 'failed'
      // },
      // {
      //   boughtAmount: 60,
      //   boughtCoin: 'ETH',
      //   soldAmount: 2,
      //   soldCoin: 'XRP',
      //   date: '16/07/2018',
      //   state: 'cancelled'
      // },
      // {
      //   boughtAmount: 20,
      //   boughtCoin: 'BTC',
      //   soldAmount: 200,
      //   soldCoin: 'TFT',
      //   date: '02/07/2018',
      //   state: 'done'
      // }
    user: {
      id: 'smqlfihamfsqf'
    }
  },
  mutations: {
    submitNewOrder (state, order) {
      console.log('in submitNewOrder')
      var date = new Date()
      state.loadedOrders.push({
        boughtAmount: order.buyAmount,
        boughtCoin: order.buyCoin.abbr,
        soldAmount: order.sellAmount,
        soldCoin: order.buyCoin.abbr,
        date: date,
        state: 'initialized'})
    },
    setStateOrders (state, response) {
      state.loadedOrders = response
    }
  },
  actions: {
    getOrders (context) {
      axios.get('http://localhost:5000/orders')
      .then(response => {
        console.log(response.data.orders)
        context.commit('setStateOrders', response.data.orders)
      })
    }
  },
  getters: {
    openOrders (state) {
      return state.loadedOrders.filter(order => {
        return order.state !== 'done' && order.state !== 'cancelled' && order.state !== 'failed'
      }).sort((orderA, orderB) => {
        return orderA.date > orderB.date
      })
    },
    orderHistory (state) {
      return state.loadedOrders.filter(order => {
        return order.state === 'done' || order.state === 'cancelled' || order.state === 'failed'
      }).sort((orderA, orderB) => {
        return orderA.date > orderB.date
      })
    }
  }
})
