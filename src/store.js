import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    headerText: '',
    salonData: [
        {
            id: '1',
            name: 'Konferensrummet',
            location: 'västra hamngatan 7c'
        },
        {
            id: '2',
            name: 'kök',
            location: 'västra hamngatan 7c'
        },
      ]
  },
  mutations: {
      'SET_HEADERTEXT' (state, val) {
        state.headerText = val
      }
  },
  actions: {
  },
  getters: {
      'HEADERTEXT' (state) {
          return state.headerText
      },
      'SALONS' (state) {
          return state.salonData
      }
  },
})