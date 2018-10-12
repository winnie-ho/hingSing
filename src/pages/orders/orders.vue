<template src='./orders.html'></template>
<style scoped src='./orders.css'></style>

<script>
import navMenu from "../../components/navMenu/navMenu.vue";
import { store } from '../../store/store.js'

export default {
  name: "home",
  components: {
    "nav-menu": navMenu,
  },
  data() {
    return {
      orders: [
        {
          id: 1,
          date: new Date().toLocaleString(),
          clientId: 1,
          clientName: 'Jade Garden',
          items: ['Beef', 'Chips'],
          totalValue: 120
        },
        {
          id: 2,
          date: new Date().toLocaleString(),
          clientId: 2,
          clientName: 'New Lucky Home',
          items: ['Soya Sauce', 'Rice', 'Chicken', 'Tofu'],
          totalValue: 230
        },
        {
          id: 3,
          date: new Date().toLocaleString(),
          clientId: 3,
          clientName: 'Wee Buddha',
          items: ['Soya Sauce', 'Rice', 'Chicken', 'Tofu', 'Curry', 'Garlic'],
          totalValue: 298
        }
      ]
    };
  },
  mounted() {

  },
  methods: {
    orderStatusClass({row, rowIndex}) {
      if (rowIndex === 0) {
        return 'open-status';
      } else if (rowIndex === 1) {
        return 'complete-status';
      }
      return '';
    },
    enterOrderView(e){
      this.$store.dispatch('setOrder', e)
      this.$router.push('/orderView/' + e.clientId)
    }
  },
  computed: {

  }
};
</script>

