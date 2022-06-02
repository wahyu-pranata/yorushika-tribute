<template>
    <div>
		<nav class="navbar">
			<p class="menu" @click="$emit('tog-drawer')">{{ drawerText }}</p>
		</nav>
		<Drawer :class="isDrawerActive" @switch="$emit('switch')"/>
		<div v-if="drawervis">
			<div class="fixed inset-0 ml-14 bg-black/50 z-10 overflow-hidden" @click.self="$emit('close')"></div>
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
	},
	computed: {
		isDrawerActive() {
		return this.drawervis ? "active" : "inactive"
	},
    drawerText() {
		return this.drawervis ? "CLSE" : "MENU"
    }
  }
}
</script>

<style>
.navbar {
  @apply h-screen w-14 bg-yoru-200 fixed top-0 left-0 z-50
}
.menu {
  @apply pt-1 px-3 text-white text-center font-nunitosans border-b border-b-white max-h-[55px] leading-6 tracking-[0.22rem] h-full cursor-pointer break-words select-none hover:bg-yoru-300
}
.inactive {
  @apply  opacity-0 -translate-x-[500px]
}
.active {
  @apply opacity-100 translate-x-0
}
</style>