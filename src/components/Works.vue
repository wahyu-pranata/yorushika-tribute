<template>
    <div class="intro-content-body">
      <h3>Album</h3>
      <ul class="list-container">
        <li v-for="album in albums" key="album.id" class="content-list">
          {{ album.jpName }} - <span>{{ album.enName }}</span>
        </li>
      </ul>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";

let disco = ref([]);

onMounted(() => {
  fetch("http://localhost:3000/discography")
    .then((res) => res.json())
    .then((data) => (disco.value = data))
    .catch((err) => console.log(err.message));
});

const albums = computed(() => {
  return disco.value.filter(
    (item) =>
      item.type === "Album" ||
      item.type === "EP" ||
      item.type === "Mini Album"
  );
});
</script>

<style>
.intro-content-body h3 {
  @apply ml-4 font-lora text-lg uppercase tracking-widest;
}
.content-list {
  @apply font-nunitosans text-yoru-400;
}
.content-list span {
  @apply text-yoru-300;
}
.list-container {
  @apply ml-4 space-y-2;
}
</style>
