import * as APIUtils from '../utils/api_utils';

export const RECEIVE_USER = "RECEIVE_USER";

const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});

export const fetchUser = (userId) => (dispatch) => (
  APIUtils.fetchUser(userId)
    .then((user) => dispatch(receiveUser(user)))
);