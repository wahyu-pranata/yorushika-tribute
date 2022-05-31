<template>
    <div class="main">
        <Banner message="Movies" sub="Latest Videos from Yorushika Official YouTube Channel"/>
        <Movies/>
    </div>
</template>

<script>
import Banner from '../components/Banner.vue'
import Movies from '../components/Movies.vue'
export default {
    components: {
        Movies, Banner
    }
}
</script>