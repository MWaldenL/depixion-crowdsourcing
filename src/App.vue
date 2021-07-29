<template>
  <div id="app">
    <Home @onLogin="setUser" />
    <h1 v-if="user">Hello, {{ user.displayName }}</h1>
    <DataPrivacy v-if="user"/>
    <VisualArtPreliminary v-if="user" />
  </div>
</template>

<script>
import Home from './pages/Home.vue'
import VisualArtPreliminary from './components/VisualArtPreliminary.vue'
import DataPrivacy from './components/DataPrivacy.vue'

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
    VisualArtPreliminary,
    DataPrivacy,
  },
  methods: {
    setUser(user) {
      this.user = user
    }
  }
}
</script>

