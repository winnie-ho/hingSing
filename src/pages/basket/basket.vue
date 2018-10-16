<template src='./basket.html'></template>
<style scoped src='./basket.css'></style>

<script>
import navMenu from "../../components/navMenu/navMenu.vue";
import siteHeader from "../../components/siteHeader/siteHeader.vue";
import quantityForm from "../../components/quantityForm/quantityForm.vue";
import breadcrumbBar from "../../components/breadcrumbBar/breadcrumbBar.vue";
import { store } from '../../store/store.js'

export default {
  name: "basket",
  components: {
    "nav-menu": navMenu,
    "site-header": siteHeader,
    "quantity-form": quantityForm,
    "breadcrumb-bar": breadcrumbBar
  },
  data() {
    return {
      breadcrumbContent: [
        { name: "home", path: "/" },
        { name: "clients", path:"/clients/" },
        { name: "clientView", path:"/clientView/:id/" }
      ]
    };
  },
  methods: {
    deleteItem(index, rows) {
      rows.splice(index, 1);
    },
    setProductToEdit(product){
      this.$store.dispatch('updateBasketProductToEdit', product)
    }
  },
  computed: {
    basket(){
      return this.$store.state.basket
    }
  }
};
</script>

