import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './pages/Home'
import Survey from './pages/Survey'
import Preliminary from './pages/Preliminary'

import firebase from 'firebase'

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

// router.beforeEach((to, from, next) => {
//   const valid = ['Home', 'Survey', 'Preliminary']

//   if (to.name === 'Preliminary' || to.name === 'Survey') {

//     if (firebase.getCurrentUser()) 
//       next()
//     else 
//       next({ path: '/' })

//   } else if (to.name === 'Home') {

//     if (firebase.getCurrentUser()) 
//       next({ path: '/prelim' })
//     else 
//       next()

//   } else if (!valid.includes(to.name)) {

//     const path = firebase.getCurrentUser() ? '/prelim' : '/'
//     next({ path: path })

//   } else {

//     next()

//   }

// })

export default router
