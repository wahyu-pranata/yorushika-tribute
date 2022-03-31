<template>
  <div class="absolute top-0 left-14 transition-all duration-300 ease-out select-none">
    <div class="drawer">
      <ul class="drawer-items">
        <li><router-link to="/about">about</router-link></li>
        <li><router-link to="/biography">biography</router-link></li>
        <li><router-link to="/disco">discography</router-link></li>
        <li><router-link to="/movie">movie</router-link></li>
        <li><router-link to="/">contact</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.drawer {
  @apply flex h-screen w-96 bg-yoru-200 border-l border-r-white items-center justify-center
}
.drawer-items {
  @apply h-3/5 w-2/3 flex flex-col justify-around
}
.drawer-items li {
  @apply inline-block relative uppercase tracking-widest font-nunitosans w-max transition-all after:absolute after:bottom-0 after:left-0 after:origin-bottom-right after:scale-x-0 after:transition-transform after:duration-300 after:w-full after:h-0.5 after:bg-yoru-100 hover:text-yoru-100 hover:after:scale-x-100 hover:after:origin-bottom-left
}
</style>