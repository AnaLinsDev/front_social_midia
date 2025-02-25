"use client";

import Avatar from "@mui/material/Avatar";
import avatarImage from "../../static/avatar_image.jpg"; // Ajuste o caminho conforme necessário
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

import PostsProfile from "../../components/posts/posts_profile";
import styles from './profile.module.scss';


export default function ProfilePage() {
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
              <span className={styles.user_name}>Shrek Emo</span>
              <span className={styles.user_friends}>0 amigos</span>
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

        <PostsProfile />
      </div>
    </div>
  );
}

export { ProfilePage };
