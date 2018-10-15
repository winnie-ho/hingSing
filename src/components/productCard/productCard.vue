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
        this.$store.dispatch('addToBasket', this.product);
      }
    },
    computed: {
      basket(){
        this.$store.state.basket;
      }
    }
  }
</script>

