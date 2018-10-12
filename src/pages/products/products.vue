<template src='./products.html'></template>
<style scoped src='./products.css'></style>

<script>
import siteHeader from "../../components/siteHeader/siteHeader.vue";
import navMenu from "../../components/navMenu/navMenu.vue";
import { store } from '../../store/store.js'

export default {
  name: "products",
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

