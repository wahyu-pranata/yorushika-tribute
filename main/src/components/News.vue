<template>
  <div class="pt-6 flex flex-col items-center">
    <h1 class="heading">News</h1>
    <div class="news-container">
      <div class="news" v-for="n in 6">
        <h2 class="headline">Some great title</h2>
        <p class="news-detail">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas labore qui iure harum suscipit facilis nemo libero ad, amet ullam rem aut deserunt molestiae dicta.</p>
        <p class="news-date">2022-05-04</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .heading {
    @apply text-center mx-auto relative inline-block font-lora text-yoru-400 text-4xl underline decoration-yoru-300 decoration-2 underline-offset-2
  }
  .news-container {
    @apply mt-4 divide-y divide-yoru-200 w-2/3
  }
  .headline {
    @apply mt-4 text-2xl font-nunitosans underline decoration-yoru-200 decoration-2 underline-offset-[1px]
  }
  .news-detail {
    @apply font-nunitosans 
  }
  .news-date {
    @apply font-nunitosans text-right text-sm text-yoru-200
  }
</style>