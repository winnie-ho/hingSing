<template src="./orderForm.html"></template>
<style scoped src='./orderForm.css'></style>

<script src>
  export default {
    name: 'orderForm',
    data () {
      return {
        form: {
          name: '',
          address: '',
          postcode: '',
          phone: '',
          email: '',
          lat: '',
          lng: '',
        },
        orderFormVisible: false,
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
          name: this.order.name,
          address: this.order.address,
          postcode: this.order.postcode,
          phone: this.order.phone,
          email: this.order.email,
          lat: parseFloat(this.order.lat),
          lng: parseFloat(this.order.lng)
        }
        this.orderFormVisible = true;
      },
      updateOrder(){
        const updatedOrder = Object.assign({}, this.form, {
          id: this.order.id,
          lat: parseFloat(this.form.lat),
          lng: parseFloat(this.form.lng)
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
      }
    },
    computed: {
      order(){
        return this.$store.state.order;
      }
    }
  }
</script>

