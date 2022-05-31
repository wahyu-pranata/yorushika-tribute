<template>
  <div class="disco-container">
    <div v-for="disco in discographies" :key="disco.id" class="disco group">
      <img :src="disco.img" :alt="disco.romajiName + ' image'" class="image">
      <div class="overlay"></div>
      <div class="text-overlay">
        <router-link :to="{name: 'Discography Details', params: {id: disco.id}}" class="disco-link"> {{ disco.enName }} </router-link>
        <small>{{ disco.type}} - {{ disco.yearReleased }} </small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      discographies: []
    }
  },
  mounted() {
    fetch('http://localhost:3000/discography')
      .then(res => res.json())
      .then(data => this.discographies = data)
      .catch(err => console.log(err.message))
  }
}
</script>

<style scoped>
  .disco-container {
    @apply max-w-3xl mx-auto grid grid-cols-2 gap-y-4 justify-center items-center
  }
  .disco-container > div {
    @apply justify-self-center
  }
  .disco {
    @apply relative rounded-xl shadow-lg transition-all ease-in duration-200 hover:scale-[.99] hover:shadow-none
  }
  .disco-link {
    @apply focus:border-none focus:outline-none
  }
  .image {
    @apply max-w-xs border border-yoru-300 rounded-xl
  }
  .overlay {
    @apply absolute inset-0 bg-black opacity-0 transition-all group-hover:opacity-60 rounded-xl
  }
  .text-overlay {
    @apply absolute -bottom-0 left-1/2 w-full font-bold text-center text-yoru-100 font-nunitosans opacity-0 transition-all duration-200 -translate-x-1/2 group-hover:bottom-4 group-hover:opacity-100
  }
  .text-overlay link {
    @apply text-xl
  }
  .text-overlay small {
    @apply font-normal block
  }
  
</style>