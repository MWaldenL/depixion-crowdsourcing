<template>
<div class="px-4">
  <div class="text-center">

    <h5>You currently have</h5>
    <h3 class="display-5 fw-bold mb-4">{{ points }} points</h3>

    <h5>Remember!</h5>
    <p>
      100 points is equivalent to raffle ticket for a for a chance to win Php 250.00 or Php 500.00 through GCash <br>
      You can answer the form again to label new images and earn more points!
    </p>

    <b-button variant="success" class="mt-4" @click="onClick">Answer the form again</b-button>

  </div> 
</div>
</template>

<script>
export default {
  name: 'RepeatForm',
  data() {
    return {
      points: 0
    }
  },
  methods: {
    onClick () {
      this.$emit("moveToSurvey")
    }
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
