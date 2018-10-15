<template src="./orderForm.html"></template>
<style scoped src='./orderForm.css'></style>

<script src>
  import productForm from "../productForm/productForm.vue";

  export default {
    name: 'orderForm',
    components: {
      "product-form": productForm
    },
    data () {
      return {
        form: {
          client: '',
          status: 'open',
          items: [],
          deliveryDate: ''
        },
        itemToAdd: {
          id: '',
          quantity: 1
        },
        orderFormVisible: false,
        productSelectVisible: false,
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() < Date.now();
          }
        }
      }
    },
    props: [ 'showAddBtn' ],
    methods: {
      addOrder() {
        const orderToAdd = Object.assign({}, this.form, {
          date: new Date().toLocaleString(),
          deliveryDate: new Date(this.form.deliveryDate).toLocaleDateString(),
          totalValue: this.calculateTotalValue(this.form.items)
        });
        this.$store.dispatch('addOrder', orderToAdd);
        this.orderFormVisible = false;
        setTimeout(this.refreshOrdersList, 500);
      },
      editOrderForm(){
        this.form = {
          client: this.order.client,
          status: this.order.status,
          items: this.order.items,
          deliveryDate: this.order.deliveryDate
        }
        this.orderFormVisible = true;
      },
      updateOrder(){
        const updatedOrder = Object.assign({}, this.form, {
          id: this.order.id,
          date: new Date().toLocaleString(),
          deliveryDate: new Date(this.form.deliveryDate).toLocaleDateString(),
          totalValue: this.calculateTotalValue(this.form.items)
        });
        this.$store.dispatch('updateOrder', updatedOrder);
        setTimeout(this.refreshOrdersList, 500);
      },
      deleteOrder(){
        this.$store.dispatch('deleteOrder', this.order);
        setTimeout(this.refreshOrdersList, 500);
      },
      async refreshOrdersList(){
        await this.$store.dispatch('fetchOrders');
        await this.$router.push('/orders/');
      },
      deleteItem(index, rows) {
        rows.splice(index, 1);
      },
      addItemToOrder(){
        const fullItemToAdd = this.getProduct(this.itemToAdd.id);
        this.form.items.push({
          productId: this.itemToAdd.id,
          quantity: this.itemToAdd.quantity,
          productName: fullItemToAdd.name,
          unit: fullItemToAdd.unit,
          unitPrice: fullItemToAdd.unitPrice,
          price: parseInt(this.itemToAdd.quantity) * parseInt(fullItemToAdd.unitPrice)
        })
      },
      handleItemToAddQuantity(e){
        this.itemToAdd.quantity = e;
      },
      getProduct(productId){
        return this.products.find(product => product.id === productId);
      },
      calculateTotalValue(items){
        return items.reduce((totalCost, item) => totalCost + parseFloat(item.price), 0);
      },
      printOrderForm(){
        window.print();
      }
    },
    computed: {
      order(){
        return this.$store.state.order;
      },
      clients(){
        return this.$store.state.clients;
      },
      products(){
        return this.$store.state.products;
      },
      formTitle(){
        return this.showAddBtn ? "Add new order" : "Update order";
      }
    }
  }
</script>

