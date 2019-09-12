<template>
  <div id="loggain">
      <top1 id="top1"/>
      <div id="wrap">
          <login1 id="login1"/>
      </div>
  </div>
</template>

<script>
import top1 from './components/top1.vue'
import login1 from './components/login1.vue'

export default {
  name: 'loggain',
  components: {
    top1,
    login1
  }
}
</script>

<style src="./style.css" />
