// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-analytics.js";

import {
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBf1brHPDpu1ZLi2A0jm_LCSIJI5dLVJKE",
  authDomain: "mindx-project-tai.firebaseapp.com",
  projectId: "mindx-project-tai",
  storageBucket: "mindx-project-tai.appspot.com",
  messagingSenderId: "790869099522",
  appId: "1:790869099522:web:ed1687ebacfefc7af5531b",
  measurementId: "G-41VNKNTRHR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// get list of users
const users = collection(db, "users");
const querySnapshot = await getDocs(users);

querySnapshot.forEach((doc) => {
  let user = doc.data();
  document.getElementById("users").innerHTML += `
      <li>${user.name}</li>
      <li>${user.phone}</li>
  `;
});

//   var htmlTotal = ``;
//   querySnapshot.forEach((doc) => {
//     // doc.data() is never undefined for query doc snapshots
//     // console.log(doc.id, " => ", doc.data());
//     let user = doc.data();
//     let htmlStr = `
//         <li>${user.name}</li>
//         <li>${user.phone}</li>
//     `;
//     htmlTotal += htmlStr;
//   });
//   document.getElementById("users").innerHTML = htmlTotal;

// get user
const docRef = doc(db, "users", "g4ZpXgXKFX1NhYwVVoqQ");
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}