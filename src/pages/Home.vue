<template>
<div id="home" class="d-flex">

  <img :src="background" id="bg-image">

  <div id="primer" class="ml-auto" :style="{ backgroundColor: color }">
    <h2 class="primer-text" :style="{ color: color }">
      <b>DepiXion</b>
    </h2>

    <h4 class="primer-text" :style="{ color: color }">
      Generating Abstract Art Based on a User-Specified Emotion Spectrum
    </h4>
    
    <br>

    <p class="primer-text" :style="{ color: color }">
      Hello! <br><br>

      We are Keith Gabriel Badulis, Matthew Walden Lua, and Byron Ethelbert Nill, ID 118 Students from the College of Computer Studies taking up BS Computer Science with specializations in Software Technology. We are currently working on our thesis project entitled "Generating Abstract Art Based on a User-Specified Emotion Spectrum". Our goal is to build a software that can create abstract paintings through emotions, and we need your help! <br><br>

      In this survey, you will be shown 10 abstract paintings, and you will tell us the emotions that you feel from them. You will be allowed to answer the survey again if you wish to do so. <br><br>
      
      For every image that you label, you will earn 1 point. 10 points will give you one raffle ticket for a chance to win Php 250.00 or Php 500.00 through GCash! <br><br>

      For any concerns or questions regarding this questionnaire or our project, in general, you may reach us through our email addresses and contact numbers below: <br><br>

      <b>Keith Gabriel Badulis</b><br>
      keith_gabriel_badulis@dlsu.edu.ph<br>
      09123456789<br><br>

      <b>Matthew Walden Lua</b><br>
      matthew_walden_lua@dlsu.edu.ph<br>
      09123456789<br><br>

      <b>Byron Ethelbert Nill</b><br>
      byron_ethelbert_nill@dlsu.edu.ph<br>
      09399363044<br><br>

      Thank you very much for your interest in our study! Please click the link below to login with your Google Account and proceed with the survey.
    </p>

    <img 
      id="login" 
      class="d-block mx-auto mt-5 w-50" 
      src="@/../public/login.png" 
      @click="login">
  </div>

</div>
</template>

<script>
import firebase from "firebase/app"
import { auth, usersCollection } from '@/firebase'

export default {
  name: "Home",

  methods: {
    async login() {
      const provider = new firebase.auth.GoogleAuthProvider()
      auth.signInWithPopup(provider).then((result) => {
        const { uid, email } = result.user
        this.$emit('onLogin', result.user)
        usersCollection
          .where('email', '==', email)
          .get()
          .then(snapshot => {
            if (snapshot.empty) {
              usersCollection.doc(uid).set({
                email: email,
                preliminary: false
              })
            }
            this.$router.push("/prelim")
          })
      }).catch(err => console.log(err))
    },
  },

  data() {
    return {
      background: "",
      color: ""
    }
  },

  created() {
    const colors = ["#895d53", "#99b0ae", "#d1c7bf", "#80495a", "#1f1613"]
    const rand = Math.floor(Math.random() * 5) + 1

    this.background = require("../../public/homebg" + rand + ".jpg")
    this.color = colors[rand - 1]
  },
}
</script>

<style scoped>
#home {
  height: 100vh;
}

#primer {
  height: 100vh;
  width: 35vw;
  padding: 30px;
}

.primer-text {
  filter: invert(100%);
}

#login:hover {
  cursor: pointer;
}
</style>
