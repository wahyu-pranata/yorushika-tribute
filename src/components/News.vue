<template>
  <div v-if="news.length" class="news-container">
    <div class="news" v-for="n in news" :key="n.id">
      <p class="news-date">{{ n.date }}</p>
      <h2 class="headline">{{ n.title }}</h2>
    </div>
  </div>
  <p v-else class="loader">Loading news data...</p>
</template>

<script setup>
import { ref, onMounted } from "vue";

let news = ref([]);
onMounted(() => {
  fetch("http://localhost:3000/news")
    .then((res) => res.json())
    .then((data) => (news.value = data))
    .catch((err) => console.log(err.message));
});
</script>

<style>
.news-comp-container {
  @apply mx-auto grid w-4/5 grid-cols-8 space-x-2 divide-x divide-yoru-300 px-3 pt-6;
}
.news-heading {
  @apply text-center font-lora text-2xl tracking-widest underline decoration-yoru-300;
}
.news-container {
  @apply col-span-7 divide-y divide-yoru-200 pl-4;
}
.headline {
  @apply ml-8 font-nunitosans;
}
.news {
  @apply flex h-9 items-center;
}
.news-detail {
  @apply font-nunitosans;
}
.news-date {
  @apply bg-yoru-200 py-px px-1 text-right font-nunitosans text-xs text-white;
}
</style>
