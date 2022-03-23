<template>
  <div class="relative">
    <nav class="navbar">
      <p class="menu" @click="$emit('tog-drawer')">MENU</p>
    </nav>
    <Drawer :class="{inactive: !drawervis, active: drawervis}"/>
    <div v-if="drawervis">
      <div class="absolute inset-0 bg-black/25 -z-10"></div>
    </div>
  </div>
</template>

<script>
import Drawer from './Drawer.vue'
export default {
  components: {
    Drawer
  },
  props: {
    drawervis: Boolean
  }
}
</script>

<style scoped>
.navbar {
  @apply h-screen w-14 bg-yoru-200 z-50
}
.menu {
  @apply pt-1 px-2 text-white text-center font-nunitosans font-semibold border-b border-b-white max-h-[55px] leading-6 tracking-[0.2rem] h-full cursor-pointer break-words hover:bg-yoru-300
}
.inactive {
  @apply  opacity-0 -translate-x-[500px]
}
.active {
  @apply opacity-100 translate-x-0
}
</style>