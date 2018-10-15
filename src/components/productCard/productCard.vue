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
      enterProductView(e){
        console.log('e', e);
        // this.$store.dispatch('setProduct', e)
        // this.$router.push('/productView/' + e.id)
    }
    },
    computed: {
    }
  }
</script>

