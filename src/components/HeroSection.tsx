import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles.css";
import { auth, googleProvider } from "./config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  UserCredential,
} from "firebase/auth";

export const HeroSection: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [showError, setShowError] = useState<boolean>(false);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const navigate = useNavigate();

  const displayError = (message: string) => {
    setError(message);
    setShowError(true);
    setTimeout(() => setShowError(false), 5000);
  };

  const displaySuccess = (message: string) => {
    setSuccess(message);
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      navigate("/exclusive");
    }, 2000);
  };

  const saveToLocalStorage = (name: string, email: string, uid: string) => {
    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userUID", uid);
  };

  const signIn = async () => {
    if (!name || !email || !password) {
      displayError("Please fill in all the fields.");
      return;
    }

    try {
      const userCredential: UserCredential =
        await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      console.log("User created:", user.email, "UID:", user.uid);

      // Save to local storage
      saveToLocalStorage(name, email, user.uid);

      displaySuccess(
        "Account created successfully, you will be redirected to our app."
      );
    } catch (err: any) {
      displayError(err.message);
      console.error(err);
    }
  };

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      console.log("Signed in with Google:", user.email, "UID:", user.uid);

      // Save Google user data to local storage
      saveToLocalStorage(
        user.displayName || "Google User",
        user.email || "",
        user.uid
      );

      displaySuccess(
        "Signed in successfully, you will be redirected to our app."
      );
    } catch (err: any) {
      displayError(err.message);
      console.error(err);
    }
  };
  return (
    <div className="hero-section-wrapper">
      <div className="hero-section-container">
        {/* Success message container */}
        <div className={`success-container ${showSuccess ? "show" : ""}`}>
          <p className="success-message">{success}</p>
        </div>

        {/* Error message container */}
        <div className={`error-container ${showError ? "show" : ""}`}>
          <p className="error-message">{error}</p>
        </div>

        <div className="hero-section-content">
          <img
            className="hero-section-img"
            src="/images/HeroSection.png"
            alt="Hero Section"
          />
          <div className="sign-up-form-container">
            <h2 className="form-heading">Create an account</h2>
            <p>Enter your details below</p>
            <div className="sign-up-inputs">
              <input
                className="sign-up-input"
                type="text"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="sign-up-input"
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="sign-up-input"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />

              <button className="create-btn" type="submit" onClick={signIn}>
                Create Account
              </button>

              <div className="google-btn-container">
                <button
                  className="sign-up-with-google-btn"
                  type="button"
                  onClick={signInWithGoogle}
                >
                  Sign up with Google
                </button>
                <img
                  className="google-img"
                  src="/images/Google-icon.png"
                  alt="google-img"
                />

                <p className="already">
                  Already have an account?
                  <Link to="/login" className="login">
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
