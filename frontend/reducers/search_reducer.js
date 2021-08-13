import { SEARCH_USER } from '../actions/search_actions';

export default (state = [], action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case SEARCH_USER:
      // nextState = Object.assign({}, state, { search: [] });
      let userIds = [];
      action.users.map((user) => { userIds.push(user.id); });
      return userIds;
    default:
      return state;
  }
};