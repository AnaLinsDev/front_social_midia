const apiConfig = {
  baseUrl: "http://localhost",
  port: 8000,
  endpoints: {
    // Auth
    register: "/auth/register/",
    login: "/auth/login/",
    logout: "/auth/logout/",

    // Profiles
    profiles: "/profile/",
    profile: "/profile/{profile_id}/",

    // Friends
    friendRequests: "/friend-requests/",
    friendRequest: "/friend-requests/{id}/",

    // Posts
    posts: "/posts/",
    postsFeed: "/posts/feed/",
    comments: "/comments/",
    likes: "/likes/",

    // Notifications
    notifications: "/notifications/",

    // Search
    searchUsers: "/search-users/",
    searchPosts: "/search-posts/",
  },
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000,
};

export default apiConfig;
