import Vue from 'vue'
import Router from 'vue-router'
import home from '../pages/home/home.vue'
import products from '../pages/products/products.vue'
import productView from '../pages/productView/productView.vue'
import orders from '../pages/orders/orders.vue'
import orderView from '../pages/orderView/orderView.vue'
import clients from '../pages/clients/clients.vue'
import clientView from '../pages/clientView/clientView.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: home },
    { path: '/products', component: products },
    { path: '/productView/:id', component: productView },
    { path: '/orders', component: orders },
    { path: '/orderView/:id', component: orderView },
    { path: '/clients', component: clients },
    { path: '/clientView/:id', component: clientView }
  ]
})
