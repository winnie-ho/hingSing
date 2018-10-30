<template src="./navMenu.html"></template>
<style scoped src='./navMenu.css'></style>

<script src>
import { store } from "../../store/store.js";
export default {
  name: "navMenu",
  data() {
    return {
    };
  },
  props: {},
  methods: {
    handleSelect(e) {
      switch (e) {
        case "1":
          this.$router.push("/");
          break;
        case "2":
          this.$router.push("/products/");
          break;
        case "3":
          this.$router.push("/orders/");
          break;
        case "4":
          this.$router.push("/clients/");
          break;
        case "5":
          this.$router.push("/basket/");
          break;
      }
    }
  },
  computed: {
    isCollapsed() {
      return window.innerWidth < 900;
    },
    isAdmin() {
      return this.$store.state.isAdmin;
    },
    basket() {
      return this.$store.state.basket;
    },
    basketSize() {
      return this.basket.reduce((size, item) => size + item.quantity, 0);
    }
  }
};
</script>

