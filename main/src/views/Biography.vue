<template>
    <div class="main">
        <Banner message="Biography"/>
        <Bio/>
    </div>
</template>

<script>
import Banner from '../components/Banner.vue'
import Bio from '../components/Bio.vue'
export default {
    components: {
        Banner, Bio
    }
}
</script>

<style>
.main {
    @apply -z-10
}
</style>