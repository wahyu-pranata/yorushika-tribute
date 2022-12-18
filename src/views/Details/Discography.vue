<template>
  <div class="disco-details">
    <div v-if="disco">
      <Banner
        :message="disco.jpName"
        :sub="disco.enName"
        :logo="disco.detailsImg"
      />
    </div>
    <div v-else>
      <h1 class="text-center text-2xl">Loading discography data...</h1>
    </div>
    <Tracklist :data="disco" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Banner from "../../components/Banner.vue";
import Tracklist from "../../components/Tracklist.vue";

let disco = ref();
const props = defineProps(["id"]);

onMounted(() => {
  fetch("http://localhost:3000/discography/" + props.id)
    .then((res) => res.json())
    .then((data) => (disco.value = data))
    .catch((err) => console.log(err.message));
});
</script>

<style>
.disco-details {
  @apply -z-10;
}
</style>
