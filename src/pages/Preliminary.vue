<template>
<b-container id="preliminary">
  <DataPrivacy v-if="user" />
  <VisualArtPreliminary v-if="user" @completePrelim="updateDB" />
</b-container>
</template>

<script>
import { auth, usersCollection } from '@/firebase'
import DataPrivacy from '@/components/DataPrivacy'
import VisualArtPreliminary from '@/components/VisualArtPreliminary'

export default {
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
    DataPrivacy,
    VisualArtPreliminary
  },
  methods: {
    setUser(user) {
      this.user = user
    },

    async updateDB(course, selected) {
      const user = auth.currentUser.uid;
      await usersCollection.doc(user).update({
        preliminary: true,
        course: course,
        visualArts: selected
      })

      this.$router.push("/survey")
    }
  }
}
</script>
