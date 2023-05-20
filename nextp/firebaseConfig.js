// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Import the functions you need from the SDKs you need
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKRFkzxYauR3JNQ2lkHXwJi0-gT0ga-Xo",
  authDomain: "nextproject-f1369.firebaseapp.com",
  projectId: "nextproject-f1369",
  storageBucket: "nextproject-f1369.appspot.com",
  messagingSenderId: "205936347945",
  appId: "1:205936347945:web:069aa8a84ae47a68800538",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Firebase storage reference
const storage = getStorage(app);
export default storage;
