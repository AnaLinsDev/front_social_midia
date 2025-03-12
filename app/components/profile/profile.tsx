"use client";

import * as React from "react";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { deleteProfile } from "../../api/modules/profile";

import { ProfileInterface } from "../../interfaces";
import styles from "./profile.module.scss";
import ProfileModal from "./profile_edit_modal";
import { useEffect, useState } from "react";

export default function ProfileComponent({
  full_name,
  username,
  email,
  profile_image,
}: ProfileInterface) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function handleDeleteProfile() {
    deleteProfile();

    localStorage.removeItem("access_token");
  }

  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (profile_image instanceof File) {
      const url = URL.createObjectURL(profile_image);
      setImageUrl(url);
      return () => URL.revokeObjectURL(url);
    } else {
      setImageUrl(null);
    }
  }, [profile_image]);

  return (
    <div className={`${styles.container_profile} default_padding`}>
      <ProfileModal
        open={open}
        handleClose={handleClose}
        username={username}
        email={email}
        full_name={full_name}
        profile_image={profile_image}
      />

      <div className={styles.profile_complete}>
        <Avatar
          alt="Avatar Profile"
          className={styles.avatar_image_profile}
          src={imageUrl}
          sx={{ width: 160, height: 160 }}
        />

        <div className={styles.profile_info}>
          <span className={styles.user_name}>{full_name}</span>
          <span className={styles.user_info}>{username}</span>
          <span className={styles.user_info}>{email}</span>
        </div>
      </div>

      <div className={styles.btns_profile}>
        <Button
          className={`${styles.btn_profile} ${styles.edit}`}
          variant="contained"
          onClick={handleOpen}
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

        <Button
          className={`${styles.btn_profile} ${styles.delete}`}
          variant="contained"
          onClick={handleDeleteProfile}
          startIcon={<DeleteIcon />}
        >
          Delete Account
        </Button>
      </div>
    </div>
  );
}

export { ProfileComponent };
