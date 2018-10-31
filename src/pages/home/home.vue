<template src='./home.html'></template>
<style scoped src='./home.css'></style>

<script>
import siteHeader from "../../components/siteHeader/siteHeader.vue";
import navMenu from "../../components/navMenu/navMenu.vue";
import loginForm from "../../components/loginForm/loginForm.vue";
import registerForm from "../../components/registerForm/registerForm.vue";
import profileForm from "../../components/profileForm/profileForm.vue";
import { store } from '../../store/store.js'

export default {
  name: "home",
  components: {
    "site-header": siteHeader,
    "nav-menu": navMenu,
    "login-form": loginForm,
    "register-form": registerForm,
    "profile-form": profileForm
  },
  mounted(){
    this.isProfileSetupCheck();
    this.$store.dispatch('fetchOrders');
    this.setUserClient();
  },
  data() {
    return {
      isRegisteredUser: true,
      hasProfileSetup: true,
      displayProfileForm: false
    };
  },
  methods: {
    isProfileSetupCheck(){
      this.hasProfileSetup = !!this.client.name;
    },
    setRegisteredUser(event){
      this.isRegisteredUser = event;
    },
    goToProductsPage(){
      this.$router.push('/products');
    },
    goToOrdersPage(){
      this.$router.push('/orders');
    },
    orderType(type){
      return this.orders.filter(order => order.status === type);
    },
    setHasProfileSetup(event){
      this.hasProfileSetup = event;
    },
    setDisplayProfileForm(event){
      this.displayProfileForm = event;
    },
    editProfileForm(){
      this.displayProfileForm = true;
    },
    setUserClient(){
      const userClient = this.clients.find(client => client.email === this.user.user.email);
      this.$store.dispatch('setClient', userClient);
    }
  },
  computed: {
    user(){
      if (!this.$store.state.user || !this.$store.state.user.user) return;
      return this.$store.state.user;
    },
    client(){
      if (!this.$store.state.client);
      return this.$store.state.client;
    },
    clients(){
      return this.$store.state.clients;
    },
    orders() {
      return this.$store.state.orders;
    },
    numOpenOrders(){
      return this.orderType('open').length;
    },
    numCompleteOrders(){
      return this.orderType('complete').length;
    },
    isAdmin(){
      return this.$store.state.isAdmin;
    }
  }
};
</script>

