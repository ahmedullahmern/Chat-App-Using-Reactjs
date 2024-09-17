import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
    getAuth,
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCIbsjqKXVavTIuuAHqUfkxnIM9YD3c0CI",
    authDomain: "my-react-first-2c178.firebaseapp.com",
    projectId: "my-react-first-2c178",
    storageBucket: "my-react-first-2c178.appspot.com",
    messagingSenderId: "783602716489",
    appId: "1:783602716489:web:6d67fc08676f97be1b1498"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)
console.log("app", app)

export {db,auth }