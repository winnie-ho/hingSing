<template src="./orderForm.html"></template>
<style scoped src='./orderForm.css'></style>

<script src>
  export default {
    name: 'orderForm',
    data () {
      return {
        form: {
          client: '',
          status: 'open',
          items: []
        },
        itemToAdd: {
          name: '',
          quantity: 1
        },
        orderFormVisible: false,
        productSelectVisible: false
      }
    },
    props: [ 'showAddBtn' ],
    methods: {
      addOrder() {
        this.$store.dispatch('addOrder', this.form);
        this.orderFormVisible = false;
        setTimeout(this.refreshOrdersList, 500);
      },
      editOrderForm(){
        this.form = {
          client: this.order.client,
          status: this.order.status,
          items: this.order.items
        }
        this.orderFormVisible = true;
      },
      updateOrder(){
        const updatedOrder = Object.assign({}, this.form, {
          id: this.order.id
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
      addItem(){
        console.log('ADD ITEM');
        this.form.items.push({
          productId: '',
          productName: '',
          unit: '',
          unitPrice: 0,
          price: 0
        })
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

