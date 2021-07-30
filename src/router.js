import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Preliminary from './pages/Preliminary'
Vue.use(VueRouter)

const router = new VueRouter({ 
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/survey',
      name: 'Survey',
      component: Survey
    },
    {
      path: '/prelim',
      name: 'Preliminary',
      component: Preliminary
    },
  ]
})

export default router
