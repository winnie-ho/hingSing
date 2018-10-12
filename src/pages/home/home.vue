<template src='./home.html'></template>
<style scoped src='./home.css'></style>

<script>
import navMenu from "../../components/navMenu/navMenu.vue";
import siteHeader from "../../components/siteHeader/siteHeader.vue";
import { store } from '../../store/store.js'

export default {
  name: "home",
  components: {
    "nav-menu": navMenu,
    "site-header": siteHeader
  },
  data() {
    return {
      
    };
  },
  mounted() {

  },
  methods: {
    
  },
  computed: {

  }
};
</script>

