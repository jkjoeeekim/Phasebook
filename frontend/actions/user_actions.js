import * as APIUtils from '../utils/api_utils';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_FRIENDS = "RECEIVE_FRIENDS";

const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});

const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users
});

const receiveFriends = (friends) => ({
  type: RECEIVE_FRIENDS,
  friends
});

export const fetchUser = (userId) => (dispatch) => (
  APIUtils.fetchUser(userId)
    .then((user) => dispatch(receiveUser(user)))
);

export const fetchUsers = () => (dispatch) => (
  APIUtils.fetchUsers()
    .then((users) => dispatch(receiveUsers(users)))
);

export const fetchFriends = (userId) => (dispatch) => (
  APIUtils.fetchFriends(userId)
    .then((friends) => dispatch(receiveFriends(friends)))
);