<template src="./orderForm.html"></template>
<style scoped src='./orderForm.css'></style>

<script src>
  export default {
    name: 'orderForm',
    data () {
      return {
        form: {
          client: '',
          status: 'open'
        },
        orderFormVisible: false
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
          status: this.order.status
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
      }
    },
    computed: {
      order(){
        return this.$store.state.order;
      },
      clients(){
        return this.$store.state.clients;
      },
      formTitle(){
        return this.showAddBtn ? "Add new order" : "Update order";
      }
    }
  }
</script>

