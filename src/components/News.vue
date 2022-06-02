<template>
	<div class="news-comp-container">
		<h1 class="news-heading">NEWS</h1>
		<div v-if="news.length" class="news-container">
			<div class="news" v-for="n in news" :key="n.id">
				<p class="news-date">{{ n.date }}</p>
				<h2 class="headline">{{ n.title }}</h2>
			</div>
		</div>
		<p v-else class="loader">
		
		</p>
	</div>
</template>

<script>
export default {
  	data() {
		return {
		news: []
		}
	},
	mounted() {
		fetch('http://localhost:3000/news')
			.then(res => res.json())
			.then(data => this.news = data)
			.catch(err => console.log(err.message))
	}
}
</script>

<style>
.news-comp-container {
	@apply w-4/5 px-3 pt-6 mx-auto grid grid-cols-8 space-x-2 divide-x divide-yoru-300
}
.news-heading {
	@apply font-lora text-2xl underline decoration-yoru-300 text-center tracking-widest
}
.news-container {
	@apply divide-y divide-yoru-200 col-span-7 pl-4
} 
.headline {
	@apply font-nunitosans ml-8
}
.news {
	@apply flex items-center h-9
}
.news-detail {
	@apply font-nunitosans 
}
.news-date {
	@apply font-nunitosans text-right text-xs py-px px-1 bg-yoru-200 text-white
}
</style>