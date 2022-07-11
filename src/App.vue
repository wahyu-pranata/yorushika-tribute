<template>
  <Navbar
    @tog-drawer="toggleDrawer"
    @switch="toggleDrawer"
    :drawervis="drawerVis"
    @close="this.drawerVis = false"
  />
  <router-view class="main"></router-view>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
  data() {
    return {
      drawerVis: false,
    };
  },
  methods: {
    toggleDrawer() {
      this.drawerVis = !this.drawerVis;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  @apply scroll-smooth;
}
.main {
  @apply ml-14;
}
.loader {
  @apply text-center font-lora text-lg text-yoru-300;
}
</style>
