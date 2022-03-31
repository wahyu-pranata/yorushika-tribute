<template>
    <Navbar @tog-drawer="toggleDrawer" :drawervis="drawerVis" class="fixed top-0 left-0 z-10" @close="this.drawerVis = false"/>
    <router-view></router-view>
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
html {
  @apply scroll-smooth
}
.main {
  @apply ml-14
}
</style>