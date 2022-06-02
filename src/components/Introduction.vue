<template>
  <div class="flex flex-col items-center">
    <h1 class="main-heading">Introduction</h1>
    <div class="intro-content-container">
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
.intro-content-container {
  @apply w-4/5 px-3 py-2 mt-4 space-y-12
}
.intro-content {
  @apply grid grid-cols-8 space-x-2 divide-x divide-yoru-300
}
.intro-content-heading * {
	@apply uppercase tracking-wider text-center
}
.intro-content-heading h2 {
	@apply font-lora text-2xl underline decoration-yoru-300 text-center
}
.intro-side-link {
	@apply block text-xs text-yoru-300 
}
.intro-content-body {
	@apply col-span-7 space-y-4 pl-2
}
.intro-content-paragraph {
	@apply font-nunitosans first-letter:ml-8
}
</style>