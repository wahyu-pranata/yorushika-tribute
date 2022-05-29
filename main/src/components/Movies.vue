<template>
  <div v-if="yt.length">
        <div class="movie-container">
            <div v-for="video in ytVideos" :key="video" class="video group">
                <img :src="video.snippet.thumbnails.high.url" alt="Thumbnail" class="video-thumbnail">
                <div class="overlay"></div>
                <a :href="'https://www.youtube.com/watch?v=' + video.id.videoId" class="text-overlay">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <p>{{ video.snippet.title }}</p>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            yt: []
        }
    },
    mounted() {
        fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCRIgIJQWuBJ0Cv_VlU3USNA&maxResults=10&order=date&key=AIzaSyCg8FwT8MZPx94BzPQfrKYBE_KDfhMiZdk')
            .then(data => data.json())
            .then(res => this.yt = res.items)
            .catch(err => console.log(err.message))
    },
    computed: {
        ytVideos() {
            return this.yt.filter((e) => e.id.kind == "youtube#video")
        }
    }
}
</script>

<style scoped>
.movie-container {
    @apply grid grid-cols-2 max-w-3xl mx-auto gap-8
}
.video {
    @apply relative
}
.overlay {
    @apply absolute inset-0 bg-black opacity-0 transition-all group-hover:opacity-75 rounded-xl
  }
.text-overlay {
    @apply absolute bottom-0 left-1/2 w-full h-full font-bold text-center text-yoru-100 font-nunitosans opacity-0 transition-all duration-200 -translate-x-1/2 group-hover:bottom-4 group-hover:opacity-100
}
.text-overlay div {
    @apply absolute top-1/2 left-1/2 -translate-x-1/2
}
.text-overlay p {
    @apply absolute bottom-0 left-1/2 -translate-x-1/2 text-sm text-yoru-100 text-center
}
</style>