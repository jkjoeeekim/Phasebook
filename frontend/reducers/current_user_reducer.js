import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';

const _nullCurrentUser = null;
export default (state = _nullCurrentUser, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return action.currentUser.id;
    case LOGOUT_CURRENT_USER:
      return _nullCurrentUser;
    default:
      return state;
  }
};