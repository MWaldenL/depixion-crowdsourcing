<template>
  <div class="px-4 pt-4">
    <div class="col-lg-10 mx-auto">
      <form @submit="onSubmit">
        <b-card class="p-2">
          <b-container>
            <div class="mb-4 d-flex justify-content-between align-items-center">
              <h3 class="fw-bold">How would you feel?</h3>
              <span>You have {{points}} points</span>
            </div>
            <b-row>
              <b-col class="mb-4" lg="6" sm="12">
                <b-img class="form-img" src="https://picsum.photos/600/400/?image=92" fluid-grow alt="Abstract Painting"/>
              </b-col>
              <b-col class="my-auto pb-4">
                <b-container :key="lbl.emotion" v-for="lbl in emotionLabels">
                  <b-row>
                    <b-col cols="3">
                      <label>{{lbl.emotion}}</label>
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
              </b-col>
            </b-row>
          </b-container>
          <div class="container d-flex justify-content-between align-items-end">
            <span>{{page}}/10</span>
            <b-button type="submit" class="ml-auto">Next</b-button>
          </div>
        </b-card>
      </form>
    </div>
  </div>

  <!-- <div id="images">
    <div v-for="imgUrl in imageList" :key="imgUrl">
      <img :src="imgUrl" />
    </div>
  </div> -->
</template>
<script>
import firebase from "firebase/app"
import "firebase/storage";
export default {
  created() {
    this.storageRef = firebase.storage().ref();
    this.randomize();
  },
  data() {
    return {
      storageRef: null,
      imageList: [],
      imgUrl: '',
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
      points: 10, // idk pa
      page: 2, // kailangan ba to? hahahaha
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault()

      console.log(this.emotionLabels)
    },
    async randomize() {
      const listRef = this.storageRef.child("images")
      const list = await listRef.listAll()
      const visited = []
      for (let i=0; i<2000; i++) {
        visited[i] = false
      }
      for (let i=0; i < 10; i++) {
        let rand;
        do {
          rand = Math.floor(Math.random()*list.items.length)
        } while (visited[rand])
        visited[rand] = true
        const img = list.items[rand].fullPath
        const url = await this.storageRef.child(img).getDownloadURL()
        this.imageList.push(url);
      }
    }
  }
}
</script>

<style scoped>
.form-img {
  border-radius: 8px;
}
</style>
