import * as APIUtils from '../utils/api_utils';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS"

const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser: user,
});

const removeCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
  currentUser: null
});

const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const createNewUser = (user) => (dispatch) => (
  APIUtils.postUser(user)
    .then((user) => (
      dispatch(receiveCurrentUser(user))
    ), err => (
      dispatch(receiveErrors(err.responseJSON))
    ))
);

export const login = (user) => (dispatch) => (
  APIUtils.postSession(user)
    .then((user) => (
      dispatch(receiveCurrentUser(user))
    ), err => (
      dispatch(receiveErrors(err.responseJSON))
    ))
);

export const logout = () => (dispatch) => (
  APIUtils.deleteSession()
    .then(() => dispatch(removeCurrentUser()))
);