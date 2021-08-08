import * as APIUtils from '../utils/api_utils';

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";

const allPosts = (posts) => ({
  type: RECEIVE_POSTS,
  posts
});

const singlePost = (post) => ({
  type: RECEIVE_POST,
  post
});

export const fetchPosts = () => (dispatch) => {
  return (APIUtils.fetchPosts()
    .then((posts) => dispatch(allPosts(posts))));
};

export const postPost = (post) => (dispatch) => (
  APIUtils.postPost(post)
    .then((posts) => dispatch(allPosts(posts)))
);