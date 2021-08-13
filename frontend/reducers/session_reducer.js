import { combineReducers } from 'redux';
import CurrentUserReducer from './current_user_reducer';
import FriendsReducer from './friends_reducer';
import SearchReducer from './search_reducer';
import FriendshipsReducer from './friendships_reducer';
import RequestsReducer from './requests_reducer';

export default combineReducers({
  currentUser: CurrentUserReducer,
  friends: FriendsReducer,
  search: SearchReducer,
  friendships: FriendshipsReducer,
  requests: RequestsReducer,
});