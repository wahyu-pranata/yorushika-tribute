<template>
  <div v-if="discographies.length" class="disco-container">
    <div v-for="disco in discographies" :key="disco.id" class="disco group">
      <img :src="disco.img" :alt="disco.romajiName + ' image'" class="image" />
      <div class="overlay"></div>
      <div class="text-overlay">
        <router-link
          :to="{ name: 'Discography Details', params: { id: disco.id } }"
          class="disco-link"
        >
          {{ disco.enName }}
        </router-link>
        <small>{{ disco.type }} - {{ disco.yearReleased }} </small>
      </div>
    </div>
  </div>
  <p v-else class="loader">Loading discography data...</p>
</template>

<script>
export default {
  data() {
    return {
      discographies: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/discography")
      .then((res) => res.json())
      .then((data) => this.discographies = data)
      .catch((err) => console.log(err.message));
  },
};
</script>

<style>
.disco-container {
  @apply mx-auto grid max-w-3xl grid-cols-2 items-center justify-center gap-y-4;
}
.disco-container > div {
  @apply justify-self-center;
}
.disco {
  @apply relative rounded-xl shadow-lg transition-all duration-200 ease-in hover:scale-[.99] hover:shadow-none;
}
.disco-link {
  @apply focus:border-none focus:outline-none;
}
.image {
  @apply max-w-xs rounded-xl border border-yoru-300;
}
.overlay {
  @apply absolute inset-0 rounded-xl bg-black opacity-0 transition-all group-hover:opacity-60;
}
.text-overlay {
  @apply absolute -bottom-0 left-1/2 w-full -translate-x-1/2 text-center font-nunitosans font-bold text-yoru-100 opacity-0 transition-all duration-200 group-hover:bottom-4 group-hover:opacity-100;
}
.text-overlay link {
  @apply text-xl;
}
.text-overlay small {
  @apply block font-normal;
}
</style>
