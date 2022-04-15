<template>
  <div class="drawer-container">
    <div class="drawer">
      <ul class="drawer-items">
        <li><router-link to="/" @click="$emit('switch')">home</router-link></li>
        <li><router-link to="/about" @click="$emit('switch')">about</router-link></li>
        <li><router-link to="/biography" @click="$emit('switch')">biography</router-link></li>
        <li><router-link to="/disco" @click="$emit('switch')">discography</router-link></li>
        <li><router-link to="/movie" @click="$emit('switch')">movie</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.drawer-container {
  @apply fixed top-0 left-14 transition-all duration-300 ease-out select-none z-[11]
}
.drawer {
  @apply flex h-screen w-[calc(100vw-4.58rem)] md:w-96 bg-yoru-200 border-l border-r-white items-center justify-center
}
.drawer-items {
  @apply h-3/5 w-2/3 flex flex-col justify-around
}
.drawer-items li {
  @apply inline-block relative uppercase tracking-widest font-nunitosans w-max transition-all after:absolute after:bottom-0 after:left-0 after:origin-bottom-right after:scale-x-0 after:transition-transform after:duration-300 after:w-full after:h-0.5 after:bg-yoru-100 hover:text-yoru-100 hover:after:scale-x-100 hover:after:origin-bottom-left
}
</style>