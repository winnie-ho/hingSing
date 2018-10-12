import Vue from 'vue'
import Router from 'vue-router'
import home from '../pages/home/home.vue'
import products from '../pages/products/products.vue'
import orders from '../pages/orders/orders.vue'
import orderView from '../pages/orderView/orderView.vue'
import clients from '../pages/clients/clients.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: home },
    { path: '/products', component: products },
    { path: '/orders', component: orders },
    { path: '/orderView/:id', component: orderView },
    { path: '/clients', component: clients }
  ]
})
