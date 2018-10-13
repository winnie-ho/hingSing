<template src='./orders.html'></template>
<style scoped src='./orders.css'></style>

<script>
import navMenu from "../../components/navMenu/navMenu.vue";
import siteHeader from "../../components/siteHeader/siteHeader.vue";
import siteFooter from "../../components/siteFooter/siteFooter.vue";
import orderForm from "../../components/orderForm/orderForm.vue";
import breadcrumbBar from "../../components/breadcrumbBar/breadcrumbBar.vue";
import { store } from '../../store/store.js'

export default {
  name: "home",
  components: {
    "nav-menu": navMenu,
    "site-header": siteHeader,
    "site-footer": siteFooter,
    "order-form": orderForm,
    "breadcrumb-bar": breadcrumbBar
  },
  data() {
    return {
    };
  },
  mounted() {
    this.$store.dispatch('fetchOrders');
    this.$store.dispatch('fetchClients');
    this.$store.dispatch('fetchProducts');
  },
  methods: {
    orderStatusClass({row, rowIndex}) {
      if (row.status === 'open') {
        return 'open-status';
      } else if (row.status === 'complete') {
        return 'complete-status';
      }
      return '';
    },
    enterOrderView(e){
      this.$store.dispatch('setOrder', e)
      this.$router.push('/orderView/' + e.id)
    }
  },
  computed: {
    orders(){
      return this.$store.state.orders;
    },
    numOpenOrders(){
      return this.orders.reduce((total, order) => total + (order.status === 'open'), 0)
    },
    numCompleteOrders(){
      return this.orders.reduce((total, order) => total + (order.status === 'complete'), 0)
    }
  }
};
</script>

