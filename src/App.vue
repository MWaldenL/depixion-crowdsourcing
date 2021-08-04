<template>
<div id="app" class="main-div">
  <NavProfile v-if="isLoggedIn" />
  <router-view />
</div>
</template>

<script>
import { auth } from '@/firebase'
import NavProfile from './components/NavProfile.vue'

// feel ko di na to kailangan kasi pinublic ko lahat hehe
import Cloudinary from 'cloudinary-vue'
import Vue from 'vue'
Vue.use(Cloudinary, {
  configuration: {
    cloudName: "kbadulis"
  }
});

export default {
  name: 'App',
  created() {
    auth.onAuthStateChanged(user => {
      this.isLoggedIn = user !== null
      this.setUser(user)
    })
  },
  data() {
    return {
      user: null,
      isLoggedIn: false
    }
  },
  components: {
    NavProfile
  },
  methods: {
    setUser(user) {
      this.user = user
    },
    logout() {
      this.$router.push("/")
      auth.signOut()
        .catch(err => console.log(err))
    },
  }
}
</script>

<style>
html, body, #app {
  height: 100%;
  background-color: #e6e6e6;
  color: #333333;
}
</style>