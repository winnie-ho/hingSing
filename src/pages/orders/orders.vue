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
          status: 'open',
          items: [
            {
              productId: 1203,
              productName: "Beef",
              quantity: 1,
              price: 40
            },
            {
              productId: 1103,
              productName: "Chips",
              quantity: 12,
              price: 140
            }
          ],
          totalValue: 1020
        },
        {
          id: 2,
          date: new Date().toLocaleString(),
          clientId: 2,
          clientName: 'New Lucky Home',
          status: 'complete',
          items: [
            {
              productId: 1203,
              productName: "Beef",
              quantity: 1,
              price: 40
            },
            {
              productId: 1103,
              productName: "Chips",
              quantity: 12,
              price: 140
            },
            {
              productId: 1101,
              productName: "Tofu",
              quantity: 1,
              price: 2
            }
          ],
          totalValue: 230
        },
        {
          id: 3,
          date: new Date().toLocaleString(),
          clientId: 3,
          clientName: 'Wee Buddha',
          status: 'complete',
          items: [
            {
              productId: 1203,
              productName: "Beef",
              quantity: 1,
              price: 40
            },
            {
              productId: 1103,
              productName: "Chips",
              quantity: 12,
              price: 140
            },
            {
              productId: 11203,
              productName: "Garlic",
              quantity: 11,
              price: 14
            }
          ],
          totalValue: 298
        },
        {
          id: 4,
          date: new Date().toLocaleString(),
          clientId: 4,
          clientName: 'Imperial Palace',
          status: 'open',
          items: [
            {
              productId: 1203,
              productName: "Beef",
              quantity: 1,
              price: 40
            },
            {
              productId: 1103,
              productName: "Chips",
              quantity: 12,
              price: 140
            },
            {
              productId: 11203,
              productName: "Garlic",
              quantity: 11,
              price: 14
            }
          ],
          totalValue: 298
        }
      ]
    };
  },
  mounted() {

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

  }
};
</script>

