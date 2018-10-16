<template src="./quantityForm.html"></template>
<style scoped src='./quantityForm.css'></style>

<script src>
  export default {
    name: 'quantityForm',
    data () {
      return {
        form: {
          quantity: 1
        },
        quantityFormVisible: false,
      }
    },
    methods: {
      updateQuantity(){
        const index = this.getProductIndex();

        const updatedBasket = this.basket.slice(0);
        updatedBasket[index].quantity = this.form.quantity;
        updatedBasket[index].price = this.price;
        
        this.$store.dispatch('updateBasket', updatedBasket);
        this.quantityFormVisible = false;
      },
      getProductIndex(){
        return this.basket.findIndex(item => item.id === this.basketProductToEdit.id)
      }
    },
    computed: {
      basket(){
        return this.$store.state.basket;
      },
      basketProductToEdit(){
        return this.$store.state.basketProductToEdit;
      },
      price(){
        return (this.basketProductToEdit.unitPrice * this.form.quantity).toFixed(2);
      }
    }
  }
</script>

