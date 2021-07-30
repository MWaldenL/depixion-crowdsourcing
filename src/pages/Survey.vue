<template>
  <div class="px-4 pt-4">
    <div v-if="completed">Thank you</div>
    <div v-else class="col-lg-10 mx-auto">
      <form @submit="onSubmit">
        <b-card class="p-2">
          <b-container> 
            <div class="mb-4 d-flex justify-content-between align-items-center">
              <h3 class="fw-bold">How does this painting make you feel?</h3>
              <span>You have {{points}} points</span>
            </div>
            <b-row>
              <b-col class="mb-4" lg="6" sm="12">
                <b-img 
                  v-show="isLoaded"
                  @load="onLoaded"
                  class="form-img" 
                  :src="imgSrc" 
                  fluid-grow 
                  alt="Abstract Painting" />
                <div class="loading-wrapper" v-show="!isLoaded"> 
                  <font-awesome-icon  :icon="['fas','spinner']" />
                </div>
              </b-col>
              <b-col class="my-auto">
                <b-container :key="lbl.emotion" v-for="lbl in emotionLabels">
                  <b-row>
                    <b-col cols="3">
                      <label>{{ lbl.emotion }}</label>
                    </b-col>
                    <b-col cols="8">
                      <b-form-rating
                        v-model="lbl.value"
                        icon-empty="circle"
                        icon-full="circle-fill"
                        color="green"
                        no-border
                        show-clear/>
                    </b-col>
                    <b-col cols="1">
                      {{lbl.value ? lbl.value : 0}}
                    </b-col>
                  </b-row>
                </b-container>
                <b-container class="d-flex justify-content-center my-3">
                  <b-button 
                    type="submit"
                    class="button-submit"
                    :class="isDisabled"
                    @click="nextPage">Next</b-button>
                </b-container>
              </b-col>
            </b-row>
          </b-container>
          
          <div class="container d-flex justify-content-between align-items-end">
            <div class="col mr-4">
              <b-progress :value="page" :max="10" show-value class="mr-3"></b-progress>
            </div>
          </div>
        </b-card>
      </form>
    </div>
  </div>
</template>
<script>
import firebase from "firebase/app"
import "firebase/storage";
import { auth, usersCollection, paintingsCollection } from '@/firebase'
export default {
  created() {
    auth.onAuthStateChanged(user => {
      this.user = user.uid
      this.markAnnotatedImages()
    })
    this.storageRef = firebase.storage().ref();
    this.fetchImages();
  },
  data() {
    return {
      user: null,
      loaded: false,
      storageRef: null,
      annotated: Array(2000).fill(false),
      imageList: [],
      emotionLabels: [
        {emotion: "Joy", value: null},
        {emotion: "Trust", value: null},
        {emotion: "Fear", value: null},
        {emotion: "Surprise", value: null},
        {emotion: "Sadness", value: null},
        {emotion: "Disgust", value: null},
        {emotion: "Anger", value: null},
        {emotion: "Anticipation", value: null},
      ],
      points: 10, // temp
      page: 1,
    }
  },
  computed: {
    completed() {
      return this.page == 10
    },
    imgSrc() {
      return this.imageList[this.page-1] ? this.imageList[this.page-1].url : ''
    },
    isLoaded() {
      return this.imageList[this.page-1] && this.loaded
    },
    isDisabled() {
      return {
        disabled: !this.loaded  
      }
    },
  },
  methods: {
    onSubmit(e) {
      e.preventDefault()
    },
    onLoaded() {
      this.loaded = true
    },
    async markAnnotatedImages() {
      const userDoc = await usersCollection.doc(this.user).get()
      const annotated = userDoc.data().paintingsAnnotated;  
      for (let img of annotated) {
        const index = this.annotated.indexOf(img)
        if (index >= 0) {
          this.annotated[index] = true;
        }
      }
    },
    async fetchImages() {
      const list = await this.storageRef.child('images').listAll()
      for (let i=0; i < 10; i++) {
        let rand;
        do {
          rand = Math.floor(Math.random()*list.items.length)
        } while (this.annotated[rand])
        this.annotated[rand] = true
        const imgPath = list.items[rand].fullPath
        const img = imgPath.split('/')[1]
        const url = await this.storageRef.child(imgPath).getDownloadURL()
        this.imageList.push({url, img})
      }
    },
    async nextPage() {
      // Save image to firebase
      const currentImage = this.imageList[this.page-1].img
      this.writeImageToDb(currentImage)
      this.writeImageToUser(currentImage)
      // Next page
      if (this.loaded) {
        this.page++
      }
      this.loaded = false
    },
    async writeImageToDb(img) {
      const docRef = paintingsCollection.doc(img)
      const doc = await docRef.get()
      if (doc.exists) {
        const { joy, trust, fear, surprise, sadness, disgust, anger, anticipation } = doc.data()
        await docRef.update({
          joy: joy + this.emotionLabels[0].value,
          trust: trust + this.emotionLabels[1].value,
          fear: fear + this.emotionLabels[2].value,
          surprise: surprise + this.emotionLabels[3].value,
          sadness: sadness + this.emotionLabels[4].value,
          disgust: disgust + this.emotionLabels[5].value,
          anger: anger + this.emotionLabels[6].value,
          anticipation: anticipation + this.emotionLabels[7].value
        })
      } else {
        await docRef.set({
          joy: 0,
          trust: 0,
          fear: 0,
          surprise: 0,
          sadness: 0,
          disgust: 0,
          anger: 0,
          anticipation: 0
        })
      }
    },
    async writeImageToUser(img) {
      const userRef = usersCollection.doc(this.user)
      await userRef.update({
        paintingsAnnotated: firebase.firestore.FieldValue.arrayUnion(img)
      })
    }
  }
}
</script>

<style scoped>
.form-img {
  border-radius: 8px;
  object-fit: contain;
  height: 60vh;
}

.loading-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
}

.button-submit {
  width: 60%;
}

@keyframes spinner {
  to { transform: rotate(360deg); }
}
.fa-spinner {
  animation: spinner 1s linear infinite;
}
</style>