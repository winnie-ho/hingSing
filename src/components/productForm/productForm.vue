<template src="./productForm.html"></template>
<style scoped src='./productForm.css'></style>

<script src>
  export default {
    name: 'productForm',
    data () {
      return {
        form: {
          name: '',
          unit: '',
          unitPrice: '',
          image: ''
        },
        productFormVisible: false,
      }
    },
    props: [ 'showAddBtn' ],
    methods: {
      addProduct() {
        this.$store.dispatch('addProduct', this.form);
        this.productFormVisible = false;
        setTimeout(this.refreshProductsList, 500);
      },
      editProductForm(){
        this.form = {
          name: this.product.name,
          unit: this.product.unit,
          unitPrice: this.product.unitPrice,
          image: this.product.image
        }
        this.productFormVisible = true;
      },
      updateProduct(){
        const updatedProduct = Object.assign({}, this.form, {
          id: this.product.id
        });
        this.$store.dispatch('updateProduct', updatedProduct);
        setTimeout(this.refreshProductsList, 500);
      },
      deleteProduct(){
        this.$store.dispatch('deleteProduct', this.product);
        setTimeout(this.refreshProductsList, 500);
      },
      async refreshProductsList(){
        await this.$store.dispatch('fetchProducts');
        await this.$router.push('/products/');
      }
    },
    computed: {
      product(){
        return this.$store.state.product;
      },
      products(){
        return this.$store.state.products;
      },
      formTitle(){
        return this.showAddBtn ? "Add new product" : "Update product";
      }
    }
  }
</script>

