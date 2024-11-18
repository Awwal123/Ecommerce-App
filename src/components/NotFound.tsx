import React from "react";
import { Header } from "./Header";
import { ExclusiveNavbar } from "./ExclusiveNavbar";
import { Footer } from "./Footer";
import { Link } from "react-router-dom";
import "./styles.css";

export function NotFound() {
  return (
    <>
      <Header />
      <ExclusiveNavbar />
      <div className="not-found-wrapper">
        <div className="four-error-container">
          <p className="home-error">Home</p>
          <p className="home-slash">/</p>
          <p> 404 Error</p>
        </div>
        <div className="four-zero-four-container">
          <h1 className="four-zero-message">404 Not Found</h1>
          <p className="four-zero-message-explanation">
            Your visited page not found. You may go home page.
          </p>

          <div className="four-zero-four-btn">
            <Link to={"/exclusive"} className="back-to-home">Back to home page</Link>
            </div>
        </div>
      </div>
      <Footer  />
    </>
  );
}