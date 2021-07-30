import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

firebase.initializeApp({
  apiKey: "AIzaSyCVukmRyawQSF2v8PVXB4L-hAaBuf4Ka5A",
  authDomain: "depixion-crowd.firebaseapp.com",
  projectId: "depixion-crowd",
  storageBucket: "depixion-crowd.appspot.com",
  messagingSenderId: "810480073996",
  appId: "1:810480073996:web:f88c3a83c905f535b35d29"
})

const db = firebase.firestore()
const auth = firebase.auth()
const usersCollection = db.collection('users')
const paintingsCollection = db.collection('paintings')

export { 
  db, 
  auth, 
  usersCollection,
  paintingsCollection
} 