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
        }
      }
    },
    props: [ ],
    methods: {
      loginUser(){
        console.log('SUBMIT USER LOGIN PROCESS');
      },
      registerUser(){
        console.log('REGISTER USER');
      }
    },
    computed: {

    }
  }
</script>

