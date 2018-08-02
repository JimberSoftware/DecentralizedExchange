import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedOrders: [
      {
        boughtAmount: 20,
        boughtCoin: 'XRP',
        soldAmount: 60,
        soldCoin: 'TFT',
        date: '17/07/2018',
        state: 'done'
      },
      {
        boughtAmount: 20,
        boughtCoin: 'BTC',
        soldAmount: 46,
        soldCoin: 'ETH',
        date: '15/07/2018',
        state: 'done'
      },
      {
        boughtAmount: 60,
        boughtCoin: 'ETH',
        soldAmount: 2,
        soldCoin: 'XRP',
        date: '16/07/2018',
        state: 'done'
      },
      {
        boughtAmount: 20,
        boughtCoin: 'BTC',
        soldAmount: 200,
        soldCoin: 'TFT',
        date: '02/07/2018',
        state: 'done'
      }
    ],
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
    }
  },
  actions: {
  },
  getters: {
    loadedOrders (state) {
      return state.loadedOrders.sort((orderA, orderB) => {
        return orderA.date > orderB.date
      })
    }
  }
})
