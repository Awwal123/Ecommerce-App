import React, { useState } from "react";
import { Header } from "./Header";
import Navbar from "./Navbar";

import { Footer } from "./Footer";
import { auth, googleProvider } from "./config/firebase";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  User,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import "./styles.css";

export function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [showError, setShowError] = useState<boolean>(false);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);

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

  // Handle login with email and password
  const handleLogin = async () => {
    if (!email || !password) {
      displayError("Please enter both email and password.");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user; // Get the authenticated user

      console.log("Logged in user:", user);
      saveToLocalStorage(user); // Save user data to local storage

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

  // Handle Google login
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      console.log("User signed in with Google:", user);
      saveToLocalStorage(user);

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
                  <p className="forget-pass">Forget Password?</p>
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
