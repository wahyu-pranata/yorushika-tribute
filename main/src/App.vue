<template>
  <Navbar @tog-drawer="toggleDrawer" :drawervis="drawerVis"/>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  components: {
    Navbar
  },
  data() {
    return {
      drawerVis: false
    }
  },
  methods: {
    toggleDrawer() {
      this.drawerVis = !this.drawerVis
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}
</style>