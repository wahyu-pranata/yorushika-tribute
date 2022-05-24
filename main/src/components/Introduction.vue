<template>
  <div class="pt-6 flex flex-col items-center">
    <h1 class="heading">Introduction</h1>
    <div class="content-container">
      <div class="content">
        <h2 class="content-heading">Who is Yorushika?</h2>
        <p class="content-paragraph">
          Yorushika (ヨルシカ) is a Japanese rock duo debuted in 2017, composed of two amazing and secretive members: N-buna, a former vocaloid music producer and Suis, a female vocalist. They haven't revealed their faces in the public nor the media, but they held 2 concerts, in July 2017 and August 2019.
        </p>
        <p class="content-paragraph">
          The name "Yorushika" was taken from a lyric in their song "Kumo to Yūrei" (The Clouds and the Ghost), the line "Yoru shika mō nemurezu ni" which translates to, "I can only sleep at night." Their logo mark is a motif of two moons facing each other and also serves as a clock hand, portraying the time "from 6:00 to night".
        </p>
          <router-link to="/about" class="link">Read Yorushika Biography</router-link>
      </div>
      <div class="content">
        <h2 class="content-heading">Yorushika Works</h2>
        <ul class="list-container">
          <li v-for="album in albums" key="album.id" class="content-list">{{ album.jpName }} - <span>{{ album.enName }}</span></li>
        </ul>
        <router-link to="/disco" class="link">View More!</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      disco: []
    }
  },
  mounted() {
    fetch('http://localhost:3000/discography')
      .then(res => res.json())
      .then(data => this.disco = data)
      .catch(err => console.log(err.message))
  },
  computed: {
    albums() {
      return this.disco.filter(item => item.type === "Album" || item.type === "EP" || item.type === "Mini Album");
    }
  }
}
</script>

<style scoped>
.heading {
  @apply text-center mx-auto relative inline-block font-lora text-yoru-400 text-4xl underline decoration-yoru-300 decoration-2 underline-offset-2
}
.content-container {
  @apply w-4/5 px-3 py-2
}
.content {
  @apply w-full mb-8
}
.content-heading {
  @apply italic font-lora text-2xl underline decoration-yoru-300 text-left
}
.content-paragraph {
  @apply font-nunitosans first-letter:ml-8 mt-2
}
.list-container {
  @apply space-y-2 ml-4 mt-2
}
.content-list {
  @apply font-nunitosans text-yoru-400
}
.content-list span {
  @apply text-yoru-300
}
.link {
  @apply block bg-yoru-300 text-white px-3 py-1 mt-2 mx-auto w-max rounded-sm shadow-md hover:bg-yoru-200 hover:scale-[0.99] hover:shadow-none
}
</style>