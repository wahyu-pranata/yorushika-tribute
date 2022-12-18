<template>
  <div class="bio">
    <Banner message="Biography" />
    <Bio />
  </div>
</template>

<script setup>
import Banner from "../components/Banner.vue";
import Bio from "../components/Bio.vue";
</script>

<style>
.bio {
  @apply -z-10;
}
</style>
