import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDSHjv9surrYHhisxft1AOAgAJdhODelXc",
    authDomain: "ThoughtFocus-auth.firebaseapp.com",
    projectId: "ThoughtFocus-auth",
    storageBucket: "ThoughtFocus-auth.appspot.com",
    messagingSenderId: "696663970455",
    appId: "1:696663970455:web:3ff7e0e5b8d607638f4fd2"
};

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);