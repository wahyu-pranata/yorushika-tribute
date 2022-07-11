<template>
  <div>
    <nav class="navbar">
      <p class="menu" @click="$emit('tog-drawer')">{{ drawerText }}</p>
    </nav>
    <Drawer :class="isDrawerActive" @switch="$emit('switch')" />
    <div v-if="drawervis">
      <div
        class="fixed inset-0 z-10 ml-14 overflow-hidden bg-black/50"
        @click.self="$emit('close')"
      ></div>
    </div>
  </div>
</template>

<script>
import Drawer from "./Drawer.vue";
export default {
  components: {
    Drawer,
  },
  props: {
    drawervis: Boolean,
  },
  computed: {
    isDrawerActive() {
      return this.drawervis ? "active" : "inactive";
    },
    drawerText() {
      return this.drawervis ? "CLSE" : "MENU";
    },
  },
};
</script>

<style>
.navbar {
  @apply fixed top-0 left-0 z-50 h-screen w-14 bg-yoru-200;
}
.menu {
  @apply h-full max-h-[55px] cursor-pointer select-none break-words border-b border-b-white px-3 pt-1 text-center font-nunitosans leading-6 tracking-[0.22rem] text-white hover:bg-yoru-300;
}
.inactive {
  @apply -translate-x-[500px] opacity-0;
}
.active {
  @apply translate-x-0 opacity-100;
}
</style>
