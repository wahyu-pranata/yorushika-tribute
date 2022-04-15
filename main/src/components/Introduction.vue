<template>
  <div class="pt-6 flex flex-col items-center h-screen">
    <h1 class="heading">Introduction</h1>
    <div class="content-container">
      <div class="content">
        <h2 class="content-heading">Who is Yorushika?</h2>
        <p class="content-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis corporis adipisci dolor excepturi saepe quod hic quasi alias est dolores, ea dolorem porro tempore soluta debitis commodi illo aliquam illum nulla iusto? Omnis repudiandae reprehenderit tempore quibusdam iusto eum dolore porro dolor est incidunt dolorem quod, a, corporis, aliquam ex!
          <router-link to="/about" class="link">Hello</router-link>
        </p>
      </div>
      <div class="content">
        <h2 class="content-heading">Yorushika Works</h2>
        <p class="content-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis corporis adipisci dolor excepturi saepe quod hic quasi alias est dolores, ea dolorem porro tempore soluta debitis commodi illo aliquam illum nulla iusto? Omnis repudiandae reprehenderit tempore quibusdam iusto eum dolore porro dolor est incidunt dolorem quod, a, corporis, aliquam ex!</p>
      </div>
      <div class="content">
        <h2 class="content-heading">My Opinion on Yorushika?</h2>
        <p class="content-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis corporis adipisci dolor excepturi saepe quod hic quasi alias est dolores, ea dolorem porro tempore soluta debitis commodi illo aliquam illum nulla iusto? Omnis repudiandae reprehenderit tempore quibusdam iusto eum dolore porro dolor est incidunt dolorem quod, a, corporis, aliquam ex!</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
.link {
  @apply text-yoru-300 underline decoration-yoru-300 after:contents
}
</style>