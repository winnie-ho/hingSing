<template src="./navMenu.html"></template>
<style scoped src='./navMenu.css'></style>

<script src>
  export default {
    name: 'navMenu',
    data () {
      return {
      }
    },
    props: {

    },
    methods: {
    },
    computed: {
      isCollapsed() {
        return window.innerWidth < 500;
      }
    }
  }
</script>

