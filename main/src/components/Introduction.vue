<template>
  <div class="flex flex-col items-center">
    <h1 class="main-heading">Introduction</h1>
    <div class="content-container">
      <Content/>
      <Works/>
    </div>
  </div>
</template>

<script>
import Content from './Content.vue'
import Works from './Works.vue'
export default {
  components: {Content, Works},
  
}
</script>

<style>
.main-heading {
  @apply text-center relative inline-block font-lora text-yoru-400 text-3xl underline decoration-yoru-300 decoration-2 underline-offset-2
}
.content-container {
  @apply w-4/5 px-3 py-2 mt-4 space-y-12
}
.content-heading h2 {
  @apply font-lora text-2xl underline decoration-yoru-300 text-left
}
.content-paragraph {
  @apply font-nunitosans first-letter:ml-8
}
</style>