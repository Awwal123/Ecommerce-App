import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBmWVT1DdmYfsnHbyTM4NZF5Rn9QI-OXfM",
  authDomain: "my-ecommerce-app-89d74.firebaseapp.com",
  projectId: "my-ecommerce-app-89d74",
  storageBucket: "my-ecommerce-app-89d74.firebasestorage.app",
  messagingSenderId: "500604663590",
  appId: "1:500604663590:web:f7b6a13f0ea8e89e5333e7",
  measurementId: "G-JCP1CPMRPG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
