<template>
  <div class="modal-container" @click.self="$emit('modalClosed')">
    <div class="modal">
      <iframe
        width="560"
        height="315"
        :src="'https://www.youtube.com/embed/' + modalVideoId"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    modalVideoId: String,
  },
};
</script>

<style>
.modal-container {
  @apply fixed top-0 left-0 z-10 h-screen w-screen overflow-hidden bg-slate-800/95;
}
.modal {
  @apply absolute top-1/2 left-1/2 flex h-2/3 w-3/5 -translate-y-1/2 -translate-x-1/2 items-center justify-center rounded-md bg-yoru-200;
}
iframe {
  @apply rounded-md;
}
</style>
