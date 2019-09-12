<template>
    <div id="ambient">
      <div class="amb_list">
        <salon v-for="(d, i) in data" :key="i" class="salon" :id="d.id" :name="d.name" :location="d.location"/>
      </div>
        <input v-if="!showForm" @click.stop.prevent="showForm = true" style="" type="submit" class="add_button" value="+" />
        <regform ref="regform" v-else id="reg_form"/>
    </div>
</template>
<script>
import salon from './salon.vue'
import regform from './regform.vue'

export default {
  name: 'ambient',
  data() {
    return {
      showForm: false,
      selectedSalon: -1
    }
  },
  components: {
    salon,
    regform
  },
  computed: {
    data () {
      return this.$store.getters['SALONS']
    }
  },
  methods: {
    onClick(e) {
      if (this.$refs.regform && !this.isElementOrDescendant(this.$refs.regform.$el, e.target)) this.showForm = false
    },
    isElementOrDescendant(parent, child) {
      if (parent === child) return true

      var node = child.parentNode;
      while (node != null) {
        if (node == parent) {
          return true;
        }
        node = node.parentNode;
      }
      return false;
    }
  },
  mounted () {
    document.addEventListener('click', this.onClick)
  },
  destroyed () {
    document.removeEventListener('click', this.onClick)
  }
}
</script>

<style>
    
</style>