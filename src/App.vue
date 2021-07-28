<template>
  <div id="app">
    <Home @onLogin="setUser" />
    <h1 v-if="user">Hello {{ user.displayName }}</h1>
    <VisualArtPreliminary v-if="user" />
    <p>{{user}}</p>
  </div>
</template>

<script>
import Home from './pages/Home.vue'
import VisualArtPreliminary from './components/VisualArtPreliminary.vue'
import { auth, usersCollection } from '@/firebase'

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
    Home,
    VisualArtPreliminary
  },
  methods: {
    setUser(user) {
      this.user = user
    }
  }
}
</script>

