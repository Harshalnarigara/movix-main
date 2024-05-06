import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBC2EsxDaCPG0yveeBIByX1en8kAf-hWic",
  authDomain: "movie-website-cef23.firebaseapp.com",
  databaseURL: "https://movie-website-cef23-default-rtdb.firebaseio.com",
  projectId: "movie-website-cef23",
  storageBucket: "movie-website-cef23.appspot.com",
  messagingSenderId: "274005098047",
  appId: "1:274005098047:web:0f2b4e503d95b35b00428a",
  measurementId: "G-4P39BXK7WN"
};

const firebaseapp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseapp);

export {auth}