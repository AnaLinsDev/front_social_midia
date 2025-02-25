"use client";

import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import PostCard from "./posts_card";

const style = {
  py: 0,
  width: "100%",
  maxWidth: "100%",
  borderRadius: 2,
};

const posts = [
    {
      id: 1,
      title: "Post 1",
      content: "Conteúdo do Post 1",
      likes: 2,
      publicationDate: "2023-10-27T10:00:00Z",
      avatar: "/images/avatar1.jpg",
      userId: 101,
      username: "user101",
    },
    {
      id: 2,
      title: "Post 2",
      content: "Conteúdo do Post 2",
      likes: 5,
      publicationDate: "2025-02-23T01:30:00Z",
      avatar: "/images/avatar2.jpg",
      userId: 102,
      username: "user102",
    },
    {
      id: 3,
      title: "Post 3",
      content: "Conteúdo do Post 3",
      likes: 3,
      publicationDate: "2025-01-27T12:45:00Z",
      avatar: "/images/avatar3.jpg",
      userId: 103,
      username: "user103",
    },
    {
      id: 4,
      title: "Post 4",
      content: "Conteúdo do Post 4",
      likes: 2,
      publicationDate: "2023-10-27T14:00:00Z",
      avatar: "/images/avatar4.jpg",
      userId: 104,
      username: "user104",
    },
    {
      id: 5,
      title: "Post 5",
      content: "Conteúdo do Post 5",
      likes: 7,
      publicationDate: "2023-10-27T15:15:00Z",
      avatar: "/images/avatar5.jpg",
      userId: 105,
      username: "user105",
    },
    {
      id: 6,
      title: "Post 6",
      content: "Conteúdo do Post 6",
      likes: 1,
      publicationDate: "2023-10-27T16:30:00Z",
      avatar: "/images/avatar6.jpg",
      userId: 106,
      username: "user106",
    },
    {
      id: 7,
      title: "Post 7",
      content: "Conteúdo do Post 7",
      likes: 9,
      publicationDate: "2023-10-27T17:45:00Z",
      avatar: "/images/avatar7.jpg",
      userId: 107,
      username: "user107",
    },
    {
      id: 8,
      title: "Post 8",
      content: "Conteúdo do Post 8",
      likes: 4,
      publicationDate: "2023-10-27T19:00:00Z",
      avatar: "/images/avatar8.jpg",
      userId: 108,
      username: "user108",
    },
    {
      id: 9,
      title: "Post 9",
      content: "Conteúdo do Post 9",
      likes: 6,
      publicationDate: "2023-10-27T20:15:00Z",
      avatar: "/images/avatar9.jpg",
      userId: 109,
      username: "user109",
    },
    {
      id: 10,
      title: "Post 10",
      content: "Conteúdo do Post 10",
      likes: 8,
      publicationDate: "2023-10-27T21:30:00Z",
      avatar: "/images/avatar10.jpg",
      userId: 110,
      username: "user110",
    },
  ];



export default function PostsProfile() {

  return (
    <div className="default_padding">
      <List sx={style}>
        {posts.map((post) => (
          <ListItem key={post.id} className="default_padding">
            <PostCard post={post} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export { PostsProfile };
