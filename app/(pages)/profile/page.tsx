"use client";

import Avatar from "@mui/material/Avatar";
import avatarImage from "../../static/avatar_image.jpg"; // Ajuste o caminho conforme necessário
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

import PostsProfile from "../../components/posts/posts_profile";

export default function ProfilePage() {
  return (
    <div className="page ">
      <div className="container_profile_page container_page">
      <div className="container_profile default_padding">
        <div className="profile_complete">
          <Avatar
            alt="Avatar Profile"
            src={avatarImage.src}
            sx={{ width: 160, height: 160 }}
          />
          <div className="profile_info">
            <span className="user_name">Shrek Emo</span>
            <span className="user_friends">0 amigos</span>
          </div>
        </div>

        <div className="btns_profile">
          <Button
            className="btn_profile edit"
            variant="contained"
            startIcon={<EditIcon />}
          >
            Edit Profile
          </Button>

          <Button
            className="btn_profile friends"
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
