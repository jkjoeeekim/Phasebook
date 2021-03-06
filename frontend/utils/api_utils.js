// Create a new User
export const postUser = (user) => (
  $.ajax({
    method: "POST",
    url: "/api/users",
    data: { user },
  })
);

// Sign in existing User
export const postSession = (user) => (
  $.ajax({
    method: "POST",
    url: "/api/session",
    data: { user },
  })
);

// Log out User
export const deleteSession = () => (
  $.ajax({
    method: "DELETE",
    url: "/api/session"
  })
);

// Fetch User
export const fetchUser = (userId) => (
  $.ajax({
    method: "GET",
    url: `/api/users/${userId}`
  })
);

// Fetch all User
export const fetchUsers = () => (
  $.ajax({
    method: "GET",
    url: "api/users"
  })
);

// Fetch all Post
export const fetchPosts = () => (
  $.ajax({
    method: "GET",
    url: '/api/posts'
  })
);

// Create a Post
export const postPost = (post) => (
  $.ajax({
    method: "POST",
    url: '/api/posts',
    data: { post }
  })
);

export const deletePost = (postId) => (
  $.ajax({
    method: "DELETE",
    url: `/api/posts/${postId}`
  })
);

// Fetch array of Friends for userId
export const fetchFriends = (userId) => (
  $.ajax({
    method: "GET",
    url: `/api/users/${userId}`
  })
);

// Create a Like
export const postLike = (like) => (
  $.ajax({
    method: "POST",
    url: '/api/likes',
    data: { like }
  })
);

// Delete a Like
export const deleteLike = (likeId) => (
  $.ajax({
    method: "DELETE",
    url: `/api/likes/${likeId}`
  })
);

// Search a User
export const searchUser = (userName) => (
  $.ajax({
    method: "GET",
    url: `/api/search?userName=${userName}`
  })
);

// Get all pending friend requests
export const requestFriendships = (userId) => (
  $.ajax({
    method: "GET",
    url: "/api/friendships",
    data: { userId }
  })
);

// Request a friendship
export const requestFriendship = (friendship) => (
  $.ajax({
    method: "POST",
    url: "/api/friendships",
    data: { friendship }
  })
);

// Destroy a friendship
export const deleteFriendship = (friendshipId) => (
  $.ajax({
    method: "DELETE",
    url: `/api/friendships/${friendshipId}`
  })
);