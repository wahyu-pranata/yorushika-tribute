<template>
	<div v-if="data">
		<h1>Tracklist</h1>
		<ul class="tracklist-container">
			<li v-for="song in tracklist" class="tracklist">
				<p>{{ song.jpName }}</p>
				<small>{{ song.romajiName }} / <span class="text-yoru-300">{{ song.enName }}</span></small>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	props: ['data'],
	computed: {
		tracklist() {
			return this.data.tracklist
		}
	}
}
</script>

<style scoped>
h1 {
	@apply mx-auto w-max text-2xl font-nunitosans text-yoru-400
}
.tracklist-container {
    @apply w-1/2 mx-auto mb-4 border border-yoru-400 divide-y divide-yoru-400
}
.tracklist {
    @apply px-2 py-4 -mt-px
}
.tracklist p {
    @apply text-yoru-400
}
.tracklist small {
    @apply font-nunitosans text-yoru-400
}
</style>