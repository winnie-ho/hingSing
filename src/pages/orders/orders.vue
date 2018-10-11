<template src='./orders.html'></template>
<style scoped src='./orders.css'></style>

<script>
import navMenu from "../../components/navMenu/navMenu.vue";
import orderItem from "../../components/orderItem/orderItem.vue";
import { store } from '../../store/store.js'

export default {
  name: "home",
  components: {
    "nav-menu": navMenu,
    "order-item": orderItem
  },
  data() {
    return {
      orders: [
        {
          id: 1,
          clientId: 'Jade Garden',
          items: ['Beef', 'Chips'],
          totalValue: 120
        },
        {
          id: 2,
          clientId: 'New Lucky Home',
          items: ['Soya Sauce', 'Rice', 'Chicken', 'Tofu'],
          totalValue: 230
        }
      ]
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

