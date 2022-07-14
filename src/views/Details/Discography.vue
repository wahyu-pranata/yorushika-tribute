<template>
  <div class="disco-details">
    <div v-if="disco">
      <Banner
        :message="disco.jpName"
        :sub="disco.enName"
        :logo="disco.detailsImg"
      />
    </div>
    <div v-else>
      <h1 class="text-center text-2xl">Loading discography data...</h1>
    </div>
    <Tracklist :data="disco" />
  </div>
</template>

<script>
import Banner from "../../components/Banner.vue";
import Tracklist from "../../components/Tracklist.vue";
export default {
  components: { Banner, Tracklist },
  props: ["id"],
  data() {
    return {
      disco: null,
    };
  },
  mounted() {
    fetch("http://localhost:3000/discography/" + this.id)
      .then((res) => res.json())
      .then((data) => (this.disco = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style>
.disco-details {
  @apply -z-10;
}
</style>
