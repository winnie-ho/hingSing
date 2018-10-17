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
    orders: [],
    products: [],
    basket: [],
    basketProductToEdit: {}
  },
  mutations: {
    setClients: (state, payload) => (state.clients = payload),
    setOrders: (state, payload) => (state.orders = payload),
    setProducts: (state, payload) => (state.products = payload),
    setClient: (state, payload) => (state.client = payload),
    setOrder: (state, payload) => (state.order = payload),
    setProduct: (state, payload) => (state.product = payload),
    addToBasket: (state, payload) => (state.basket.push(payload)),
    updateBasket: (state, payload) => (state.clients = payload),
    setBasketProductToEdit: (state, payload) => (state.basketProductToEdit = payload)
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
    setProduct: (context, product) => {
      context.commit('setProduct', product)
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
      Vue.http.delete('https://hing-sing.firebaseio.com/orders/' + order.id + '.json').then(function (data) {
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
      Vue.http.delete('https://hing-sing.firebaseio.com/clients/' + client.id + '.json').then(function (data) {
        return data.json()
      })
    },
    updateClient: (context, client) => {
      Vue.http.put('https://hing-sing.firebaseio.com/clients/' + client.id + '.json', client).then(function (data) {
        return data.json()
      })
    },
    fetchProducts: (context) => {
      Vue.http.get('https://hing-sing.firebaseio.com/products.json').then(function (data) {
        return data.json()
      }).then(function (data) {
        let products = []
        for (let key in data) {
          data[key].id = key
          products.push(data[key])
        }
        context.commit('setProducts', products)
      })
    },
    addProduct: (context, product) => {
      Vue.http.post('https://hing-sing.firebaseio.com/products.json', product).then(function (data) {
        return data.json()
      })
    },
    deleteProduct: (context, product) => {
      Vue.http.delete('https://hing-sing.firebaseio.com/products/' + product.id + '.json').then(function (data) {
        return data.json()
      })
    },
    updateProduct: (context, product) => {
      Vue.http.put('https://hing-sing.firebaseio.com/products/' + product.id + '.json', product).then(function (data) {
        return data.json()
      })
    },
    addToBasket: (context, product) => {
      context.commit('addToBasket', product)
    },
    updateBasket: (context, product) => {
      context.commit('updateBasket', product)
    },
    setBasketProductToEdit: (context, product) => {
      context.commit('setBasketProductToEdit', product)
    }
  }
})
