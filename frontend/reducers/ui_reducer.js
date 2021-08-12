import { combineReducers } from 'redux';
import UICommentReducer from './ui_comment_reducer';
import UILikeReducer from './ui_like_reducer';

export default combineReducers({
  comments: UICommentReducer,
  likes: UILikeReducer,
});