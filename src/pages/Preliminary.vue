<template>
<div id="preliminary">
  <DataPrivacy v-if="user" />
  <VisualArtPreliminary v-if="user" />
</div>
</template>
<script>
import { auth } from '@/firebase'
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
    }
  }
}
</script>
