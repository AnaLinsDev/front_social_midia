// Posts _____________________________

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
    profile_image: File | null;
  };
}

interface PostCardProps {
  post: PostInterface;
}

interface PostListProps {
  posts: PostCardProps[];
}

// Profile _____________________________

interface ProfileInterface {
  id: number;
  username: string;
  email: string;
  full_name: string;
  profile_image: File | null;
}


export type { PostCardProps, PostListProps, ProfileInterface };
