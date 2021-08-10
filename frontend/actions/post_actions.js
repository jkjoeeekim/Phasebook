import * as APIUtils from '../utils/api_utils';

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";

const allPosts = (posts) => {
  return ({
    type: RECEIVE_POSTS,
    posts
  });
};

const singlePost = (post) => ({
  type: RECEIVE_POST,
  post
});

const removePost = (post) => ({
  type: REMOVE_POST,
  post
});

export const fetchPosts = () => (dispatch) => (
  APIUtils.fetchPosts()
    .then((posts) => dispatch(allPosts(posts)))
);

export const postPost = (post) => (dispatch) => (
  APIUtils.postPost(post)
    .then((post) => dispatch(singlePost(post)))
);

export const deletePost = (postId) => (dispatch) => (
  APIUtils.deletePost(postId)
    .then((post) => dispatch(removePost(post)))
);