import * as APIUtils from '../utils/api_utils';

export const REQUEST_FRIENDSHIP = 'REQUEST_FRIENDSHIP';
export const REQUEST_FRIENDSHIPS = 'REQUEST_FRIENDSHIPS';
export const REMOVE_FRIENDSHIP = 'REMOVE_FRIENDSHIP';

const singleFriendship = (friendship) => ({
  type: REQUEST_FRIENDSHIP,
  friendship
});

const allFriendships = (friendships) => ({
  type: REQUEST_FRIENDSHIPS,
  friendships
});

const removeFriendship = (friendship) => ({
  type: REMOVE_FRIENDSHIP,
  friendship
});

export const requestFriendship = (friendship) => (dispatch) => (
  APIUtils.requestFriendship(friendship)
    .then((friendship) => dispatch(singleFriendship(friendship)))
);
export const requestFriendships = (friendships) => (dispatch) => (
  APIUtils.requestFriendships(friendships)
    .then((friendships) => dispatch(allFriendships(friendships)))
);
export const deleteFriendship = (friendshipId) => (dispatch) => (
  APIUtils.deleteFriendship(friendshipId)
    .then((friendship) => dispatch(removeFriendship(friendship)))
);
