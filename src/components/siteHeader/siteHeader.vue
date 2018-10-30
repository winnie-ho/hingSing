<template src="./siteHeader.html"></template>
<style scoped src='./siteHeader.css'></style>

<script src>
  import { store } from '../../store/store.js'

  export default {
    name: 'siteHeader',
    data () {
      return {
        signOutResult: null,
        scrollClass: null,
      }
    },
    props: {

    },
    created(){
      window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      signOutUser(){
        return firebase
        .auth()
        .signOut()
        .then((value) => {
          this.$router.push('/');
          this.$store.dispatch('setClient', {});
          this.$store.dispatch('clearIsAdmin');
          this.signOutResult = { success: true, value };
          this.$store.dispatch('setUser', value );
        })
        .catch((error) => {
          this.signOutResult = { success: false, error };
        });
      },
      handleScroll(e){
        if (window.scrollY > 40) {
          this.scrollClass = 'shrink';
        } else {
          this.scrollClass = ''
        }
      }
    },
    computed: {
      user(){
        if (!this.$store.state.user) return;
        return this.$store.state.user.user;
      }
    }
  }
</script>

