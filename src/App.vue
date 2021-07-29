<template>
<div id="app">
  <NavProfile v-if="isLoggedIn" />
  <router-view />
</div>
</template>

<script>
import { auth } from '@/firebase'
import NavProfile from './components/NavProfile.vue'

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

