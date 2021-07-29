<template>
<b-container id="preliminary">
  <div v-if="answeredPreliminary">
    <RepeatForm @moveToSurvey="moveToSurvey" />
  </div>
  <div v-else>
    <DataPrivacy />
    <VisualArtPreliminary @completePrelim="updateDB" />
  </div>
</b-container>
</template>

<script>
import { auth, usersCollection } from '@/firebase'
import DataPrivacy from '@/components/DataPrivacy'
import VisualArtPreliminary from '@/components/VisualArtPreliminary'
import RepeatForm from '@/components/RepeatForm'

export default {
  created() {
    auth.onAuthStateChanged(user => {
      this.setUser(user)
    })
  },
  data() {
    return {
      user: null,
      answeredPreliminary: false
    }
  },

  components: {
    DataPrivacy,
    VisualArtPreliminary,
    RepeatForm
  },

  methods: {
    setUser(user) {
      this.user = user

      usersCollection
        .doc(user.uid)
        .get()
        .then(user => {
          if (!user.empty) {
            this.answeredPreliminary = user.data().preliminary
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
