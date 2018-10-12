<template src="./googleMap.html"></template>
<style scoped src='./googleMap.css'></style>


<script src>
  export default {
    name: 'googleMap',
    props: [ 'lat', 'lng', 'name'],
    components: {
    },
    data () {
      return {
        mapName: this.name + "-map",
      }
    },
    mounted() {
      const mapContainer = document.getElementById('map')
      let options = {
        zoom: 15,
        center: new google.maps.LatLng(this.center)
      }
  
      const map = new google.maps.Map(mapContainer, options)
      const marker = new google.maps.Marker({
        position: {
          lat: this.lat,
          lng: this.lng
        }, 
        map: map,
        label: this.name
      });
    },
    methods: {
    },
    computed: {
      center: function () {
        // Default center coords on Edinburgh.
        if (!this.lat) {
          return { lat: 59, lng: -3 }
        }
        return { lat: this.lat, lng: this.lng }
      }
    }
  }
</script>

