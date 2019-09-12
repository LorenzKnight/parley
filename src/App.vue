<template>
  <div id="app">
      <top1 :text="text" id="top1"/>
      <div id="wrap">
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
import top1 from './components/top1.vue'

export default {
  name: 'app',
  components: {
    top1
  },
  watch:{
    $route (to) {
      let text = ''
      if (to.fullPath === '/') text = 'Miljö Lista'
      if (to.fullPath === '/calendar') text = 'Scheman'
      if (to.fullPath === '/users') text = 'Användare'
      if (to.fullPath === '/login') text = 'Logga in'

      if (text !== '') {
        this.$store.commit('SET_HEADERTEXT', text)
      }
    }
  },
  computed: {
    text () {
    }
  }
}
</script>

<style src="./style.css" />
