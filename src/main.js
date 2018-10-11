// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import { store } from './store/store'
import ElementUI from 'element-ui'

Vue.use(VueResource)
Vue.config.productionTip = false
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store: store,
  render: h => h(App),
  router,
  components: { App },
  template: '<App/>'
})
