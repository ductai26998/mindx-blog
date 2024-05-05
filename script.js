// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { collection, getFirestore } from "firebase/firestore";
const initializeApp = require('irebase/app');
const getAnalytics = require('firebase/analytics');
const collection = require('firebase/firestore');
const getFirestore = require('firebase/firestore');
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDO6QEQSaXQglWh1p5jVPljsHeNIgnA4Vs",
  authDomain: "mindx-blog-25068.firebaseapp.com",
  projectId: "mindx-blog-25068",
  storageBucket: "mindx-blog-25068.appspot.com",
  messagingSenderId: "633855715996",
  appId: "1:633855715996:web:069f5085989235889b1b59",
  measurementId: "G-1K0QWX9L1P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Init services
const db = getFirestore();

const colRef = collection(db, "users");

getDocs(colRef).then((snap) => {
  console.log(snap.docs);
});
