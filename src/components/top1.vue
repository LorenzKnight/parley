<template>
    <div id="top1">
        <div id="title">
            {{text}}
        </div>
        <div id="logo">
            
        </div>
        <div id="menu">
            <div id="nav">
                <ul>
                    <router-link to="/login"><li>Logga in</li></router-link>
                    <router-link to="/users"><li>Användare</li></router-link>
                    <router-link to="/"><li>Miljö</li></router-link>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>

export default {
  name: 'top1',
  computed: {
      text () {
          return this.$store.getters['HEADERTEXT']
      }
  }
}
</script>
<style>
    
</style>