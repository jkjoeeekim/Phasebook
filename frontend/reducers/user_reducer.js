import { RECEIVE_USERS } from '../actions/user_actions';
import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';

const _nullUser = {};

export default (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_USERS:
      Object.values(action.users)[0].forEach((user) => {
        nextState[user.id] = user;
      });
      return nextState;
    case RECEIVE_CURRENT_USER:
      nextState[action.currentUser.id] = action.currentUser;
      return nextState;
    case LOGOUT_CURRENT_USER:
      return _nullUser;
    default:
      return state;
  }
};