<template src='./orderView.html'></template>
<style scoped src='./orderView.css'></style>

<script>
import navMenu from "../../components/navMenu/navMenu.vue";
import siteHeader from "../../components/siteHeader/siteHeader.vue";
import siteFooter from "../../components/siteFooter/siteFooter.vue";
import orderForm from "../../components/orderForm/orderForm.vue";
import { store } from '../../store/store.js'

export default {
  name: "orderView",
  components: {
    "nav-menu": navMenu,
    "site-header": siteHeader,
    "site-footer": siteFooter,
    "order-form": orderForm
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
    order(){
      return this.$store.state.order;
    }
  }
};
</script>

