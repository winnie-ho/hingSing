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

  },
  methods: {
    setRegisteredUser(event){
      this.isRegisteredUser = event;
    }
  },
  computed: {

  }
};
</script>

