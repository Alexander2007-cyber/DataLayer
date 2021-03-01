import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB1yhddur32bgREyT648l75oaGfPUfYajw",
  authDomain: "discord-clone-yt-15411.firebaseapp.com",
  projectId: "discord-clone-yt-15411",
  storageBucket: "discord-clone-yt-15411.appspot.com",
  messagingSenderId: "80872116093",
  appId: "1:80872116093:web:c34a624afdfe1bbab70614",
  measurementId: "G-2M5178TCKD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;