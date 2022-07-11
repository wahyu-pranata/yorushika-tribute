<template>
  <div class="flex flex-col items-center">
    <h1 class="main-heading">Introduction</h1>
    <div class="intro-content-container">
      <Content />
      <Works />
    </div>
  </div>
</template>

<script>
import Content from "./Content.vue";
import Works from "./Works.vue";
export default {
  components: { Content, Works },
};
</script>

<style>
.main-heading {
  @apply relative inline-block text-center font-lora text-3xl text-yoru-400 underline decoration-yoru-300 decoration-2 underline-offset-2;
}
.intro-content-container {
  @apply mx-auto mt-4 w-5/6 space-y-12 px-3 py-2 text-justify md:w-4/5;
}
.intro-content {
  @apply space-x-2 md:grid md:grid-cols-8 md:divide-x md:divide-yoru-300;
}
.intro-content-heading * {
  @apply text-center uppercase tracking-wider;
}
.intro-content-heading h2 {
  @apply text-center font-lora text-2xl md:underline md:decoration-yoru-300;
}
.intro-side-link {
  @apply block text-xs text-yoru-300 underline decoration-yoru-300;
}
.intro-content-body {
  @apply col-span-7 mt-2 md:mt-0 md:space-y-4 md:pl-2;
}
.intro-content-paragraph {
  @apply font-nunitosans first-letter:ml-8;
}
</style>
