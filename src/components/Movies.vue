<template>
  <div v-if="yt.length">
    <div class="movie-container" :class="{ unscrollable: modalOpened }">
      <div
        v-for="video in ytVideos"
        :key="video"
        class="video group"
        @click="openModal(video.id.videoId)"
      >
        <img
          :src="video.snippet.thumbnails.high.url"
          alt="Thumbnail"
          class="video-thumbnail"
        />
        <div class="overlay"></div>
        <div class="text-overlay">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="absolute top-1/2 left-1/2 h-12 w-12 -translate-x-1/2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p>{{ video.snippet.title }}</p>
        </div>
      </div>
    </div>
  </div>
  <p class="loader" v-else>Loading movies data...</p>
  <Modal
    v-if="modalOpened"
    :modalVideoId="modalVideoId"
    @modalClosed="modalOpened = false"
  />
</template>

<script>
import Modal from "./Modal.vue";
export default {
  data() {
    return {
      modalOpened: false,
      modalVideoId: "",
      yt: [],
      apiURL: "http://localhost:3002/",
    };
  },
  components: {
    Modal,
  },
  methods: {
    openModal(id) {
      this.modalOpened = true;
      this.modalVideoId = id;
    },
  },
  mounted() {
    fetch(`${this.apiURL}`)
      .then((data) => data.json())
      .then((res) => (this.yt = res.items))
      .catch((err) => console.log(err.message));
  },
  computed: {
    ytVideos() {
      return this.yt.filter((e) => e.id.kind == "youtube#video");
    },
  },
};
</script>

<style scoped>
.movie-container {
  @apply mx-auto grid max-w-3xl grid-cols-2 gap-8;
}
.video {
  @apply relative;
}
.overlay {
  @apply absolute inset-0 rounded-xl bg-black opacity-0 transition-all group-hover:opacity-75;
}
.text-overlay {
  @apply absolute bottom-0 left-1/2 h-full w-full -translate-x-1/2 text-center font-nunitosans font-bold text-yoru-100 opacity-0 transition-all duration-200 group-hover:bottom-4 group-hover:opacity-100;
}
.text-overlay p {
  @apply absolute bottom-0 left-1/2 -translate-x-1/2 text-center text-sm text-yoru-100;
}
.unscrollable {
  @apply h-full overflow-hidden;
}
</style>
