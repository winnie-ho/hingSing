<template src='./clients.html'></template>
<style scoped src='./clients.css'></style>

<script>
import navMenu from "../../components/navMenu/navMenu.vue";
import siteHeader from "../../components/siteHeader/siteHeader.vue";
import { store } from '../../store/store.js'

export default {
  name: "clients",
  components: {
    "nav-menu": navMenu,
    "site-header": siteHeader
  },
  data() {
    return {
      clients: [
        {
          id: 1,
          name: "New Lucky Home",
          address: "1 Street",
          postcode: "EH1 1HE",
          phone: "0131 222 1111",
          email: "email@email.com",
          lat: 55.966373,
          lng: -3.2505574
        },
        {
          id: 2,
          name: "Golden Pond",
          address: "1 Street",
          postcode: "EH1 1HE",
          phone: "0131 222 1111",
          email: "email@email.com",
          lat: 55.9577821,
          lng: -3.2521764
        },
        {
          id: 3,
          name: "Jade Garden",
          address: "1 Street",
          postcode: "EH1 1HE",
          phone: "0131 222 1111",
          email: "email@email.com",
          lat: 55.9623431,
          lng: -3.1988374
        }
      ]
    };
  },
  mounted() {

  },
  methods: {
    enterClientView(e){
      this.$store.dispatch('setClient', e)
      this.$router.push('/clientView/' + e.id)
    }
  },
  computed: {

  }
};
</script>

