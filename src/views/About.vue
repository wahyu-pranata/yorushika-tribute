<template>
    <div id="main">
        <Banner message="About" sub="Why I made this?"/>
        <About/>
    </div>
</template>

<script>
import Banner from '../components/Banner.vue'
import About from '../components/About.vue'
export default {
    components: {
        Banner, About
    },
}
</script>

<style>

</style>