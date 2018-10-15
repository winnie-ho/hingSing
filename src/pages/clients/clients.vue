<template src='./clients.html'></template>
<style scoped src='./clients.css'></style>

<script>
import navMenu from "../../components/navMenu/navMenu.vue";
import siteHeader from "../../components/siteHeader/siteHeader.vue";
import siteFooter from "../../components/siteFooter/siteFooter.vue";
import clientForm from "../../components/clientForm/clientForm.vue";
import breadcrumbBar from "../../components/breadcrumbBar/breadcrumbBar.vue";
import { store } from '../../store/store.js'

export default {
  name: "clients",
  components: {
    "nav-menu": navMenu,
    "site-header": siteHeader,
    "site-footer": siteFooter,
    "client-form": clientForm,
    "breadcrumb-bar": breadcrumbBar
  },
  data() {
    return {
      breadcrumbContent: [
        { name: "home", path: "/" },
        { name: "clients", path:"/clients/" },
        { name: "clientView", path:"/clientView/:id/" }
      ]
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

