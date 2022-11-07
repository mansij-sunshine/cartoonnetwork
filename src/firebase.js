import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";



const firebaseConfig = {
  apiKey: "AIzaSyCpky5wzBtj0A2mrwtYnspApEMw_8RO7VM",
  authDomain: "cartoon-network-447d3.firebaseapp.com",
  databaseURL: "https://cartoon-network-447d3-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "cartoon-network-447d3",
  storageBucket: "cartoon-network-447d3.appspot.com",
  messagingSenderId: "1089300494562",
  appId: "1:1089300494562:web:4a4b2af52d065bbead86bb",
  measurementId: "G-1QN7HHSG3R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getDatabase(app);