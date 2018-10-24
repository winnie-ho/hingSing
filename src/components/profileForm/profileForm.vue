<template src="./profileForm.html"></template>
<style scoped src='./profileForm.css'></style>

<script src>
  export default {
    name: 'profileForm',
    data () {
      return {
        form: {
          name: '',
          address: '',
          city: '',
          postcode: '',
          phone: ''
        }
      }
    },
    props: [ 'hasProfileSetup', 'displayProfileForm' ],
    methods: {
      addClient() {
        const newClient = Object.assign({}, this.form, {
          email: this.user.email,
          lat: 0,
          lng: 0
        });
        this.$store.dispatch('addClient', newClient);
        this.$store.dispatch('setClient', newClient);

        this.$emit('changeDisplayProfileForm', false);
        this.$emit('changeHasProfileSetup', true);
        setTimeout(this.refreshClientsList, 500);
      },
      editProfileForm(){
        this.$emit('changeDisplayProfileForm', true);
        this.form = {
          name: this.client.name,
          address: this.client.address,
          city: this.client.city,
          postcode: this.client.postcode,
          phone: this.client.phone
        }
      },
      updateClient(){
        const updatedClient = Object.assign({}, this.form, {
          id: this.client.id,
          email: this.client.email
        });
        this.$store.dispatch('updateClient', updatedClient);
        setTimeout(this.refreshClientsList, 500);
        this.$store.dispatch('setClient', updatedClient);
        this.$emit('changeHasProfileSetup', true);
        this.$emit('changeDisplayProfileForm', false);
      },
      async refreshClientsList(){
        await this.$store.dispatch('fetchClients');
      },
      cancelProfileForm(){
        this.$emit('changeDisplayProfileForm', false);
      }
    },
    computed: {
      client(){
        return this.$store.state.client;
      },
      user(){
        if (!this.$store.state.user) return;
        return this.$store.state.user.user;
      },
      isCollapsed() {
        return window.innerWidth < 500;
      },
      formTitle(){
        return this.hasProfileSetup ? "Update profile" : "Complete your profile";
      },
      isCollapsed() {
        return window.innerWidth < 500;
      }
    }
  }
</script>

