"use client";

import {
  registerUser,
  loginUser,
  logoutUser,
} from "./api/modules/authentication";

export default function Home() {
  interface UserRegistrationData {
    username: string;
    password: string;
    email: string;
    full_name: string;
  }

  interface UserLoginData {
    username: string;
    password: string;
  }

  const handleRegister = async () => {
    try {
      const bodyData: UserRegistrationData = {
        username: "ana",
        password: "123",
        email: "ana@gmail.com",
        full_name: "ana lins",
      };
      const result = await registerUser(bodyData);
      console.log("Registration successful:", result);
      alert("Registration successful!");
    } catch (error: unknown) {
      // Type 'any' is used to catch all types of errors
      console.error("Registration error:", error);
      alert(`Registration failed !`);
    }
  };

  const handleLogin = async () => {
    try {
      const bodyData: UserLoginData = {
        username: "ana",
        password: "123",
      };
      const result = await loginUser(bodyData);
      console.log("Login successful:", result);
      alert("Login successful!");
    } catch (error: unknown) {
      console.error("Login error:", error);
      alert(`Login failed !`);
    }
  };

  const handleLogout = async () => {
    try {
      const bodyData = {}; // or whatever data your logout endpoint requires.
      const result = await logoutUser(bodyData);
      console.log("Logout successful:", result);
      alert("Logout successful!");
    } catch (error: unknown) {
      console.error("Logout error:", error);
      alert(`Logout failed !`);
    }
  };

  return (
    <div>
      <button onClick={handleRegister}>Register</button>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
