import { RECEIVE_POSTS } from '../actions/post_actions';
import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

let _nullLike = {};

export default (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_POSTS:
      let posts = action.posts;
      posts.map((post) => {
        nextState[post.id] = post.likes;
      });
      return nextState;
    case RECEIVE_LIKE:
      nextState[action.like.like.postId] ||= [];
      nextState[action.like.like.postId].push(action.like.like);
      return nextState;
    case REMOVE_LIKE:
      nextState[action.like.like.postId].map((like, idx) => {
        if (like.id === action.like.like.id) {
          nextState[action.like.like.postId].splice(idx, 1);
        } else {
          nextState[action.like.like.postId][like] = like;
        }
      });
      return nextState;
    case LOGOUT_CURRENT_USER:
      return _nullLike;
    default:
      return state;
  }
};