<template src="./editBar.html"></template>
<style scoped src='./editBar.css'></style>

<script src>
  export default {
    name: 'editBar',
    data () {
      return {
        
      }
    },
    props: [ 'client' ],
    methods: {
      editClient(){
        console.log('edit client', this.client);
      },
      deleteClient(){
        this.$store.dispatch('deleteClient', this.client)
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

