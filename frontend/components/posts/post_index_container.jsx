import React from 'react';
import PostIndex from './post_index';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchUser } from '../../actions/user_actions';

const mSTP = (state) => ({
  userId: state.session.currentUser,
  user: state.entities.user[state.session.currentUser]
});

const mDTP = (dispatch) => ({
  fetchUser: () => dispatch(fetchUser()),
  logout: () => dispatch(logout())
});

export default connect(mSTP, mDTP)(PostIndex);