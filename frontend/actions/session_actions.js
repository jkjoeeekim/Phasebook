import * as APIUtils from '../utils/api_utils';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";

const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser: user,
});

const removeCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
  currentUser: null
})

export const createNewUser = (user) => (dispatch) => (
  APIUtils.postUser(user)
    .then((user) => dispatch(receiveCurrentUser(user)))
);

export const login = (user) => (dispatch) => (
  APIUtils.postSession(user)
    .then((user) => dispatch(receiveCurrentUser(user)))
);

export const logout = () => (dispatch) => (
  APIUtils.deleteSession()
    .then(() => dispatch(removeCurrentUser()))
);