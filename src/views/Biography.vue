<template>
  <div class="bio">
    <Banner message="Biography" />
    <Bio />
  </div>
</template>

<script>
import Banner from "../components/Banner.vue";
import Bio from "../components/Bio.vue";
export default {
  components: {
    Banner,
    Bio,
  },
};
</script>

<style>
.bio {
  @apply -z-10;
}
</style>
