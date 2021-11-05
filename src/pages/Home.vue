<template>
<div id="home" class="d-flex main-div">
  <Primer @login="login" v-show="!user" />
  <!-- <VueJsonToCsv :json-data="docs">
    <button>
      <b>Save</b>
    </button>
  </VueJsonToCsv> -->
</div>
</template>

<script>
import firebase from 'firebase/app'
import { auth, usersCollection, responsesCollection } from '@/firebase'
import Primer from '@/components/Primer'
import VueJsonToCsv from 'vue-json-to-csv'

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
                visualArts: [],
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
    Primer,
    VueJsonToCsv
  },

  created() {
    document.title = "DepiXion | Login"
    auth.onAuthStateChanged(user => {
      this.setUser(user)
    })
  },

  mounted() {
    // responsesCollection
    //   .get()
    //   .then(query => {
    //     let data
    //     let dataAdded
    //     query.forEach(doc => {
    //       data = doc.data()
    //       dataAdded = {
    //         "user": data.user,
    //         "painting": data.painting,
    //         "joy": data.labels[0].value,
    //         "trust": data.labels[1].value,
    //         "fear": data.labels[2].value,
    //         "surprise": data.labels[3].value,
    //         "sadness": data.labels[4].value,
    //         "disgust": data.labels[5].value,
    //         "anger": data.labels[6].value,
    //         "anticipation": data.labels[7].value,
    //       }
    //       console.log(data)
    //       console.log("")
    //       console.log(dataAdded)

    //       this.docs.push(dataAdded)
    //     }) 
    //   })
  },

  data() {
    return {
      user: null,
      docs: []
    }
  }
}
</script>

<style scoped>
#home {
  height: 100vh;
}
</style>
