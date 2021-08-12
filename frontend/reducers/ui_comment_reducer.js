import { OPEN_COMMENTS, CLOSE_COMMENTS } from '../actions/comment_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case OPEN_COMMENTS:
      nextState[action.postId] = true;
      return nextState;
    case CLOSE_COMMENTS:
      nextState[action.postId] = false;
      return nextState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};