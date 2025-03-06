interface PostInterface {
  id: number;
  title: string;
  content: string;
  likes: number;
  publicationDate: string;
  avatar: string;
  userId: number;
  username: string;
  image: string;
}

interface PostCardProps {
  post: PostInterface;
}

interface PostListProps {
    posts: PostCardProps[];
  }

export type {PostCardProps, PostListProps };
