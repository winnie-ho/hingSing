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
        { name: "products", path:"/products/" },
        { name: "basket", path:"/basket/" }
      ]
    };
  },
  methods: {
    deleteItem(index, rows) {
      rows.splice(index, 1);
    },
    setProductToEdit(product){
      this.$store.dispatch('setBasketProductToEdit', product)
    }
  },
  computed: {
    basket(){
      return this.$store.state.basket
    },
    basketValue(){
      const totalValue = this.basket.reduce((total, item) => {
        return total + parseFloat(item.price);
      }, 0);
      return totalValue.toFixed(2);
    }
  }
};
</script>

