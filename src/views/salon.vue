<template>
  <div id="salon">
    <h3>{{name}}</h3>
    <p>{{location}}</p>
    <br>
    <router-link :to="`/calendar?id=${id}`"><input style="" type="submit" class="f_button" value="Se reservationer" /></router-link>
    <input v-if="!showFormR" @click.stop.prevent="showFormR = true" style="" type="submit" class="f_button" value="Redigera" />

    <regformr ref="regform_r" v-else id="reg_form_r"/>
  </div>
</template>

<script>
import regformr from './regform_r.vue'

export default {
  data: () => ({
    showFormR: false
  }),
  props:{
    name: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
    }
  },
  components: {
    regformr
  },
  methods: {
    onClick(e) {
      if (this.$refs.regform_r && !this.isElementOrDescendant(this.$refs.regform_r.$el, e.target)) this.showFormR = false
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
