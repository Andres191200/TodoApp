import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

import { doc, getDoc, getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyBIWbgX00SAul1iGJFWrfAteI4qOi_89MU",

  authDomain: "todo-app-57601.firebaseapp.com",

  projectId: "todo-app-57601",

  storageBucket: "todo-app-57601.appspot.com",

  messagingSenderId: "124353872771",

  appId: "1:124353872771:web:b76ad360e319dbaf5aacb6",

  measurementId: "G-7PNTKBSDBB"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

const db = getFirestore();

export {db, firebaseConfig}