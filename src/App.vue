<template>
  <div id="app">
    <vheader></vheader>
    <router-view/>
    <vfooter></vfooter>
  </div>
</template>

<script>
import vheader from './components/header'
import vfooter from './components/footer'
export default {
  name: 'App',
  components: {
    vheader,
    vfooter
  }
}
</script>


<style>
@import "assets/css/common/common.css"
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
   width: 100%;
   height: 100%;
}
</style>
