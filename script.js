
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
  import { getDatabase } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDpjTkdfrxVFYOiE_D3wwBS1v46DtlQxVA",
    authDomain: "my-project-simple-form.firebaseapp.com",
    projectId: "my-project-simple-form",
    storageBucket: "my-project-simple-form.appspot.com",
    messagingSenderId: "1094487536492",
    appId: "1:1094487536492:web:5e74ebdf027c1ab7d8f949",
    measurementId: "G-W524X0VZTM"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
const db = getDatabase(app)
console.log(db);
