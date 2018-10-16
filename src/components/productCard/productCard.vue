<template src="./productCard.html"></template>
<style scoped src='./productCard.css'></style>

<script src>
  export default {
    name: 'productCard',
    data () {
      return {
      }
    },
    props: [ "product" ],
    methods: {
      enterProductView(product){
        this.$store.dispatch('setProduct', product)
        this.$router.push('/productView/' + product.id)
      },
      addToBasket(){
        this.$store.dispatch('addToBasket', Object.assign({}, this.product, {
          price: this.product.unitPrice,
          quantity: 1
        }))
        this.successMessage(this.product.name);
      },
      successMessage(product){
        return this.$message({
          message: product + " added to basket",
          type: 'success'
        });
      }
    },
    computed: {
      basket(){
        this.$store.state.basket;
      }
    }
  }
</script>

