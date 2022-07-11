<template>
  <div v-if="biographies.length">
    <div class="bio-container">
      <div class="bio" v-for="bio in biographies" :key="bio.id">
        <h3 class="bio-year">{{ bio.year }}</h3>
        <ul class="bio-detail">
          <li v-for="detail in bio.details" :key="detail" class="bio-detail">
            {{ detail }}
          </li>
        </ul>
      </div>
    </div>
  </div>
  <p v-else class="loader">Loading Biography Data...</p>
</template>

<script>
export default {
  data() {
    return {
      biographies: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/biography")
      .then((res) => res.json())
      .then((data) => (this.biographies = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style>
.bio-container {
  @apply mx-auto max-w-3xl space-y-4;
}
.bio-year {
  @apply font-lora text-xl font-bold tracking-wider text-yoru-300;
}
.bio-detail {
  @apply ml-3 font-nunitosans text-yoru-400;
}
</style>
