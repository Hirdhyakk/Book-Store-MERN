// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "",
	authDomain: "mern-book-inventory-f4ab3.firebaseapp.com",
	projectId: "mern-book-inventory-f4ab3",
	storageBucket: "mern-book-inventory-f4ab3.appspot.com",
	messagingSenderId: "",
	appId: "",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
