// src/authService.ts
import { toast } from "react-toastify";
import { auth } from "./config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

// Function to register a new user
export const register = async (email: string, password: string) => {
  console.log("Register function called"); 
  try {
    
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("User registered:", userCredential);
    toast.success("User registerd successfully ");
    return userCredential;
  } catch (error) {
    console.error("Registration Error:", error);
    toast.error(`Registration failed: ${(error as Error).message}`);
    throw error;
  }
};
// Function to log in a user
export const login = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    toast.success("User logged in successfully!");
    return userCredential;
  } catch (error) {
    console.error("Login Error:", error);
    
    toast.error(`Login failed: ${(error as Error).message}`);
    throw error;
  }
};
// Function to log out a user
export const logout = async () => {
  try {
    await signOut(auth);
    toast.success('User logged out successfully!');
  } catch (error) {
    console.error("Logout Error:", error);
    toast.error(`Logout failed: ${(error as Error).message}`);
    throw error;
  }
};
