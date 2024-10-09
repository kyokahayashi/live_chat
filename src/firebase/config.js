import firebase from 'firebase';
import 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyBmdh-tmeJhsDmPOb10gwn3W3ZZhckQl1Y",
  authDomain: "udemy-vue-firebase-12e5e.firebaseapp.com",
  projectId: "udemy-vue-firebase-12e5e",
  storageBucket: "udemy-vue-firebase-12e5e.appspot.com",
  messagingSenderId: "373801986776",
  appId: "1:373801986776:web:8a5955b82852d84fbf45ad"
};

// init firebase
firebase.initializeApp(firebaseConfig)
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp
export { projectFirestore, timestamp }
