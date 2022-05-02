import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './pages/Home'
import Survey from './pages/Survey'
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
		}
	]
})

router.beforeEach(async (to, from, next) => {
	const valid = ['Home', 'Survey']
	const user = await firebase.getCurrentUser()
	if (to.name === 'Home' || !valid.includes(to.name)) {
		if (user)
			next({ path: '/survey' })
		else next()
	} else {
		next()
	}
})

export default router
