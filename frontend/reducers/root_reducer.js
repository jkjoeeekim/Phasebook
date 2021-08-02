import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import EntitiesReducer from './entities_reducer';

export default combineReducers({
  entities: EntitiesReducer,
  session: SessionReducer,
});