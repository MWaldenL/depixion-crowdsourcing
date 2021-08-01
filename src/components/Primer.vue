<template>
<div class="row gx-0">
  <img :src="background" id="bg-image" class="col-xl-8 px-0">

  <div id="primer" class="ml-auto col-xl p-5" :style="{ backgroundColor: backgroundColor }">
    <h2 :style="{ color: color }"><b>DepiXion</b></h2>
    <h4 :style="{ color: color }">Generating Abstract Art Based on a User-Specified Emotion Spectrum</h4>
    <br>

    <p :style="{ color: color }">
      Hello! <br><br>

      We are Keith Gabriel Badulis, Matthew Walden Lua, and Byron Ethelbert Nill, ID 118 Students from the 
      College of Computer Studies taking up BS Computer Science with specializations in Software Technology. 
      We are currently working on our thesis project entitled "Generating Abstract Art Based on a User-Specified 
      Emotion Spectrum". Our goal is to build a software that can create abstract paintings through emotions, 
      and we need your help! <br><br>

      In answering the survey in this website, you will be shown 10 abstract paintings, and you will tell us 
      the emotions that you feel from them. You will be allowed to answer the survey again if you wish to do so. <br><br>
      
      For every image that you label, you will earn 10 points. 100 points will give you one raffle ticket for a 
      chance to win Php 250.00 or Php 500.00 through GCash! <br><br>

      For any concerns or questions regarding this website or our project, in general, you may reach us through 
      our email addresses and contact numbers below: <br><br>

      <b>Keith Gabriel Badulis</b><br>
      keith_gabriel_badulis@dlsu.edu.ph<br>
      09453455191<br><br>

      <b>Matthew Walden Lua</b><br>
      matthew_walden_lua@dlsu.edu.ph<br>
      09175832136<br><br>

      <b>Byron Ethelbert Nill</b><br>
      byron_ethelbert_nill@dlsu.edu.ph<br>
      09399363044<br><br>

      Thank you very much for your interest in our study! Please click the link below to login with your Google Account 
      and proceed with the survey.
    </p>

    <img src="@/../public/login.png" @click="login" id="login" class="d-block mx-auto mt-5 w-50">
  </div>
</div>
</template>

<script>
export default {
  name: "Primer",

  data() {
    return {
      background: "",
      backgroundColor: "",
      color: ""
    }
  },

  created() {
    let rand = Math.floor(Math.random() * 5) + 1
    this.background = require("../../public/homebg" + rand + ".jpg")

    rand = Math.floor(Math.random() * 2)
    this.backgroundColor = rand === 0 ? "#e6e6e6" : "#333333"
    this.color = rand === 0 ? "#333333" : "#e6e6e6"
  },

  methods: {
    login() {
      this.$emit("login")
    }
  }
    
}
</script>

<style scoped>
#login:hover {
  cursor: pointer;
}
</style>