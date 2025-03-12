"use client";

import React, { useState, useRef } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import styles from "./profile_edit_modal.module.scss";

import { editProfile } from "../../api/modules/profile";

interface ProfileModalProps {
  open: boolean;
  handleClose: () => void;
  username: string;
  email: string;
  full_name: string;
  profile_image: File | null;
}

export default function ProfileEditModal({
  open,
  handleClose,
  username,
  email,
  full_name,
  profile_image,
}: ProfileModalProps) {
  const [editedUsername, setEditedUsername] = useState(username);
  const [editedEmail, setEditedEmail] = useState(email);
  const [editedFullName, setEditedFullName] = useState(full_name);
  const [editedProfileImage, setEditedProfileImage] = useState(profile_image);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setEditedProfileImage(e.target.files[0]);
    }
  };

  const handleSave = async () => {
    const result = await editProfile({
      username: editedUsername,
      email: editedEmail,
      full_name: editedFullName,
      profile_image: editedProfileImage,
    });

    if (result.status == 200) {
      handleClose();
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        component="form"
        noValidate
        autoComplete="off"
        className={styles.card}
      >
        <div>
          <div className={styles.title}>Edit Profile</div>

          <TextField
            label="Username"
            value={editedUsername}
            onChange={(e) => setEditedUsername(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            value={editedEmail}
            onChange={(e) => setEditedEmail(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Full Name"
            value={editedFullName}
            onChange={(e) => setEditedFullName(e.target.value)}
            fullWidth
            margin="normal"
          />
          <div>
            <Button
              variant="outlined"
              component="label"
              className={styles.btn_file}
              sx={{ mt: 2 }}
            >
              Upload Profile Image
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                ref={fileInputRef}
                style={{ display: "none" }}
              />
            </Button>
            {editedProfileImage && typeof editedProfileImage === "string" && (
              <p>Current Image URL: {editedProfileImage}</p>
            )}
            {editedProfileImage && typeof editedProfileImage !== "string" && (
              <p>Selected File: {editedProfileImage.name}</p>
            )}
          </div>

          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              onClick={handleClose}
              className={`${styles.btns} ${styles.btn_cancel}`}
              sx={{ mr: 1 }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              className={`${styles.btns} ${styles.btn_save}`}
              onClick={handleSave}
            >
              Save
            </Button>
          </Box>
        </div>
      </Box>
    </Modal>
  );
}

export { ProfileEditModal };
