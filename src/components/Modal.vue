<template>
  <div class="modal">
      <button class="absolute top-4 right-4" @click="$emit('modalClosed')" key="0">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 stroke-yoru-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      <iframe
        key="1"
        class="w-3/4 h-auto aspect-video"
        :src="'https://www.youtube.com/embed/' + modalVideoId"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
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
.modal-overlay {  
  @apply fixed inset-0 overflow-hidden bg-slate-800/95;
}
.modal {
  @apply fixed top-1/2 left-1/2 flex h-2/3 w-3/5 -translate-y-1/2 -translate-x-1/2 items-center justify-center rounded-md bg-yoru-200;
}
iframe {
  @apply rounded-md;
}
.fadeup-enter-from {
  @apply opacity-0 top-2/3;
}
.fadeup-enter-active {
  @apply transition-all duration-300 ease-in-out
}
.fadeup-enter-to {
  @apply opacity-100 top-1/2;
}
.fadeup-leave-to {
  @apply opacity-0 top-2/3;
}
.fadeup-leave-active {
  @apply transition-all duration-300 ease-in-out
}
</style>
