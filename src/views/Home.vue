<template>
  <div class="home">
    <Banner />
    <Introduction id="about" />
  </div>
</template>

<script>
import Banner from "../components/Banner.vue";
import Introduction from "../components/Introduction.vue";
import News from "../components/News.vue";
export default {
  components: {
    Banner,
    Introduction,
    News,
  },
};
</script>

<style scoped>
.home {
  @apply -z-10;
}
</style>
