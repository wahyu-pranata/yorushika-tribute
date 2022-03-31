<template>
  <div class="main">
      <Banner/>
      <Introduction id="about"/>
    </div>
</template>

<script>
import Banner from '../components/Banner.vue'
import Introduction from '../components/Introduction.vue'
export default {
  components: {
    Banner, Introduction
  }
}
</script>

<style>

</style>