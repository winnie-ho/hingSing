<template src="./navMenu.html"></template>
<style scoped src='./navMenu.css'></style>

<script src>
  export default {
    name: 'navMenu',
    data () {
      return {
        activeIndex: '1'
      }
    },
    props: {

    },
    methods: {
    },
    computed: {
      isCollapsed() {
        return window.innerWidth < 900;
      },
      isAdmin(){
        return this.$store.state.isAdmin;
      }
    }
  }
</script>

