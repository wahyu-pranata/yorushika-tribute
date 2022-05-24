<template>
  <div class="bg-[url('../src/assets/suisnbuna.png')] bg-top-center w-full h-64 relative mb-28">
    <div class="absolute inset-0 bg-white/5 backdrop-blur-md"></div>
    <div class="absolute left-1/2 -translate-x-1/2 -bottom-24">
      <img :src="logo" alt="yorushika" class="rounded-xl w-48 shadow-md mx-auto">
      <div class="text-center">
        <p class="font-lora text-xl mt-2 tracking-widest text-yoru-300">{{ message }}</p>
        <small class="font-nunitosans w-full tracking-widest text-yoru-400">{{ sub }}</small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['message', 'logo', 'sub']
}
</script>

<style >

</style>