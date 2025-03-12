"use client";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

import styles from "./navbar.module.scss";
import { logoutUser } from "../../api/modules/authentication";

enum Routes {
  FEED = "/feed",
  USERS = "/users",
  PROFILES = "/profile",
  LOGIN = "/login",
}

export default function NavBar() {
  const router = useRouter();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    setIsLoggedIn(!!token);
  }, []);

  async function logout() {
    await logoutUser();

    localStorage.removeItem("access_token");
  }

  return (
    <Box sx={{ flexGrow: 1 }} className={styles.navbar_component}>
      <AppBar position="static" className={styles.navbar}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button color="inherit" onClick={() => router.push(Routes.FEED)}>
              POSTS
            </Button>
          </Typography>

          <Button color="inherit" onClick={() => router.push(Routes.USERS)}>
            Users
          </Button>

          {isLoggedIn ? (
            <span>
              <Button
                color="inherit"
                onClick={() => router.push(Routes.PROFILES)}
              >
                Profile
              </Button>
              <Button color="inherit" onClick={() => logout()}>
                Logout
              </Button>
            </span>
          ) : (
            <Button color="inherit" onClick={() => router.push(Routes.LOGIN)}>
              Login / SIGN UP
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export { NavBar };
