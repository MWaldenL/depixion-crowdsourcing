import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

// original
// firebase.initializeApp({
// 	apiKey: "AIzaSyCVukmRyawQSF2v8PVXB4L-hAaBuf4Ka5A",
// 	authDomain: "depixion-crowd.firebaseapp.com",
// 	projectId: "depixion-crowd",
// 	storageBucket: "depixion-crowd.appspot.com",
// 	messagingSenderId: "810480073996",
// 	appId: "1:810480073996:web:f88c3a83c905f535b35d29"
// })

// sandbox
firebase.initializeApp({
	apiKey: "AIzaSyCahkhwtPG2Nm-SDN_PFvLdgYZ-GpaXniA",
	authDomain: "depixion-sandbox.firebaseapp.com",
	projectId: "depixion-sandbox",
	storageBucket: "depixion-sandbox.appspot.com",
	messagingSenderId: "897483161343",
	appId: "1:897483161343:web:49675c934c135de0d456ca"
})
  

firebase.getCurrentUser = () => {
	return new Promise((resolve, reject) => {
		const unsubscribe = firebase.auth().onAuthStateChanged(user => {
			unsubscribe();
			resolve(user);
		}, reject);
	})
};

const db = firebase.firestore()
const auth = firebase.auth()
const usersCollection = db.collection('users')
const paintingsCollection = db.collection('paintings')
const responsesCollection = db.collection('responses')
const evaluationsCollection = db.collection('evaluations')

export {
	db,
	auth,
	usersCollection,
	paintingsCollection,
	responsesCollection,
	evaluationsCollection
} 