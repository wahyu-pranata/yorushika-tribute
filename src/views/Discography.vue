<template>
  <div class="disco-view">
    <Banner message="Discography" logo="src/assets/yorulogo.jpg" />
    <Disco />
  </div>
</template>

<script>
import Banner from "../components/Banner.vue";
import Disco from "../components/Discographies.vue";
export default {
  components: {
    Banner,
    Disco,
  },
};
</script>

<style scoped>
.disco-view {
  @apply -z-10;
}
</style>
