<template>
  <div class="home">
    <Banner />
    <Introduction id="about" />
  </div>
</template>

<script setup>
import Banner from "../components/Banner.vue";
import Introduction from "../components/Introduction.vue";
</script>

<style scoped>
.home {
  @apply -z-10;
}
</style>
