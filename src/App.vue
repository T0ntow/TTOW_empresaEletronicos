<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view></router-view>
    <FooterSite></FooterSite>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import FooterSite from './components/FooterSite.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    FooterSite
  }
  
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
