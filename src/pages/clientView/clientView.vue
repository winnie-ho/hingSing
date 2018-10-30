<template src='./clientView.html'></template>
<style scoped src='./clientView.css'></style>

<script>
import siteHeader from "../../components/siteHeader/siteHeader.vue";
import navMenu from "../../components/navMenu/navMenu.vue";
import googleMap from '../../components/googleMap/googleMap.vue'
import clientForm from "../../components/clientForm/clientForm.vue";
import breadcrumbBar from "../../components/breadcrumbBar/breadcrumbBar.vue";
import { store } from '../../store/store.js'

export default {
  name: "clientView",
  components: {
    "site-header": siteHeader,
    "nav-menu": navMenu,
    "google-map": googleMap,
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

  },
  methods: {
    
  },
  computed: {
    client(){
      return this.$store.state.client;
    }
  }
};
</script>

