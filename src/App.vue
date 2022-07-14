<template>
  <div v-if="screenWidth >= 800">
    <Navbar
      @tog-drawer="toggleDrawer"
      @switch="toggleDrawer"
      :drawervis="drawerVis"
      @close="this.drawerVis = false"
    />
    <div class="main">
      <router-view></router-view>
      <Footer/>
    </div>  
  </div>
  <div v-else class="dev">
    <h1>This website is under development for mobile screen, please visit again later</h1>
    <h2>🙇</h2>
    <p>Tips: Use device width wider screen for better experience while we work on mobile screen</p>
  </div>
</template>

<script>
import Footer from './components/Footer.vue';
import Navbar from "./components/Navbar.vue";
export default {
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      drawerVis: false,
      screenWidth: screen.width
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
#app {
  @apply overflow-y-hidden
}
.dev {
  @apply text-yoru-400 font-nunitosans text-center h-screen flex justify-center flex-col gap-2
}
.dev h1 {
  @apply text-2xl font-bold
}
.dev h2 {
  @apply text-5xl
}
.dev p {
  @apply text-xs
}
</style>
