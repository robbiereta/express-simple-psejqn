const express = require('express');
const app = express();
const port = 3010;
const path = require('path');

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve('pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
import { initializeApp } from 'firebase/app';
import { getFirestore, getDoc, updateDoc } from 'firebase/firestore/lite';
// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyDfK50urD2gZuqgVCO4s662se4edn-7Vx8",
  authDomain: "proyecto-c6f98.firebaseapp.com",
  projectId: "proyecto-c6f98",
  storageBucket: "proyecto-c6f98.appspot.com",
  messagingSenderId: "8489633667",
  appId: "1:8489633667:web:4d57d0201c4daad5b318b6",
  measurementId: "G-JWGXNE88TH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
