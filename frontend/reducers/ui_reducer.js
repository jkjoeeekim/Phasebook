import { OPEN_COMMENTS, CLOSE_COMMENTS } from '../actions/comment_actions';

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
    default:
      return state;
  }
};