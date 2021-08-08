import React from 'react';
import PostIndex from './post_index';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchUser, fetchUsers } from '../../actions/user_actions';
import { fetchPosts, postPost, fetchComments } from '../../actions/post_actions';

const mSTP = (state) => ({
  userId: state.session.currentUser,
  user: state.entities.users[state.session.currentUser],
  posts: state.entities.posts,
  users: state.entities.users,
  friends: state.session.friends,
  comments: state.entities.comments,
});

const mDTP = (dispatch) => ({
  fetchUser: () => dispatch(fetchUser()),
  fetchUsers: () => dispatch(fetchUsers()),
  logout: () => dispatch(logout()),
  fetchPosts: () => dispatch(fetchPosts()),
  postPost: (post) => dispatch(postPost(post)),
  fetchComments: () => dispatch(fetchComments()),
});

export default connect(mSTP, mDTP)(PostIndex);