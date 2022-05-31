<template>
    <div v-if="biographies.length">
        <div class="bio-container">
            <div class="bio" v-for="bio in biographies" :key="bio.id">
                <h3 class="bio-year">{{ bio.year }}</h3>
                <ul class="bio-detail">
                    <li v-for="detail in bio.details" :key="detail" class="bio-detail">
                        {{ detail }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <p v-else>
        Loading Biography Data...
    </p>
</template>

<script>
export default {
    data() {
        return {
            biographies: []
        }
    },
    mounted() {
        fetch('http://localhost:3000/biography')
        .then(res => res.json())
        .then(data => this.biographies = data)
        .catch(err => console.log(err.message))
    }
}
</script>

<style scoped>
.bio-container {
    @apply  max-w-3xl mx-auto space-y-4
}
.bio-year {
    @apply font-lora text-yoru-300 text-xl tracking-wider font-bold
}
.bio-detail {
    @apply font-nunitosans text-yoru-400 ml-3
}

</style>