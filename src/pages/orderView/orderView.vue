<template src='./orderView.html'></template>
<style scoped src='./orderView.css'></style>

<script>
import siteHeader from "../../components/siteHeader/siteHeader.vue";
import navMenu from "../../components/navMenu/navMenu.vue";
import orderForm from "../../components/orderForm/orderForm.vue";
import breadcrumbBar from "../../components/breadcrumbBar/breadcrumbBar.vue";
import { store } from '../../store/store.js'

export default {
  name: "orderView",
  components: {
    "site-header": siteHeader,
    "nav-menu": navMenu,
    "order-form": orderForm,
    "breadcrumb-bar": breadcrumbBar
  },
  data() {
    return {
      breadcrumbContent: [
        {name:"home", path: "/"}, 
        {name:"orders", path: "/orders/"},
        {name:"orderView", path: "/orderView/:id/"}
      ]
    };
  },
  mounted() {

  },
  methods: {
    
  },
  computed: {
    order(){
      return this.$store.state.order;
    },
    type(){
      switch(this.order.status) {
        case 'open':
          return 'success';
          break;
        case 'complete':
          return 'info';
          break;
        default:
          return '';
      }
    },
    numOfItems() {
      if (!this.order.items) return 0;
      return this.order.items.reduce((total, item) => total + (item.quantity), 0);
    },
    quantityLabel(){
      return window.innerWidth < 500 ? "Qty" : "Quantity";
    }
  }
};
</script>

