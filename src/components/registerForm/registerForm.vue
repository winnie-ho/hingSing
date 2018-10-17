<template src="./registerForm.html"></template>
<style scoped src='./registerForm.css'></style>

<script src>
  export default {
    name: 'registerForm',
    data () {
      return {
        form: {
          email: '',
          emailConfirm: '',
          password: '',
          name: ''
        }
      }
    },
    props: [ ],
    methods: {
      registerUser(){
        console.log('REGISTER USER PROCESS');
      },
      showLoginForm(){
        this.$emit('onSetRegisteredUser', true);
      }
    },
    computed: {

    }
  }
</script>

