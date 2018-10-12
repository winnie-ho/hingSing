<template src='./clientView.html'></template>
<style scoped src='./clientView.css'></style>

<script>
import navMenu from "../../components/navMenu/navMenu.vue";
import siteHeader from "../../components/siteHeader/siteHeader.vue";
import siteFooter from "../../components/siteFooter/siteFooter.vue";
import googleMap from '../../components/googleMap/googleMap.vue'
import { store } from '../../store/store.js'

export default {
  name: "clientView",
  components: {
    "nav-menu": navMenu,
    "site-header": siteHeader,
    "site-footer": siteFooter,
    "google-map": googleMap
  },
  data() {
    return {
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

