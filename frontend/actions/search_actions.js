import * as APIUtils from '../utils/api_utils';

export const SEARCH_USER = 'SEARCH_USER';

const searchResponse = (users) => ({
  type: SEARCH_USER,
  users
});

export const searchUser = (userName) => (dispatch) => (
  APIUtils.searchUser(userName)
    .then((users) => dispatch(searchResponse(users)))
);