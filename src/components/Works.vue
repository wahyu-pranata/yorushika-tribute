<template>
	<div class="intro-content">
        <div class="intro-content-heading">
			<h2>Works</h2>
			<router-link to="/disco" class="intro-side-link">View More!</router-link>
        </div>
        <div class="intro-content-body">
			<h3>Album</h3>
			<ul class="list-container">
				<li v-for="album in albums" key="album.id" class="content-list">{{ album.jpName }} - <span>{{ album.enName }}</span></li>
			</ul>
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

<style>
.intro-content-body h3 {
  @apply ml-4 text-lg uppercase tracking-widest font-lora
}
.content-list {
  @apply font-nunitosans text-yoru-400
}
.content-list span {
  @apply text-yoru-300
}
.list-container {
  @apply space-y-2 ml-4
}
</style>