<template>
<div class="px-4">
  <div class="text-center">

    <h5>
      Hello, {{ name }}
    </h5>

    <h5>You currently have</h5>
    <h3 class="display-5 fw-bold mb-4">
      {{ points }} points 
      <span v-if="points === 0">:'(</span> 
    </h3>

    <h5>Remember!</h5>
    <p>
      100 points is equivalent to raffle ticket for a for a chance to win Php 250.00 or Php 500.00 through GCash <br>
      You can answer the form again to label new images and earn more points!
    </p>

    <b-button variant="success" class="mt-4" @click="onClick">
      Answer the form again
    </b-button>

  </div> 
</div>
</template>

<script>
import { auth, usersCollection } from '@/firebase'

export default {
  name: 'RepeatForm',

  data() {
    return {
      points: 0,
      name: ""
    }
  },

  methods: {
    onClick () {
      this.$emit("moveToSurvey")
    }
  },
  
  created() {
    const user = auth.currentUser
    this.name = user.displayName

    usersCollection
      .doc(user.uid)
      .get()
      .then(user => {
        this.points = user.data().points
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h5 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
