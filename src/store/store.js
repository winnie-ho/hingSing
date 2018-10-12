import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

Vue.use(Vuex)
Vue.use(VueResource)

export const store = new Vuex.Store({
  state: {
    order: {}
  },
  mutations: {
    setOrder: (state, payload) => (state.order = payload)
  },
  getters: {

  },
  actions: {
    setOrder: (context, order) => {
      context.commit('setOrder', order)
    }
    // fetchOrders: (context, orders) => {
    //   Vue.http.get('https://win-runs.firebaseio.com/orders.json').then(function (data) {
    //     return data.json()
    //   }).then(function (data) {
    //     let orders = []
    //     for (let key in data) {
    //       data[key].id = key
    //       orders.push(data[key])
    //     }
    //     context.commit('setOrders', orders)
    //   })
    // }
  }
})
