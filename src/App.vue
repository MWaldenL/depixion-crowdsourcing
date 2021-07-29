<template>
  <div id="app">
    <b-navbar class="px-4" toggleable="lg" type="light" variant="light">
      <b-navbar-brand href="#">Hatdog</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse" />
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-button 
            v-if="!isLoggedIn"
            @click="login" 
            size="sm" class="my-2 my-sm-0">Login</b-button>
          <b-button 
            v-else
            @click="logout" 
            size="sm" class="my-2 my-sm-0">Logout</b-button>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view />
  </div>
</template>

<script>
import firebase from "firebase/app"
import { auth, usersCollection } from '@/firebase'
import Home from './pages/Home.vue'
import VisualArtPreliminary from './components/VisualArtPreliminary.vue'
import DataPrivacy from './components/DataPrivacy.vue'
export default {
  name: 'App',
  created() {
    auth.onAuthStateChanged(user => {
      this.isLoggedIn = user !== null
    })
  },
  data() {
    return {
      user: null,
      isLoggedIn: false
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
    },
    async login() {
      const provider = new firebase.auth.GoogleAuthProvider()
      auth.signInWithPopup(provider).then((result) => {
        const { uid, email } = result.user
        this.$emit('onLogin', result.user)
        usersCollection
          .where('email', '==', email)
          .get()
          .then(snapshot => {
            if (snapshot.empty) {
              usersCollection.doc(uid).set({
                email: email,
                preliminary: false
              })
            }
          })
      }).catch(err => console.log(err))
    },
    logout() {
      auth.signOut()
        .catch(err => console.log(err))
    },
  }
}
</script>

