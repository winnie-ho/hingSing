<template src='./orderView.html'></template>
<style scoped src='./orderView.css'></style>

<script>
import navMenu from "../../components/navMenu/navMenu.vue";
import { store } from '../../store/store.js'

export default {
  name: "orderView",
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
    order(){
      return this.$store.state.order;
    }
  }
};
</script>

