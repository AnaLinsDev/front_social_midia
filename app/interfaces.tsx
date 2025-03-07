interface PostInterface {
  id: number;
  content: string;
  created_at: string;
  image: string;
  likes: number;
  author: {
    id: number;
    username: string;
    email: string;
    full_name: string;
    profile_image: string;
  };
}

interface PostCardProps {
  post: PostInterface;
}

interface PostListProps {
  posts: PostCardProps[];
}

export type { PostCardProps, PostListProps };
