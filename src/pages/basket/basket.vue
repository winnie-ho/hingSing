<template src='./basket.html'></template>
<style scoped src='./basket.css'></style>

<script>
import navMenu from "../../components/navMenu/navMenu.vue";
import siteHeader from "../../components/siteHeader/siteHeader.vue";
import orderForm from "../../components/orderForm/orderForm.vue";
import breadcrumbBar from "../../components/breadcrumbBar/breadcrumbBar.vue";
import { store } from '../../store/store.js'

export default {
  name: "basket",
  components: {
    "nav-menu": navMenu,
    "site-header": siteHeader,
    "order-form": orderForm,
    "breadcrumb-bar": breadcrumbBar
  },
  data() {
    return {
      breadcrumbContent: [
        { name: "home", path: "/" },
        { name: "clients", path:"/clients/" },
        { name: "clientView", path:"/clientView/:id/" }
      ],
      product: {
        quantity: 1
      }
    };
  },
  mounted() {
    this.$store.dispatch('fetchClients')
  },
  methods: {
  },
  computed: {
    basket(){
      return this.$store.state.basket
    }
  }
};
</script>

