import React, { useState } from "react";
import { Header } from "./Header";
import { Navbar} from "./Navbar";
import { Footer } from "./Footer";
import { auth, googleProvider } from "./config/firebase";
import { db } from "./config/firebase"; // Firestore configuration
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  User,
  sendPasswordResetEmail,
} from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import { useCart } from "./CartContext"; 
import "./styles.css";
import { toast } from "react-toastify";

export function Login() {

  interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    imgUrl: string;
  }
  
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [showError, setShowError] = useState<boolean>(false);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  const { setCartItems } = useCart(); // Update cart state
  const navigate = useNavigate();

  // Display error messages
  const displayError = (message: string) => {
    setError(message);
    setShowError(true);
    setTimeout(() => setShowError(false), 5000);
  };

  // Display success messages and redirect after a delay
  const displaySuccess = (message: string) => {
    setSuccess(message);
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      navigate("/exclusive");
    }, 2000);
  };

  // Save user data to local storage
  const saveToLocalStorage = (user: User) => {
    localStorage.setItem("userUID", user.uid);
    localStorage.setItem("userEmail", user.email || "");
    localStorage.setItem("userName", user.displayName || "User");
  };

 // Fetch cart items from Firestore
const fetchUserCartFromFirestore = async (userUID: string) => {
  try {
    const cartCollection = collection(db, "carts"); // Firestore "carts" collection
    const userCartQuery = query(cartCollection, where("userId", "==", userUID));
    const querySnapshot = await getDocs(userCartQuery);

    // Transform DocumentData to match CartItem interface
    const cartItems: CartItem[] = querySnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: data.id,
        name: data.name,
        price: data.price,
        quantity: data.quantity,
        imgUrl: data.imgUrl,
      } as CartItem; // Explicitly cast to CartItem
    });

    setCartItems(cartItems); // Update cart context
  } catch (err) {
    console.error("Error fetching cart from Firestore:", err);
    toast.error("Failed to fetch cart data. Please try again later.");
  }
};
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email); 
};


// //Password Reset 
// const handlePasswordReset = async () => {
//   if (!validateEmail(email)) {
//     displayError("Enter a valid email to reset your password.");
//     return;
//   }
//   try {
//     await sendPasswordResetEmail(auth, email);
//     displaySuccess("Password reset email sent.");
//   } catch (err) {
//     displayError("Failed to send password reset email.");
//   }
// };

  // Fetch user data from Firestore
  const fetchUserDataFromFirestore = async (userUID: string) => {
    try {
      const userDocRef = collection(db, "users"); // Firestore "users" collection
      const userQuery = query(userDocRef, where("uid", "==", userUID));
      const querySnapshot = await getDocs(userQuery);

      const userData = querySnapshot.docs.map((doc) => doc.data())[0]; // Extract user data
      if (userData) {
        console.log("User data fetched:", userData);
        return userData;
      } else {
        throw new Error("User data not found.");
      }
    } catch (err) {
      console.error("Error fetching user data:", err);
      displayError("Failed to fetch user data. Please try again later.");
    }
  };

  // Handle login with email and password
  const handleLogin = async () => {
    if (!email || !password) {
      displayError("Please enter both email and password.");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      console.log("Logged in user:", user);
      saveToLocalStorage(user); // Save user data to local storage
      await fetchUserCartFromFirestore(user.uid); // Fetch user's cart from Firestore
      await fetchUserDataFromFirestore(user.uid); // Fetch user data from Firestore

      displaySuccess("Login successful! Redirecting to exclusive area...");
      navigate("/exclusive");
    }  catch (err) {
      if (err instanceof FirebaseError) {
        switch (err.code) {
          case "auth/user-not-found":
            displayError("No account found with this email.");
            break;
          case "auth/wrong-password":
            displayError("Incorrect password.");
            break;
          default:
            displayError("An error occurred. Please try again.");
        }
      } else {
        displayError("An unexpected error occurred.");
      }
    }
  };

  // Handle Google login
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      console.log("User signed in with Google:", user);
      saveToLocalStorage(user);
      await fetchUserCartFromFirestore(user.uid); // Fetch user's cart from Firestore
      await fetchUserDataFromFirestore(user.uid); // Fetch user data from Firestore

      displaySuccess("Login successful! Redirecting to exclusive area...");
    } catch (err) {
      if (err instanceof FirebaseError) {
        displayError(err.message);
      } else {
        displayError("An unexpected error occurred. Please try again.");
      }
      console.error(err);
    }
  };

  return (
    <div className="wrapper">
      <Header />
      <Navbar />
      <div className="hero-section-wrapper">
        <div className="hero-section-container">
          <div className="hero-section-content">
            <img
              className="hero-section-img"
              src="/images/HeroSection.png"
              alt="Hero Section"
            />

            <div className={`success-container ${showSuccess ? "show" : ""}`}>
              <p className="success-message">{success}</p>
            </div>

            <div className={`error-container ${showError ? "show" : ""}`}>
              <p className="error-message">{error}</p>
            </div>

            <div className="sign-up-form-container">
              <h2 className="form-heading">Login to Exclusive</h2>
              <p>Enter your details below</p>

              <div className="sign-up-inputs">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="sign-up-input"
                  type="text"
                  placeholder="Email or Phone Number"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="sign-up-input"
                  type="password"
                  placeholder="Password"
                />
                <div className="login-btn-container">
                  <button
                    onClick={handleLogin}
                    className="login-btn"
                    type="submit"
                  >
                    Login
                  </button>
                  <p className="forget-pass" >Forget Password?</p>
                </div>
              </div>

              <div className="google-login-container">
                <button
                  onClick={handleGoogleLogin}
                  className="sign-up-with-google-btn"
                  type="button"
                >
                  Sign in with Google
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

