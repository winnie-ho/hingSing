<template src='./products.html'></template>
<style scoped src='./products.css'></style>

<script>
import siteHeader from "../../components/siteHeader/siteHeader.vue";
import productCard from "../../components/productCard/productCard.vue";
import productForm from "../../components/productForm/productForm.vue";
import { store } from '../../store/store.js'

export default {
  name: "products",
  components: {
    "site-header": siteHeader,
    "product-card": productCard,
    "product-form": productForm,
  },
  data() {
    return {
    };
  },
  mounted() {
    this.$store.dispatch('fetchProducts');
  },
  methods: {
    
  },
  computed: {
    products(){
      return this.$store.state.products;
    },
    isAdmin(){
      return this.$store.state.isAdmin;
    }
  }
};
</script>

