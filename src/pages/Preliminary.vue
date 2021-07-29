<template>
<b-container v-if="answeredPreliminary === -1"></b-container>
<b-container v-else-if="answeredPreliminary === 1">
  <RepeatForm @moveToSurvey="moveToSurvey" />
</b-container>
<b-container v-else>
  <b-row>
    <DataPrivacy class="col-xl" />
    <div class="col-xl-1"></div>
    <VisualArtPreliminary class="col-xl" @completePrelim="updateDB" />
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
