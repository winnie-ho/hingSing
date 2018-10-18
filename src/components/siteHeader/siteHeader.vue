<template src="./siteHeader.html"></template>
<style scoped src='./siteHeader.css'></style>

<script src>
  export default {
    name: 'siteHeader',
    data () {
      return {
        signOutResult: null
      }
    },
    props: {

    },
    methods: {
      signOutUser(){
        return firebase
        .auth()
        .signOut()
        .then((value) => {
          this.signOutResult = { success: true, value };
          this.$store.dispatch('setUser', value )
        })
        .catch((error) => {
          this.signOutResult = { success: false, error };
        });
      }
    },
    computed: {
      user(){
        return this.$store.state.user;
      }
    }
  }
</script>

