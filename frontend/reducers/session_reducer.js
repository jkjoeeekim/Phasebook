import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_FRIENDS } from '../actions/user_actions';

const _nullSession = {
  currentUser: null,
};

export default (state = _nullSession, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, {
        currentUser: action.currentUser.id,
        friends: action.currentUser.friends,
      });
    case LOGOUT_CURRENT_USER:
      return _nullSession;
    case RECEIVE_FRIENDS:
      return Object.assign({}, state, { friends: action.friends });
    default:
      return state;
  }
};