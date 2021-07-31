import * as SessionAPIUtil from '../utils/session_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";

const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user: user,
});

export const createNewUser = (user) => (dispatch) => (
  SessionAPIUtil.postUser(user)
    .then((user) => dispatch(receiveCurrentUser(user)))
);

export const login = (user) => (dispatch) => (
  SessionAPIUtil.postSession(user)
    .then((user) => dispatch(receiveCurrentUser(user)))
);

export const logout = () => (dispatch) => (
  SessionAPIUtil.deleteSession()
    .then(() => dispatch(receiveCurrentUser()))
);