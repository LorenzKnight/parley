import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// Import VueScheduler
import VueScheduler from 'v-calendar-scheduler';

// Import styles
import 'v-calendar-scheduler/lib/main.css';

Vue.use(VueScheduler, {
  //availableViews: ['month']
  initialView: 'week',
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
