"use client";

import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import PostCard from "./posts_card";
import PostModalCreate from "./posts_modal_create"
import styles from "./posts_feed.module.scss";

import Button from "@mui/material/Button";

const style = {
  py: 0,
  width: "100%",
  maxWidth: "100%",
  borderRadius: 2,
};

const posts = [
  {
    id: 1,
    content: "Conteúdo do Post 1",
    created_at: "2023-10-27T10:00:00Z",
    author: {
      id: 101,
      username: "user101",
      email: "user101@example.com",
      full_name: "User 101",
      profile_image: "/images/avatar10.jpg",
    },
    image:
      "https://i.pinimg.com/564x/67/dc/1e/67dc1e10c00d5f7a86cd57a3c89cb466.jpg",
    likes: 10,
  },
  {
    id: 2,
    content: "Conteúdo do Post 2",
    created_at: "2025-02-23T01:30:00Z",
    author: {
      id: 102,
      username: "user102",
      email: "user102@example.com",
      full_name: "User 102",
      profile_image: "/images/avatar10.jpg",
    },
    image:
      "https://i.pinimg.com/564x/67/dc/1e/67dc1e10c00d5f7a86cd57a3c89cb466.jpg",
    likes: 4,
  },
  {
    id: 3,
    content: "Conteúdo do Post 3",
    created_at: "2025-01-27T12:45:00Z",
    author: {
      id: 103,
      username: "user103",
      email: "user103@example.com",
      full_name: "User 103",
      profile_image: "/images/avatar10.jpg",
    },
    image:
      "https://i.pinimg.com/564x/67/dc/1e/67dc1e10c00d5f7a86cd57a3c89cb466.jpg",
    likes: 45,
  },
  {
    id: 4,
    content: "Conteúdo do Post 4",
    created_at: "2023-10-27T14:00:00Z",
    author: {
      id: 104,
      username: "user104",
      email: "user104@example.com",
      full_name: "User 104",
      profile_image: "/images/avatar10.jpg",
    },
    image:
      "https://i.pinimg.com/564x/67/dc/1e/67dc1e10c00d5f7a86cd57a3c89cb466.jpg",
    likes: 60,
  },
  {
    id: 5,
    content: "Conteúdo do Post 5",
    created_at: "2023-10-27T15:15:00Z",
    author: {
      id: 105,
      username: "user105",
      email: "user105@example.com",
      full_name: "User 105",
      profile_image: "/images/avatar10.jpg",
    },
    image:
      "https://i.pinimg.com/564x/67/dc/1e/67dc1e10c00d5f7a86cd57a3c89cb466.jpg",
    likes: 46,
  },
  {
    id: 6,
    content: "Conteúdo do Post 6",
    created_at: "2023-10-27T16:30:00Z",
    author: {
      id: 106,
      username: "user106",
      email: "user106@example.com",
      full_name: "User 106",
      profile_image: "/images/avatar10.jpg",
    },
    image:
      "https://i.pinimg.com/564x/67/dc/1e/67dc1e10c00d5f7a86cd57a3c89cb466.jpg",
    likes: 87,
  },
  {
    id: 7,
    content: "Conteúdo do Post 7",
    created_at: "2023-10-27T17:45:00Z",
    author: {
      id: 107,
      username: "user107",
      email: "user107@example.com",
      full_name: "User 107",
      profile_image: "/images/avatar10.jpg",
    },
    image:
      "https://i.pinimg.com/564x/67/dc/1e/67dc1e10c00d5f7a86cd57a3c89cb466.jpg",
    likes: 2,
  },
  {
    id: 8,
    content: "Conteúdo do Post 8",
    created_at: "2023-10-27T19:00:00Z",
    author: {
      id: 108,
      username: "user108",
      email: "user108@example.com",
      full_name: "User 108",
      profile_image: "/images/avatar10.jpg",
    },
    image:
      "https://i.pinimg.com/564x/67/dc/1e/67dc1e10c00d5f7a86cd57a3c89cb466.jpg",
    likes: 9,
  },
  {
    id: 9,
    content: "Conteúdo do Post 9",
    created_at: "2023-10-27T20:15:00Z",
    author: {
      id: 109,
      username: "user109",
      email: "user109@example.com",
      full_name: "User 109",
      profile_image: "/images/avatar10.jpg",
    },
    image:
      "https://i.pinimg.com/564x/67/dc/1e/67dc1e10c00d5f7a86cd57a3c89cb466.jpg",
    likes: 6,
  },
  {
    id: 10,
    content: "Conteúdo do Post 10",
    created_at: "2023-10-27T21:30:00Z",
    author: {
      id: 110,
      username: "user110",
      email: "user110@example.com",
      full_name: "User 110",
      profile_image: "/images/avatar10.jpg",
    },
    image:
      "https://i.pinimg.com/564x/67/dc/1e/67dc1e10c00d5f7a86cd57a3c89cb466.jpg",
    likes: 450,
  },
];

export default function PostsFeed() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="default_padding">
      <div className={styles.post_create_form}>
        <Button variant="outlined" onClick={handleOpen}>
          No que está pensando ?
        </Button>
        <PostModalCreate open={open} handleClose={handleClose} />
      </div>
      <List sx={style} className={styles.posts_grid}>
        {posts.map((post) => (
          <ListItem
            key={post.id}
            className={`${styles.posts_item} default_padding`}
          >
            <PostCard post={post} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export { PostsFeed };
