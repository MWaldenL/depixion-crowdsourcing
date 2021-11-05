<template>

<b-container v-if="answeredPreliminary === -1" class="main-div"></b-container>

<b-container v-else-if="answeredPreliminary === 1" class="main-div">
  <RepeatForm @moveToSurvey="moveToSurvey" />
</b-container>

<b-container v-else class="main-div">
  <b-row class="col-xl-8 mx-auto mt-5">
    <DataPrivacy/>
    <hr/>
    <b-button @click="accept" variant="success" class="col-2 mx-auto">Continue</b-button>
    <!-- <div class="col-xl-1"></div> -->
    <!-- <VisualArtPreliminary class="col-xl" @completePrelim="updateDB" /> -->
  </b-row>
</b-container>

</template>

<script>
import { auth, usersCollection } from '@/firebase'
import DataPrivacy from '@/components/DataPrivacy'
import VisualArtPreliminary from '@/components/VisualArtPreliminary'
import RepeatForm from '@/components/RepeatForm'

export default {
  created() {
    document.title = "DepiXion | Preliminary"
    auth.onAuthStateChanged(user => {
      this.setUser(user)
    })
  },
  data() {
    return {
      user: null,
      answeredPreliminary: -1
    }
  },

  components: {
    DataPrivacy,
    VisualArtPreliminary,
    RepeatForm
  },

  methods: {
    async accept() {      
      await usersCollection.doc(this.user.uid).update({
        preliminary: true,
      })

      this.$router.push("/survey")
    },

    setUser(user) {
      this.user = user

      usersCollection
        .doc(user.uid)
        .get()
        .then(user => {
          if (!user.empty) {
            this.answeredPreliminary = user.data().preliminary ? 1 : 0
          }
        })
    },

    async updateDB(course, selected) {
      await usersCollection.doc(this.user.uid).update({
        preliminary: true,
        course: course,
        visualArts: selected
      })

      this.$router.push("/survey")
    },

    moveToSurvey() {
      this.$router.push("/survey")
    }
  }
}
</script>
