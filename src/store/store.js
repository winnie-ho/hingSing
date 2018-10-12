import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

Vue.use(Vuex)
Vue.use(VueResource)

export const store = new Vuex.Store({
  state: {
    order: {},
    client: {},
    clients: []
  },
  mutations: {
    setClients: (state, payload) => (state.clients = payload),
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
    fetchClients: (context, clients) => {
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
    }
  }
})
