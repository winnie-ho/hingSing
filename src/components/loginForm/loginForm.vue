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
    methods: {
      loginUser(){
        return firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then((value) => {
          this.loginResult = { success: true, value };
        })
        .catch((error) => {
          this.loginResult = { success: false, error };
        });
      },
      showRegisterForm(){
        this.$emit('onSetRegisteredUser', false)
      }
    },
    computed: {
      errorMessage(){
        return this.loginResult.error ? this.loginResult.error.message : '';
      }
    }
  }
</script>

