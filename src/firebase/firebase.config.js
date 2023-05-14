// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFA-cNIM1IodrUmzoebH5nopIul8jsYMg",
  authDomain: "the-news-dragon-5cff6.firebaseapp.com",
  projectId: "the-news-dragon-5cff6",
  storageBucket: "the-news-dragon-5cff6.appspot.com",
  messagingSenderId: "445232970532",
  appId: "1:445232970532:web:eb90199c76aece73a351b1",
  measurementId: "G-YWDGH0CBH6"


};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);




export default app;