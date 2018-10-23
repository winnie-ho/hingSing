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
        },
        registerResult: {
          success: null
        }
      }
    },
    props: [ ],
    methods: {
      registerUser(){
        return firebase
        .auth()
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then((value) => {
          this.registerResult = { success: true, value };
          this.$emit('showProfileForm');
        })
        .catch((error) => {
          this.registerResult = { success: false, error };
        })
      },
      showLoginForm(){
        this.$emit('onSetRegisteredUser', true);
      }
    },
    computed: {
      errorMessage(){
        return this.registerResult.error ? this.registerResult.error.message : '';
      }
    }
  }
</script>

