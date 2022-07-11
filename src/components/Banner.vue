<template>
  <div class="banner-image">
    <div class="backdrop"></div>
    <div class="banner-content">
      <img :src="logo" alt="yorushika" class="banner-logo" />
      <div class="text-center">
        <p class="banner-text-message">{{ message }}</p>
        <small class="banner-text-sub">{{ sub }}</small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    logo: {
      type: String,
      default: "src/assets/yorulogo.jpg",
    },
    message: String,
    sub: String,
  },
};
</script>

<style>
.banner-image {
  @apply relative mb-28 h-64 w-full bg-[url('../src/assets/suisnbuna.png')] bg-top;
}
.backdrop {
  @apply absolute inset-0 bg-white/5 backdrop-blur-md;
}
.banner-content {
  @apply absolute left-1/2 -bottom-24 -translate-x-1/2;
}
.banner-logo {
  @apply mx-auto w-48 rounded-xl shadow-md;
}
.banner-text-container {
  @apply text-center;
}
.banner-text-message {
  @apply mt-2 font-lora text-2xl tracking-widest text-yoru-300;
}
.banner-text-sub {
  @apply w-full font-nunitosans tracking-widest text-yoru-400;
}
</style>
