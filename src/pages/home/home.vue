<template src='./home.html'></template>
<style scoped src='./home.css'></style>

<script>
import navMenu from "../../components/navMenu/navMenu.vue";
import siteHeader from "../../components/siteHeader/siteHeader.vue";
import loginForm from "../../components/loginForm/loginForm.vue";
import registerForm from "../../components/registerForm/registerForm.vue";
import profileForm from "../../components/profileForm/profileForm.vue";
import { store } from '../../store/store.js'

export default {
  name: "home",
  components: {
    "nav-menu": navMenu,
    "site-header": siteHeader,
    "login-form": loginForm,
    "register-form": registerForm,
    "profile-form": profileForm
  },
  mounted(){
    this.isProfileSetupCheck();
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
      console.log('checking')
      if (!this.client || !this.client.name) {
        this.hasProfileSetup = false;
      } else {
        this.hasProfileSetup = true;
      }
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
    getStatus(){
      console.log('isRegisteredUser', this.isRegisteredUser);
      console.log('hasProfileSetup', this.hasProfileSetup);
      console.log('displayProfileForm', this.displayProfileForm);
    },
    editProfileForm(){
      this.displayProfileForm = true;
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

