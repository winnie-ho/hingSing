<template src='./clientView.html'></template>
<style scoped src='./clientView.css'></style>

<script>
import navMenu from "../../components/navMenu/navMenu.vue";
import { store } from '../../store/store.js'

export default {
  name: "clientView",
  components: {
    "nav-menu": navMenu
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

