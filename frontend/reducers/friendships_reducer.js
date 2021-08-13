import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { REQUEST_FRIENDSHIPS, REQUEST_FRIENDSHIP, REMOVE_FRIENDSHIP } from '../actions/friendship_actions';

const _nullRequest = [];

export default (state = _nullRequest, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return nextState;
    case REQUEST_FRIENDSHIP:
      if (!action.friendship.request.active) {
        nextState[action.friendship.request.friendId] = action.friendship.request;
      }
      return nextState;
    case REQUEST_FRIENDSHIPS:
      if (action.friendships.reqs) {
        action.friendships.reqs.map(friendship => {
          nextState[friendship.friendId] = friendship;
        });
      }
      return nextState;
    case REMOVE_FRIENDSHIP:
      return nextState;
    case LOGOUT_CURRENT_USER:
      return _nullRequest;
    default:
      return state;
  }
};