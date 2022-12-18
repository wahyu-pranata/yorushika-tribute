<template>
  <div>
    <nav class="navbar">
      <p class="menu" @click="$emit('toggle-drawer')">{{ drawerText }}</p>
    </nav>
    <Drawer :class="isDrawerActive" @toggle-drawer="$emit('toggle-drawer')" />
    <div v-if="drawerVisibility">
      <div
        class="fixed inset-0 z-10 ml-14 overflow-hidden bg-black/50"
        @click.self="$emit('toggle-drawer')"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import Drawer from "./Drawer.vue";

const props = defineProps({
  drawerVisibility: Boolean
});

const isDrawerActive = computed(() => {
  return props.drawerVisibility ? "active" : "inactive";
});

const drawerText = computed(() => {
  return props.drawerVisibility ? "CLSE" : "MENU";
});
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
