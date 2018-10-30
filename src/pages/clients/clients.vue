<template src='./clients.html'></template>
<style scoped src='./clients.css'></style>

<script>
import siteHeader from "../../components/siteHeader/siteHeader.vue";
import navMenu from "../../components/navMenu/navMenu.vue";
import clientForm from "../../components/clientForm/clientForm.vue";
import breadcrumbBar from "../../components/breadcrumbBar/breadcrumbBar.vue";
import { store } from '../../store/store.js'

export default {
  name: "clients",
  components: {
    "site-header": siteHeader,
    "nav-menu": navMenu,
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

