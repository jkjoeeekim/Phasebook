import { RECEIVE_COMMENTS } from '../actions/post_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

let _nullComments = {};

export default (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_COMMENTS:
      return action.comments.comments;
    case LOGOUT_CURRENT_USER:
      return _nullComments;
    default:

      return state;
  }
};