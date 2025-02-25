"use client";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

import { PostCardProps } from "../../interfaces";
import styles from './posts_card.module.scss';

export default function PostCard({ post }: PostCardProps) {
  function timeAgo(date: Date): string {
    const now: Date = new Date();
    const seconds: number = Math.round((now.getTime() - date.getTime()) / 1000);
    const minutes: number = Math.round(seconds / 60);
    const hours: number = Math.round(minutes / 60);
    const days: number = Math.round(hours / 24);
    const months: number = Math.round(days / 30);
    const years: number = Math.round(months / 12);

    if (seconds < 60) {
      return "Just now";
    } else if (minutes < 60) {
      return `${minutes} minute(s) ago`;
    } else if (hours < 24) {
      return `${hours} hour(s) ago`;
    } else if (days < 30) {
      return `${days} day(s) ago`;
    } else if (months < 12) {
      return `${months} month(s) ago`;
    } else {
      return `${years} year(s) ago`;
    }
  }

  const publicationDate = post.publicationDate.replace('Z', '');
  const date = new Date(publicationDate);
  const formattedTimeAgo = "Posted " + timeAgo(date);

  return (
    <div>
      <Card className={styles.post_card}>
        <CardContent>
          <div
            className={styles.user_time}
          >
            <span className={styles.user_info}>
              <Avatar alt="Avatar Profile" sx={{ width: 30, height: 30 }} />
              {post.username}
            </span>

            <span>{formattedTimeAgo}</span>
          </div>
          <Typography variant="h5" component="div">
            {post.content}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Likes ( {post.likes} )</Button>
          <Button size="small">Comments</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export { PostCard };
