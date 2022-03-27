<template>
    <Navbar @tog-drawer="toggleDrawer" :drawervis="drawerVis" class="fixed top-0 left-0 z-10" @close="this.drawerVis = false"/>
    <div class="main">
      <Banner/>
      <About id="about"/>
    </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Banner from './components/Banner.vue'
import About from './components/About.vue'
export default {
  components: {
    Navbar, Banner, About
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