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
        const duplicates = this.checkBasketForDuplicates(this.product);

        if (duplicates) {
          const index = this.getProductIndex();
          
          const updatedBasket = this.basket.slice(0);
          updatedBasket[index].quantity += 1;
          updatedBasket[index].price += updatedBasket[index].price;

          this.$store.dispatch('updateBasket', updatedBasket);
          this.successMessage(this.basket[index].quantity + 'x ' + this.product.name + ' in basket.');
        } else {
          this.$store.dispatch('addToBasket', Object.assign({}, this.product, {
            price: this.product.unitPrice,
            quantity: 1
          }))
          this.successMessage(this.product.name + " added to basket.");
        }
      },
      getProductIndex(){
        return this.basket.findIndex(item => item.id === this.product.id)
      },
      checkBasketForDuplicates(product){
        return this.basket.find(item => item.id === product.id)
      },
      successMessage(message){
        return this.$message({
          message: message,
          type: 'success'
        });
      }
    },
    computed: {
      basket(){
        return this.$store.state.basket;
      }
    }
  }
</script>

