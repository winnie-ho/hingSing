import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

Vue.use(Vuex)
Vue.use(VueResource)

export const store = new Vuex.Store({
  state: {
    order: {},
    client: {},
    clients: [],
    orders: []
  },
  mutations: {
    setClients: (state, payload) => (state.clients = payload),
    setOrders: (state, payload) => (state.orders = payload),
    setOrder: (state, payload) => (state.order = payload),
    setClient: (state, payload) => (state.client = payload)
  },
  getters: {

  },
  actions: {
    setOrder: (context, order) => {
      context.commit('setOrder', order)
    },
    setClient: (context, client) => {
      context.commit('setClient', client)
    },
    fetchOrders: (context) => {
      Vue.http.get('https://hing-sing.firebaseio.com/orders.json').then(function (data) {
        return data.json()
      }).then(function (data) {
        let orders = []
        for (let key in data) {
          data[key].id = key
          orders.push(data[key])
        }
        context.commit('setOrders', orders)
      })
    },
    addOrder: (context, order) => {
      Vue.http.post('https://hing-sing.firebaseio.com/orders.json', order).then(function (data) {
        return data.json()
      })
    },
    deleteOrder: (context, order) => {
      Vue.http.delete('https://hing-sing.firebaseio.com/orders/' + order.id + '.json', order).then(function (data) {
        return data.json()
      })
    },
    updateOrder: (context, order) => {
      Vue.http.put('https://hing-sing.firebaseio.com/orders/' + order.id + '.json', order).then(function (data) {
        return data.json()
      })
    },
    fetchClients: (context) => {
      Vue.http.get('https://hing-sing.firebaseio.com/clients.json').then(function (data) {
        return data.json()
      }).then(function (data) {
        let clients = []
        for (let key in data) {
          data[key].id = key
          clients.push(data[key])
        }
        context.commit('setClients', clients)
      })
    },
    addClient: (context, client) => {
      Vue.http.post('https://hing-sing.firebaseio.com/clients.json', client).then(function (data) {
        return data.json()
      })
    },
    deleteClient: (context, client) => {
      Vue.http.delete('https://hing-sing.firebaseio.com/clients/' + client.id + '.json', client).then(function (data) {
        return data.json()
      })
    },
    updateClient: (context, client) => {
      Vue.http.put('https://hing-sing.firebaseio.com/clients/' + client.id + '.json', client).then(function (data) {
        return data.json()
      })
    }
  }
})
