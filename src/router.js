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
	console.log(user)
	if (to.name === 'Preliminary' || to.name === 'Survey') {
		next()
	} else if (to.name === 'Home' || !valid.includes(to.name)) {
		if (user)
			next({ path: '/survey' })
		else next()
	} else {
		next()
	}
})

export default router
