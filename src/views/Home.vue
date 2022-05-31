<template>
  <div class="main">
    <Banner/>
    <Introduction id="about"/>
    <News />
  </div>
</template>

<script>
import Banner from '../components/Banner.vue'
import Introduction from '../components/Introduction.vue'
import News from '../components/News.vue'
export default {
  components: {
    Banner, Introduction, News
  }
}
</script>

<style scoped>
.main {
  @apply -z-10
}
</style>