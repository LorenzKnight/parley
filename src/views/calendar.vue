<template>
    <div class="calendar">
        <router-link to="/"> < Tillbaka</router-link>
            <vue-scheduler/>
    </div>
</template>
<script>
export default {
    mounted () {
        if (this.$route.query.id) {
            const salon = this.$store.getters['SALONS'].filter(s => s.id === this.$route.query.id)[0]
            console.log(this.$store.getters['SALONS'])
            this.$store.commit('SET_HEADERTEXT', salon.name)
        }
    }
}
</script>