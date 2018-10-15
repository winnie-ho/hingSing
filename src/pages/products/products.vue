<template src='./products.html'></template>
<style scoped src='./products.css'></style>

<script>
import siteHeader from "../../components/siteHeader/siteHeader.vue";
import siteFooter from "../../components/siteFooter/siteFooter.vue";
import navMenu from "../../components/navMenu/navMenu.vue";
import productCard from "../../components/productCard/productCard.vue";
import { store } from '../../store/store.js'

export default {
  name: "products",
  components: {
    "nav-menu": navMenu,
    "site-header": siteHeader,
    "site-footer": siteFooter,
    "product-card": productCard
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
    products(){
      return this.$store.state.products;
    }
  }
};
</script>

