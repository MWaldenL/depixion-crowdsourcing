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

router.beforeEach(async (to, from, next) => {
  const valid = ['Home', 'Survey', 'Preliminary']
  const user = await firebase.getCurrentUser()

  if (to.name === 'Preliminary' || to.name === 'Survey') {

    if (user) 
      next()
    else 
      next({ path: '/' })

  } else if (to.name === 'Home') {

    if (user) 
      
      next({ path: '/prelim' })
    else 
      next()

  } else if (!valid.includes(to.name)) {

    if (user) 
      next({ path: '/prelim' })
    else 
      next({ path: '/' })

  } else {

    next()

  }

})

export default router
