"use client";

import Avatar from "@mui/material/Avatar";
import avatarImage from "../../static/avatar_image.jpg"; // Ajuste o caminho conforme necessário
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

import styles from "./profile.module.scss";
import React, { useState, useEffect } from "react";

import { getProfile } from "../../api/modules/profile";

export default function ProfilePage() {
  const defaultUserData = {
    id: 0,
    username: "",
    email: "",
    full_name: "",
  };

  const [userData, setUserData] = useState(defaultUserData);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getProfile();
        console.log(result);

        if (result.status == 200) {
          setUserData(result.data);
        } else {
          setUserData(defaultUserData);
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="page">
      <div className="container_page">
        <div className={`${styles.container_profile} default_padding`}>
          <div className={styles.profile_complete}>
            <Avatar
              alt="Avatar Profile"
              className={styles.avatar_image_profile}
              src={avatarImage.src}
              sx={{ width: 160, height: 160 }}
            />
            <div className={styles.profile_info}>
              <span className={styles.user_name}>{userData.full_name}</span>
              <span className={styles.user_info}>{userData.username}</span>
              <span className={styles.user_info}>{userData.email}</span>
            </div>
          </div>

          <div className={styles.btns_profile}>
            <Button
              className={`${styles.btn_profile} ${styles.edit}`}
              variant="contained"
              startIcon={<EditIcon />}
            >
              Edit Profile
            </Button>

            <Button
              className={`${styles.btn_profile} ${styles.friends}`}
              variant="contained"
              startIcon={<PeopleAltIcon />}
            >
              Friends
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}

export { ProfilePage };
