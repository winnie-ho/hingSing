<template src='./clients.html'></template>
<style scoped src='./clients.css'></style>

<script>
import navMenu from "../../components/navMenu/navMenu.vue";
import { store } from '../../store/store.js'

export default {
  name: "clients",
  components: {
    "nav-menu": navMenu
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
          email: "email@email.com"
        },
        {
          id: 2,
          name: "New Dragon",
          address: "1 Street",
          postcode: "EH1 1HE",
          phone: "0131 222 1111",
          email: "email@email.com"
        },
        {
          id: 3,
          name: "Jade Garden",
          address: "1 Street",
          postcode: "EH1 1HE",
          phone: "0131 222 1111",
          email: "email@email.com"
        }
      ]
    };
  },
  mounted() {

  },
  methods: {
    enterClientView(e){
      this.$store.dispatch('setClient', e)
      this.$router.push('/clientView/' + e.clientId)
    }
  },
  computed: {

  }
};
</script>

