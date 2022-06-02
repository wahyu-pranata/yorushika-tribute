<template>
  	<div class="banner-image">
    	<div class="backdrop"></div>
		<div class="banner-content">
			<img :src="logo" alt="yorushika" class="banner-logo">
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
			default: 'src/assets/yorulogo.jpg'
		},
		message: String,
		sub: String
	}
}
</script>

<style>
.banner-image {
	@apply bg-[url('../src/assets/suisnbuna.png')] bg-top w-full h-64 relative mb-28
}
.backdrop {
	@apply absolute inset-0 bg-white/5 backdrop-blur-md
}
.banner-content {
	@apply absolute left-1/2 -translate-x-1/2 -bottom-24
}
.banner-logo {
	@apply rounded-xl w-48 shadow-md mx-auto
}
.banner-text-container {
	@apply text-center
}
.banner-text-message {
	@apply font-lora text-2xl mt-2 tracking-widest text-yoru-300
}
.banner-text-sub {
	@apply font-nunitosans w-full tracking-widest text-yoru-400
}

</style>