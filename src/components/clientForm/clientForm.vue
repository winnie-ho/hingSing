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
        clientFormVisible: false
      }
    },
    props: ['displayClientForm'],
    methods: {
      async onSubmit() {
        await this.$store.dispatch('addClient', this.form);
        this.clientFormVisible = false;
        setTimeout(this.refreshClientsList, 500);
      },
      async refreshClientsList(){
        await this.$store.dispatch('fetchClients');
        await this.$router.push('/clients/');
      }
    },
    computed: {
    }
  }
</script>

