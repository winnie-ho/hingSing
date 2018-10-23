<template src="./loginForm.html"></template>
<style scoped src='./loginForm.css'></style>

<script src>
  export default {
    name: 'loginForm',
    data () {
      return {
        form: {
          email: '',
          password: ''
        },
        loginResult: {
          success: null
        }
      }
    },
    props: [ ],
    mounted(){
      this.$store.dispatch('fetchClients');
    },
    methods: {
      loginUser(){
        return firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then((value) => {
          this.loginResult = { success: true, value };
          this.$store.dispatch('setUser', value );
          this.$store.dispatch('fetchOrders');
          this.setUserClient();
        })
        .catch((error) => {
          this.loginResult = { success: false, error };
        });
      },
      showRegisterForm(){
        this.$emit('onSetRegisteredUser', false)
      },
      setUserClient(){
        const userClient = this.clients.find(client => client.email === this.form.email);
        this.$store.dispatch('setClient', userClient);
      }
    },
    computed: {
      errorMessage(){
        return this.loginResult.error ? this.loginResult.error.message : '';
      },
      clients(){
        return this.$store.state.clients;
      }
    }
  }
</script>

