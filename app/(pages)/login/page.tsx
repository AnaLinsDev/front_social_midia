"use client";

import React, { useState } from "react";
import { TextField, Button, Typography, Container, Box } from "@mui/material";

import styles from "./login.module.scss";

interface AuthFormProps {
  onLogin: (username: string, password: string) => void;
  onSignup: (
    username: string,
    password: string,
    email: string,
    fullName: string
  ) => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ onLogin, onSignup }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (isLogin) {
      onLogin(username, password);
    } else {
      onSignup(username, password, email, fullName);
    }
  };

  return (
    <div className={styles.login_page_wrapper}>
    <Container maxWidth="xs" className={styles.login_container}>
      <Box className={styles.login_box}>
        <Typography component="h1" variant="h5">
          {isLogin ? "Login" : "Sign Up"}
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
};

export default AuthForm;
