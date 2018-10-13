<template src="./clientForm.html"></template>
<style scoped src='./clientForm.css'></style>

<script src>
  export default {
    name: 'clientForm',
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
        clientFormVisible: false,
      }
    },
    props: [ 'showAddBtn' ],
    methods: {
      addClient() {
        this.$store.dispatch('addClient', this.form);
        this.clientFormVisible = false;
        setTimeout(this.refreshClientsList, 500);
      },
      editClientForm(){
        this.form = {
          name: this.client.name,
          address: this.client.address,
          postcode: this.client.postcode,
          phone: this.client.phone,
          email: this.client.email,
          lat: this.client.lat,
          lng: this.client.lng
        }
        this.clientFormVisible = true;
      },
      updateClient(){
        const updatedClient = Object.assign({}, this.form, {
          id: this.client.id
        });
        this.$store.dispatch('updateClient', updatedClient);
        setTimeout(this.refreshClientsList, 500);
      },
      deleteClient(){
        this.$store.dispatch('deleteClient', this.client);
        setTimeout(this.refreshClientsList, 500);
      },
      async refreshClientsList(){
        await this.$store.dispatch('fetchClients');
        await this.$router.push('/clients/');
      }
    },
    computed: {
      client(){
        return this.$store.state.client;
      }
    }
  }
</script>

