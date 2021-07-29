<template>
  <div id="images">
    <div v-for="imgUrl in imageList" :key="imgUrl">
      <img :src="imgUrl" />
    </div>
  </div>
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
    }
  },
  methods: {
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
