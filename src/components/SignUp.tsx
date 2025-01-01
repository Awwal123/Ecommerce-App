import React from "react";
import { Header } from "./Header";
import {Navbar} from "./Navbar";
import { HeroSection } from "./HeroSection";
import { Footer } from "./Footer";
import "./styles.css";

export const SignUp: React.FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  );
};
