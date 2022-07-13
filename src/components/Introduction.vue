<template>
  <div class="flex flex-col items-center">
    <h1 class="main-heading">Introduction</h1>
    <div class="intro-content-container">
      <Content>
        <template #side>
          <h2>Who?</h2>
          <router-link to="/biography" class="intro-side-link">Read Biography</router-link>
        </template>
        <template #paragraph1>
          Yorushika (ヨルシカ) is a Japanese rock duo debuted in 2017, composed of
          two amazing and secretive members: N-buna, a former vocaloid music
          producer and Suis, a female vocalist. They haven't revealed their faces
          in the public nor the media, but they held 2 concerts, in July 2017 and
          August 2019.
        </template>
        <template #paragraph2>
          The name "Yorushika" was taken from a lyric in their song "Kumo to
          Yūrei" (The Clouds and the Ghost), the line "Yoru shika mō nemurezu ni"
          which translates to, "I can only sleep at night." Their logo mark is a
          motif of two moons facing each other and also serves as a clock hand,
          portraying the time "from 6:00 to night".
        </template>
      </Content>
      <Content>
        <template #side>
          <h2>Works</h2>
          <router-link to="/disco" class="intro-side-link">View More!</router-link>
        </template>
        <template #body>
          <Works />
        </template>
      </Content>
      <Content>
        <template #side>
          <h1 class="news-heading">NEWS</h1>
        </template>
        <template #body>
          <News/>
        </template>
      </Content>
    </div>
  </div>
</template>

<script>
import News from "./News.vue"
import Content from "./Content.vue";
import Works from "./Works.vue";
export default {
  components: { Content, Works, News },
};
</script>

<style>
.main-heading {
  @apply relative inline-block text-center font-lora text-3xl text-yoru-400 underline decoration-yoru-300 decoration-2 underline-offset-2;
}
.intro-content-container {
  @apply m-0 mt-4 w-full space-y-12 px-3 py-2 text-justify md:w-4/5 md:mx-auto;
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
