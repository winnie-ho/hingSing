<template src='./basket.html'></template>
<style scoped src='./basket.css'></style>

<script>
import siteHeader from "../../components/siteHeader/siteHeader.vue";
import navMenu from "../../components/navMenu/navMenu.vue";
import quantityForm from "../../components/quantityForm/quantityForm.vue";
import breadcrumbBar from "../../components/breadcrumbBar/breadcrumbBar.vue";
import { store } from '../../store/store.js'

export default {
  name: "basket",
  components: {
    "site-header": siteHeader,
    "nav-menu": navMenu,
    "quantity-form": quantityForm,
    "breadcrumb-bar": breadcrumbBar
  },
  data() {
    return {
      breadcrumbContent: [
        { name: "home", path: "/" },
        { name: "products", path:"/products/" },
        { name: "basket", path:"/basket/" }
      ]
    };
  },
  methods: {
    deleteItem(index, rows) {
      rows.splice(index, 1);
    },
    setProduct(index){
      this.$store.dispatch('setBasketProductToEdit', this.basket[index])
    },
    submitOrder(){
      if (!this.user || !this.client) {
        this.$router.push('/');
        this.message('Please login or register to complete your order', 'warning')
      } else {
        const order = {
          client: this.client.name,
          date: new Date().toLocaleString(),
          totalValue: parseFloat(this.basketValue).toFixed(2),
          status: 'open',
          items: this.basket,
          email: this.user.email
        };
        this.$store.dispatch('addOrder', order);
        this.$store.dispatch('emptyBasket');
        this.message('Order successfully submitted!', 'success');
        this.$router.push('/');
      }
    },
    message(message, type){
      return this.$message({
        message,
        type
      });
    },
    emptyBasket(){
      this.$store.dispatch('emptyBasket');
    }
  },
  computed: {
    basket(){
      return this.$store.state.basket
    },
    basketValue(){
      const totalValue = this.basket.reduce((total, item) => {
        return total + parseFloat(item.price);
      }, 0);
      return totalValue.toFixed(2);
    },
    basketSize(){
      return this.basket.reduce((total, item) => total + item.quantity, 0);
    },
    user(){
      if (!this.$store.state.user) return;
      return this.$store.state.user.user;
    },
    client(){
      return this.$store.state.client;
    },
    isCollapsed() {
      return window.innerWidth < 500;
    }
  }
};
</script>

