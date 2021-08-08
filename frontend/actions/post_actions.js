import * as APIUtils from '../utils/api_utils';

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";

const allPosts = (posts) => {
  return ({
    type: RECEIVE_POSTS,
    posts
  });
};

const allComments = (comments) => {
  return ({
    type: RECEIVE_COMMENTS,
    comments
  });
};

const singlePost = (post) => ({
  type: RECEIVE_POST,
  post
});

export const fetchPosts = () => (dispatch) => (
  APIUtils.fetchPosts()
    .then((posts) => dispatch(allPosts(posts)))
);

export const postPost = (post) => (dispatch) => (
  APIUtils.postPost(post)
    .then((posts) => dispatch(allPosts(posts)))
);

export const fetchComments = () => (dispatch) => (
  APIUtils.fetchComments()
    .then((comments) => dispatch(allComments(comments)))
);