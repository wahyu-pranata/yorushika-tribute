<template>
  <div class="main">
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
.main {
  @apply -z-10;
}
</style>
