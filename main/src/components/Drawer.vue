<template>
  <div class="absolute top-0 left-14 transition-all duration-300">
    <div class="main">
      <ul class="drawer-items">
        <li><a href="#">about</a></li>
        <li><a href="#">biography</a></li>
        <li><a href="#">discography</a></li>
        <li><a href="#">movie</a></li>
        <li><a href="#">contact</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.main {
  @apply flex h-screen w-96 bg-yoru-200 border-l border-r-white items-center justify-center
}
.drawer-items {
  @apply h-3/5 w-2/3 flex flex-col justify-around
}
.drawer-items li {
  @apply inline-block relative uppercase tracking-widest font-nunitosans w-max transition-all after:absolute after:bottom-0 after:left-0 after:origin-bottom-right after:scale-x-0 after:transition-transform after:duration-300 after:w-full after:h-0.5 after:bg-yoru-100 hover:text-yoru-100 hover:after:scale-x-100 hover:after:origin-bottom-left
}
</style>