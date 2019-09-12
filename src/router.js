import Vue from 'vue'
import VueRouter from 'vue-router'
import ambient from './views/ambient'
import login1 from './views/login1'
import users from './views/users'
import calendar from './views/calendar'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        { path: '/', component: ambient },
        { path: '/login', component: login1 },
        { path: '/users', component: users },
        { path: '/calendar', component: calendar }
      ]
  })