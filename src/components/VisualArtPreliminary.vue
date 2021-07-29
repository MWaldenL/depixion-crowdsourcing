<template>
  <div class="px-4">
    <div class="text-center">
      <h3 class="display-5 fw-bold mb-4">Visual Art Preliminary</h3>
    </div>
    <b-form @submit.prevent="onSubmit" class="mx-4">

      <b-form-group
        id="course-input-group"
        class="my-4"
        label="What is your current profession? If student, please indicate your track (SHS) or degree (College)."
        label-for="course-input">

        <b-form-input
          id="course-input"
          v-model="course"
          placeholder="eg. Arts and Design, Photography, Architecture"
          required></b-form-input>

      </b-form-group>

      <b-form-group
        id="course-hobbies-group"
        label="Please enumerate any credentials or information about your visual arts background. This can be any courses that you took, are taking, or are teaching or even as simple as being an enthusiast of visual art"
        v-slot="{ ariaDescribedBy }">

        <b-form-checkbox-group
          id="course-hobbies-checkboxes"
          v-model="selected"
          :aria-describedby="ariaDescribedBy"
          :options="options"
          plain stacked></b-form-checkbox-group>

        <b-form-input
          id="others-input"
          class="mt-2 mb-5"
          v-model="others"
          placeholder="eg. Museum enthusiast, interior designer"></b-form-input>
        
      </b-form-group>
      <b-button type="submit" variant="success">Continue</b-button>
    </b-form>
  </div>
</template>

<script>
import { auth, usersCollection } from '@/firebase'

export default {
  name: 'VisualArtPreliminary',
  data() {
    return {
      course: "",
      others: "",
      selected: [],
      options: [
        { text: "Art Appreciation Courses / Hobbies", value: "art appreciation" },
        { text: "Painting Courses / Hobbies", value: "painting" },
        { text: "Film and Photography Courses / Hobbies", value: "film and photography" },
        { text: "Digital Art Courses / Hobbies", value: "digital art" },
        { text: "Game Design Courses / Hobbies", value: "game design" },
        { text: "Other Visual Arts Courses / Hobbies", value: "other visual arts" },
      ]
    }
  },
  methods: {
    async onSubmit () {
      if (this.others !== "")
        this.selected.push(this.others)

      const user = auth.currentUser.uid;
      usersCollection.doc(user).update({
        preliminary: true,
        course: this.course,
        visualArts: this.selected
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
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
