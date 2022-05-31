<template>
    <div class="content">
        <div class="content-heading">
          <h2>Who?</h2>
          <router-link to="/biography" class="side-link">Read Biography</router-link>
        </div>
        <div class="content-body">
          <p class="content-paragraph">
            Yorushika (ヨルシカ) is a Japanese rock duo debuted in 2017, composed of two amazing and secretive members: N-buna, a former vocaloid music producer and Suis, a female vocalist. They haven't revealed their faces in the public nor the media, but they held 2 concerts, in July 2017 and August 2019.
          </p>
          <p class="content-paragraph">
            The name "Yorushika" was taken from a lyric in their song "Kumo to Yūrei" (The Clouds and the Ghost), the line "Yoru shika mō nemurezu ni" which translates to, "I can only sleep at night." Their logo mark is a motif of two moons facing each other and also serves as a clock hand, portraying the time "from 6:00 to night".
          </p>
        </div>
      </div>
</template>

<style scoped>
.content {
  @apply grid grid-cols-8 space-x-2 divide-x divide-yoru-300
}
.content-heading * {
  @apply uppercase tracking-wider text-center
}
.side-link {
  @apply block text-xs text-yoru-300 
}
.content-body {
  @apply col-span-7 space-y-4 pl-2
}
</style>