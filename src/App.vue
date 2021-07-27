<template>
  <div id="app">
    <Home @onLogin="setUser" />
    <h1 v-if="user">Hello {{ user.displayName }}</h1>
  </div>
</template>

<script>
import Home from './pages/Home.vue'
import { auth } from '@/firebase'

export default {
  name: 'App',
  created() {
    auth.onAuthStateChanged(user => {
      this.setUser(user)
    })
  },
  data() {
    return {
      user: null
    }
  },
  components: {
    Home
  },
  methods: {
    setUser(user) {
      this.user = user
    }
  },
}
</script>

