<template src='./clients.html'></template>
<style scoped src='./clients.css'></style>

<script>
import navMenu from "../../components/navMenu/navMenu.vue";
import siteHeader from "../../components/siteHeader/siteHeader.vue";
import siteFooter from "../../components/siteFooter/siteFooter.vue";
import { store } from '../../store/store.js'

export default {
  name: "clients",
  components: {
    "nav-menu": navMenu,
    "site-header": siteHeader,
    "site-footer": siteFooter
  },
  data() {
    return {
    };
  },
  mounted() {
    this.$store.dispatch('fetchClients')
  },
  methods: {
    enterClientView(e){
      this.$store.dispatch('setClient', e)
      this.$router.push('/clientView/' + e.id)
    }
  },
  computed: {
    clients(){
      return this.$store.state.clients
    }
  }
};
</script>

