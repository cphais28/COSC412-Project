import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDgegW6qF05Oqg0knp0t6s0JsswlUsQP-s",
    authDomain: "project-62c7c.firebaseapp.com",
    projectId: "project-62c7c",
    storageBucket: "project-62c7c.appspot.com",
    messagingSenderId: "276736218415",
    appId: "1:276736218415:web:dec02d765de7ecadf9bdda",
    measurementId: "G-5837MW8E9R"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);