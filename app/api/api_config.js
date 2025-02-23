const apiConfig = {
  baseUrl: "http://localhost",
  port: 8000,
  endpoints: {
    // Auth
    register: "/api/auth/register/",
    login: "/api/auth/login/",
    logout: "/api/auth/logout/",

    // Profiles
    profiles: "/api/profiles/",
    profile: "/api/profiles/{profile_id}/",

    // Friends
    friendRequests: "/api/friend-requests/",
    friendRequest: "/api/friend-requests/{id}/",

    // Posts
    posts: "/api/posts/",
    postsFeed: "/api/posts/feed/",
    comments: "/api/comments/",
    likes: "/api/likes/",

    // Notifications
    notifications: "/api/notifications/",

    // Search
    searchUsers: "/api/search-users/",
    searchPosts: "/api/search-posts/",
  },
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000,
};

export default apiConfig;
