import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBGD82YxAc3G9LWsjRHJW1z8opv1dsaWNc",
    authDomain: "movies-galaxy-3c69b.firebaseapp.com",
    projectId: "movies-galaxy-3c69b",
    storageBucket: "movies-galaxy-3c69b.firebasestorage.app",
    messagingSenderId: "882954098600",
    appId: "1:882954098600:web:3fa2500a80028123a92f9d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;