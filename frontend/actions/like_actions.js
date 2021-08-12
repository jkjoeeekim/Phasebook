import * as APIUtils from '../utils/api_utils';

export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";

const singleLike = (like) => ({
  type: RECEIVE_LIKE,
  like
});

const removeLike = (like) => ({
  type: REMOVE_LIKE,
  like
});

export const postLike = (like) => (dispatch) => (
  APIUtils.postLike(like)
    .then((like) => dispatch(singleLike(like)))
);

export const deleteLike = (likeId) => (dispatch) => (
  APIUtils.deleteLike(likeId)
    .then((like) => dispatch(removeLike(like)))
);