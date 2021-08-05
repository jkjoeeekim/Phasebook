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