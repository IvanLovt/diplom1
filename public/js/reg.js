
// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATAS3UI9DvU5XIXLX1xIFX0iM3kAYr3bc",
  authDomain: "diplom-80aa1.firebaseapp.com",
  projectId: "diplom-80aa1",
  storageBucket: "diplom-80aa1.appspot.com",
  messagingSenderId: "41300454919",
  appId: "1:41300454919:web:65f0fea358a2149acd04a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

const submit = document.getElementByI('registerbut');
submit.addEventListener("click", function (event){
  event.preventDefault()

  // инпуты
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  

  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("Ваш аккаукнт создан!!!")
    window.location.href = "product.html"
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("Недоступыне символы!!!")
    // ..
  });
})
