<template>
<div id="home" class="d-flex main-div">
  <Primer @login="login" v-show="!user" />
</div>
</template>

<script>
import firebase from 'firebase/app'
import { auth, usersCollection } from '@/firebase'
import Primer from '@/components/Primer'

export default {
  name: "Home",

  methods: {
    async login() {
      const provider = new firebase.auth.GoogleAuthProvider()
      auth.signInWithPopup(provider).then((result) => {
        const { uid, email } = result.user
        usersCollection
          .where('email', '==', email)
          .get()
          .then(snapshot => {
            if (snapshot.empty) {
              usersCollection.doc(uid).set({
                email: email,
                preliminary: false,
                points: 0,
                paintingsAnnotated: []
              })
            }
            this.$router.push("/prelim")
          })
      }).catch(err => console.log(err))
    },

    setUser(user) {
      this.user = user
    }
  },

  components: {
    Primer
  },

  created() {
    document.title = "DepiXion | Login"
    auth.onAuthStateChanged(user => {
      this.setUser(user)
    })
  },

  data() {
    return {
      user: null
    }
  }
}
</script>

<style scoped>
#home {
  height: 100vh;
}
</style>
