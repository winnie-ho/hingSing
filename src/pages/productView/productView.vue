<template src='./productView.html'></template>
<style scoped src='./productView.css'></style>

<script>
import navMenu from "../../components/navMenu/navMenu.vue";
import siteHeader from "../../components/siteHeader/siteHeader.vue";
import siteFooter from "../../components/siteFooter/siteFooter.vue";
import productForm from "../../components/productForm/productForm.vue";
import breadcrumbBar from "../../components/breadcrumbBar/breadcrumbBar.vue";
import { store } from '../../store/store.js'

export default {
  name: "productView",
  components: {
    "nav-menu": navMenu,
    "site-header": siteHeader,
    "site-footer": siteFooter,
    "product-form": productForm,
    "breadcrumb-bar": breadcrumbBar
  },
  data() {
    return {
      breadcrumbContent: [
        { name: "home", path: "/" },
        { name: "products", path:"/products/" },
        { name: "productView", path:"/productView/:id/" }
      ]
    };
  },
  mounted() {

  },
  methods: {
    
  },
  computed: {
    product(){
      return this.$store.state.product;
    }
  }
};
</script>

