import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC33HF0D6Cp6VamA_VSDzSzLXLQkg8emB8",
  authDomain: "auth-59373.firebaseapp.com",
  projectId: "auth-59373",
  storageBucket: "auth-59373.appspot.com",
  messagingSenderId: "650279718773",
  appId: "1:650279718773:web:93ae747910fa9c00f14d3c"
};

initializeApp(firebaseConfig);

import './assets/main.css'

const app = createApp(App);

app.use(router);

app.mount('#app');
