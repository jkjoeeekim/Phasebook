import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import SigninPage from '../components/session/signin_page';
import PostIndexContainer from '../components/posts/post_index_container';

const Auth = ({ path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
    loggedIn ? (
      <PostIndexContainer />
    ) : (
      <SigninPage />
    )
  )} />
);

const mSTP = (state) => ({
  loggedIn: Boolean(state.session.currentUser)
});

export const AuthRoute = withRouter(connect(mSTP)(Auth));