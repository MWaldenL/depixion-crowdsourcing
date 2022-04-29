import Vue from 'vue'
import App from './App.vue'
import VueCookies from 'vue-cookies'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faSpinner } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

library.add(faUserSecret)
library.add(faSpinner)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueCookies, { expire: '7d', secure: 'true'})
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
 