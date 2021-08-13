import { RECEIVE_FRIENDS } from '../actions/user_actions';
import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { REQUEST_FRIENDSHIP, REMOVE_FRIENDSHIP } from '../actions/friendship_actions';

const _nullFriends = [];

export default (state = _nullFriends, action) => {
  Object.freeze(state);
  // let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_FRIENDS:
      return action.friends;
    case RECEIVE_CURRENT_USER:
      return action.currentUser.friends;
    case REQUEST_FRIENDSHIP:
      let nextState = [];
      state.map(friendId => nextState.push(friendId));
      if (!!action.friendship.formed) {
        nextState.push(action.friendship.request.friendId);
      }
      return nextState;
    case LOGOUT_CURRENT_USER:
      return _nullFriends;
    default:
      return state;
  }
};