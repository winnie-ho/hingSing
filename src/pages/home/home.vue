<template src='./home.html'></template>
<style scoped src='./home.css'></style>

<script>
import navMenu from "../../components/navMenu/navMenu.vue";
import siteHeader from "../../components/siteHeader/siteHeader.vue";
import loginForm from "../../components/loginForm/loginForm.vue";
import registerForm from "../../components/registerForm/registerForm.vue";
import { store } from '../../store/store.js'

export default {
  name: "home",
  components: {
    "nav-menu": navMenu,
    "site-header": siteHeader,
    "login-form": loginForm,
    "register-form": registerForm
  },
  data() {
    return {
      isRegisteredUser: true
    };
  },
  mounted() {
    this.$store.dispatch('fetchOrders');
  },
  methods: {
    setRegisteredUser(event){
      this.isRegisteredUser = event;
    },
    goToProductsPage(){
      this.$router.push('/products');
    },
    orderType(type){
      return this.filteredOrders.filter(order => order.status === type);
    }
  },
  computed: {
    user(){
      if (!this.$store.state.user.user) return;
      return this.$store.state.user;
    },
    orders() {
      return this.$store.state.orders;
    },
    filteredOrders(){
      if (this.user && this.orders ) {
        return this.orders.filter(order => order.email === this.user.user.email);
      } else {
        return [];
      }
    },
    numOpenOrders(){
      return this.orderType('open').length;
    },
    numCompleteOrders(){
      return this.orderType('complete').length;
    }
  }
};
</script>

