<template>
  <div class="px-md-4 pt-4 main-div">
    <div v-if="completed" class="col-lg-10 mx-auto">
      <b-card class="form-card p-4 text-center">
        <h3 class="display-5 fw-bold mb-4">Thank you!</h3>
        <p class="col-lg-8 mx-auto">
          We truly appreciate your contribution to our study. If you have any questions,
          feel free to reach out to us. Our contact details are available on the <i>About the Study</i>
          page. If you want to contribute more and earn more points, you can click the button below 
          and label a new set of paintings.
        </p>
        <p>
          You now have <b>{{points}}</b> points.
        </p>
        <b-button 
          class="mt-2"
          @click="surveyAgain"
          variant="success">
          Answer the form again
        </b-button>
      </b-card>
    </div>
    <div v-else-if="!tutored" class="col-lg-10 mx-auto">
      <b-card class="p-2 d-flex flex-column align-items-center text-center">
        <h3 class="fw-bold mb-4">Emotion Labeling Reminders</h3>
        <b-img class="tut-img mb-4" fluid :src="tutImg"/>
        <p class="col-lg-6 mx-auto">
          Ten different images of abstract paintings will be displayed. 
          For each image, you will be tasked to label them based on the emotions you feel.
          You can select one of the three levels of intensity for each emotion.
          You can also select multiple emotions in a single painting.
          You can remove the emotion label by clicking X.
        </p>
        <p class="col-lg-6 mx-auto">
          <b>Note:</b> You cannot go back to the previous image when proceeding to the next.
        </p>
        <b-button 
          class="mt-2"
          @click="tutored = true"
          variant="success">
          Begin answering
        </b-button>
      </b-card>
    </div>
    <div v-else class="col-lg-10 mx-auto">
      <b-card class="p-lg-2">
        <b-container> 
          <div class="mb-4 d-flex justify-content-between align-items-center flex-wrap">
            <h3 class="fw-bold">How does this painting make you feel?</h3>
            <span v-if="points">You currently have {{points}} points</span>
            <span v-else class="text-muted">Getting your points...</span>
          </div>
          <b-row>
            <b-col class="mb-4 d-flex justify-content-center" lg="6" sm="12">
              <div v-show="isLoaded">
                <b-img 
                  @load="onLoaded"
                  class="form-img mx-auto" 
                  :src="imgSrc" 
                  fluid-grow
                  alt="Abstract Painting" />
                <p>Source: WikiArt</p>
              </div>
              <div class="loading-wrapper mx-auto flex-column" v-show="!isLoaded"> 
                <font-awesome-icon class="mb-2" :icon="['fas','spinner']" />
                <span class="text-muted">Loading image...</span>
              </div>
            </b-col>
            <b-col class="my-auto">
              <b-container :key="lbl.emotion" v-for="lbl in emotionLabels">
                <div class="row mb-2 label-row align-items-center">
                  <div class="col-md-3 col-6">
                    <label>{{ lbl.emotion }}</label>
                  </div>
                  <div class="col-md-1 col-6 order-md-last d-flex justify-content-end">
                    {{lbl.value ? lbl.value : 0}}
                  </div>
                  <div class="col-md-8 order-md-1">
                    <b-form-rating  
                      stars="3"
                      v-model="lbl.value"
                      icon-empty="circle"
                      icon-full="circle-fill"
                      color="green"
                      no-border
                      show-clear/>
                  </div>
                </div>
              </b-container>
              <b-container class="d-flex flex-column align-items-center my-4">
                <b-button 
                  class="button-submit"
                  :class="isDisabled"
                  @click="nextPage"
                  variant="success">
                  <span v-if="this.page < 10">
                    Next
                  </span>
                  <span v-else>
                    Finish
                  </span>
                </b-button>
              </b-container>
              <p class="text-center" :class="textColor">Please select at least one emotion label</p>
            </b-col>
          </b-row>
        </b-container>
        <div class="container d-flex justify-content-between align-items-end">
          <div class="col mr-4">
            <b-progress :value="page" :max="10" show-value class="mr-3" variant="success"></b-progress>
          </div>
        </div>
      </b-card>
    </div>
  </div>
</template>
<script>
import firebase from "firebase/app"
import "firebase/storage";
import { auth, usersCollection, paintingsCollection, responsesCollection } from '@/firebase'
export default {
  created() {
    document.title = "DepiXion | Survey"
    this.storageRef = firebase.storage().ref()
    this.tutImg = require("../../public/sample.png")
  },
  mounted() {
    auth.onAuthStateChanged(async user => {
      this.user = user.uid
      await this.fetchImages()
      this.fetchFormInfo()
      usersCollection
        .doc(this.user)
        .get()
        .then(user => {
          if (!user.empty) 
            if (!user.data().preliminary)
              this.$router.push('/prelim')
        })
    })
  }, 
  data() {
    return {
      user: null,
      loaded: false,
      storageRef: null,
      userAnnotated: [],
      imageList: [],
      emotionLabels: [
        {emotion: "Joy", value: 0},
        {emotion: "Trust", value: 0},
        {emotion: "Fear", value: 0},
        {emotion: "Surprise", value: 0},
        {emotion: "Sadness", value: 0},
        {emotion: "Disgust", value: 0},
        {emotion: "Anger", value: 0},
        {emotion: "Anticipation", value: 0},
      ],
      points: null,
      page: null,
      tutored: false,
      tutImg: "",
      textColor: "text-white"
    }
  },
  computed: {
    completed() {
      return this.page == 11
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
    async surveyAgain() {
      // add annotated images to vue
      const userDoc = await usersCollection.doc(this.user).get()
      this.userAnnotated = await userDoc.data().paintingsAnnotated
      await this.fetchImages()
      this.$router.push('/prelim')
      this.page = 1
    },
    async fetchImages() {
      // Mark annotated images 
      const userDoc = await usersCollection.doc(this.user).get()
      const data = userDoc.data()
      this.userAnnotated = data.paintingsAnnotated
      // Fetch images
      this.imageList = []
      const list = await this.storageRef.child('images').listAll()
      for (let i=0; i < 10; i++) {
        let rand, img, url, imgPath
        do { // keep fetching while the selected image has been annotated
          rand = Math.floor(Math.random()*list.items.length) // random index
          imgPath = list.items[rand].fullPath
          img = imgPath.split('/')[1]
          url = await this.storageRef.child(imgPath).getDownloadURL()
        } while (this.userAnnotated.includes(img)) 
        this.imageList.push({url, img})
      }
    },
    async fetchFormInfo() {
      const userRef = usersCollection.doc(this.user)
      // display current points
      await userRef.get().then(user => this.points = user.data().points)
      // get last saved page
      this.page = this.points / 10 % 10 + 1
    },
    async nextPage() {
      // Save image to firebase
      const answered = this.emotionLabels.some(label => label.value > 0)
      if (answered) {
        const currentImage = this.imageList[this.page-1].img
        await this.writeImageToDb(currentImage)
        await this.saveResponse(currentImage) // note: await required
        await this.writeImageToUser(currentImage)

        // Next page
        if (this.loaded) {
          this.page++
        }
        this.loaded = false
        this.textColor = "text-white"

        // Reset ratings form
        this.emotionLabels.map(_ => _.value = 0)

        // Scroll to top
        window.scrollTo(0,0);
      } else {
        this.textColor = "text-danger"
      }
    },
    async saveResponse(img) {
      const user = await usersCollection.doc(this.user).get()
      const email = user.data().email
      const data = {
        user: email,
        painting: img,
        labels: this.emotionLabels
      }
      await responsesCollection.doc().set(data)
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
          joy: this.emotionLabels[0].value,
          trust: this.emotionLabels[1].value,
          fear: this.emotionLabels[2].value,
          surprise: this.emotionLabels[3].value,
          sadness: this.emotionLabels[4].value,
          disgust: this.emotionLabels[5].value,
          anger: this.emotionLabels[6].value,
          anticipation: this.emotionLabels[7].value
        })
      }
    },
    async writeImageToUser(img) {
      const userRef = usersCollection.doc(this.user)
      const userPts = (await userRef.get()).data().points
      await userRef.update({
        paintingsAnnotated: firebase.firestore.FieldValue.arrayUnion(img),
        points: userPts + 10
      })
      this.points = userPts + 10
    }
  }
}
</script>

<style scoped>

.label-row {
  padding: 0.5rem;
  border-style: solid;
  border-width: 1px;
  border-color: #d9d9d9;
  border-radius: 8px;
}

.form-img {
  border-radius: 8px;
  /* object-fit: contain; */
  max-height: 70vh;
  object-fit: contain; 
}

.tut-img {
  max-height: 50vh;
}

.loading-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
}

.button-submit {
  width: 50%;
}

@keyframes spinner {
  to { transform: rotate(360deg); }
}
.fa-spinner {
  animation: spinner 1s linear infinite;
}
</style>