import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';

const _nullUser = {};

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    // case RECEIVE_USER:
    //   return Object.assign({}, { [action.user.id]: action.user });
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, { [action.currentUser.id]: action.currentUser });
    case LOGOUT_CURRENT_USER:
      return _nullUser;
    default:
      return state;
  }
};