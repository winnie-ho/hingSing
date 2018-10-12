<template src="./clientForm.html"></template>
<style scoped src='./clientForm.css'></style>

<script src>
  export default {
    name: 'clientForm',
    data () {
      return {
        form: {
          name: '',
          address: '',
          postcode: '',
          phone: '',
          email: '',
          lat: '',
          lng: '',
        },
        clientFormVisible: false
      }
    },
    props: ['displayClientForm'],
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      closeClientForm(){
        console.log('CLOSE')
      }
    },
    computed: {
    }
  }
</script>

