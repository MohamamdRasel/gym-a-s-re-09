// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxABMQpJ8UHPfdD3yRES-yRwdvrIGZCEY",
  authDomain: "gym-and-yoga-training.firebaseapp.com",
  projectId: "gym-and-yoga-training",
  storageBucket: "gym-and-yoga-training.appspot.com",
  messagingSenderId: "326537022811",
  appId: "1:326537022811:web:7583132377fa37efe19e7e",
  measurementId: "G-06C3N53LMB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;