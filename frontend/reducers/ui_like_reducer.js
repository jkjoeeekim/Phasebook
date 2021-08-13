import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USERS } from '../actions/user_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_LIKE:
      nextState[action.like.like.postId] = true;
      return nextState;
    case REMOVE_LIKE:
      nextState[action.like.like.postId] = false;
      return nextState;
    case RECEIVE_USERS:
      Object.values(action.users)[1].map((post) => {
        nextState[post.id] = true;
      });
      return nextState;
    case RECEIVE_CURRENT_USER:
      action.currentUser.likes.map((post) => {
        nextState[post.id] = true;
      });
      return nextState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};