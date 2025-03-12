"use client";

import React, { useState } from "react";
import { TextField, Button, Typography, Container, Box } from "@mui/material";

import styles from "./login.module.scss";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { registerUser, loginUser } from "../../api/modules/authentication";

export default function AuthForm() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("access_token");

    if (token) {
      router.push("/profile");
    }
  }, [router]);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (isLogin) {
      handleLogin(username, password);
    } else {
      handleRegister(username, password, email, fullName);
    }
  };

  interface UserRegistrationData {
    username: string;
    password: string;
    email: string;
    full_name: string;
    profile_image: File | null;
  }

  interface UserLoginData {
    username: string;
    password: string;
  }

  const handleRegister = async (
    username: string,
    password: string,
    email: string,
    fullName: string
  ) => {
    try {
      const bodyData: UserRegistrationData = {
        username: username,
        password: password,
        email: email,
        full_name: fullName,
        profile_image: null
      };
      const result = await registerUser(bodyData);
      console.log("Registration successful:", result);
    } catch (error: unknown) {
      console.error("Registration error:", error);
    }
  };

  const handleLogin = async (username: string, password: string) => {
    try {
      const bodyData: UserLoginData = {
        username: username,
        password: password,
      };
      loginUser(bodyData);

    } catch (error: unknown) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className={styles.login_page_wrapper}>
      <Container maxWidth="xs" className={styles.login_container}>
        <Box className={styles.login_box}>
          <Typography component="h1" variant="h5">
            {isLogin ? "Login" : "Sign Up"}
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {!isLogin && (
              <TextField
                margin="normal"
                required
                fullWidth
                name="fullName"
                label="Full Name"
                id="fullName"
                autoComplete="full-name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            )}

            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {!isLogin && (
              <TextField
                margin="normal"
                required
                fullWidth
                name="email"
                label="Email Address"
                type="email"
                id="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            )}
            <Button
              className="btn_default"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {isLogin ? "Login" : "Sign Up"}
            </Button>
            <Button
              className="btn_outlined_default"
              fullWidth
              onClick={() => setIsLogin(!isLogin)}
              sx={{ mb: 2 }}
            >
              {isLogin ? "Sign Up" : "Login"}
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export { AuthForm };
