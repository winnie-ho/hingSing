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
        this.$store.dispatch('addProduct', Object.assign({}, this.form, {
          unitPrice: (parseFloat(this.form.unitPrice)).toFixed(2)
        }));
        this.productFormVisible = false;
        setTimeout(this.refreshProductsList, 100);
        this.successMessage(' successfully added');
      },
      editProductForm(){
        this.form = {
          name: this.product.name,
          unit: this.product.unit,
          unitPrice: (parseFloat(this.product.unitPrice)).toFixed(2),
          image: this.product.image
        }
        this.productFormVisible = true;
      },
      updateProduct(){
        const updatedProduct = Object.assign({}, this.form, {
          id: this.product.id,
          unitPrice: (parseFloat(this.form.unitPrice)).toFixed(2)
        });
        this.$store.dispatch('updateProduct', updatedProduct);
        setTimeout(this.refreshProductsList, 100);
        this.successMessage(' successfully updated');
      },
      deleteProduct(){
        this.$store.dispatch('deleteProduct', this.product);
        setTimeout(this.refreshProductsList, 100);
      },
      async refreshProductsList(){
        await this.$store.dispatch('fetchProducts');
        await this.$router.push('/products/');
      },
      successMessage(message){
        return this.$message({
          message: this.form.name + message,
          type: 'success'
        });
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
      },
      isCollapsed() {
        return window.innerWidth < 500;
      },
      isAdmin(){
        return this.$store.state.isAdmin;
      }
    }
  }
</script>

