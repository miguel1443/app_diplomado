// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWN8jSpzwWN_PPEdN9XqEcAWhoPR4NMus",
  authDomain: "crud-diplomado-19ccd.firebaseapp.com",
  projectId: "crud-diplomado-19ccd",
  storageBucket: "crud-diplomado-19ccd.appspot.com",
  messagingSenderId: "994620987749",
  appId: "1:994620987749:web:c525779276d4782094298c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db}