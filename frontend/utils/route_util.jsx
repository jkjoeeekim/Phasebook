import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter, Redirect, useParams } from 'react-router-dom';
import PostIndexContainer from '../components/posts/post_index_container';
import LoginPage from '../components/session/login_page';
import UserProfilePage from '../components/user/user_profile_page';

const Auth = ({ component: Component, path, loggedIn, exact }) => (
  loggedIn ? (
    <Route path="/" exact={exact} render={(props) => (<PostIndexContainer />)} />
  ) : (
    <Route path={path} exact={exact} render={(props) => (<Component {...props} />)} />
  )
);

const Auth2 = ({ component: Component, path, loggedIn, exact }) => {
  let comp;

  if (loggedIn) {
    if (!!parseInt(location.hash.split("/")[1])) {
      comp = (
        <Route path="/:id" exact render={(props) => (<UserProfilePage {...props} />)} />
      );
    } else {
      comp = (
        <Redirect to="/" render={(props) => (<PostIndexContainer />)} />
      );
    }
  } else {
    comp = (
      <Route path={path} exact={exact} render={(props) => (<LoginPage {...props} />)} />
    );
  }

  return comp;
};

const mSTP = (state) => ({
  loggedIn: Boolean(state.session.currentUser)
});

export const AuthRoute = withRouter(connect(mSTP)(Auth));
export const AuthRoute2 = withRouter(connect(mSTP)(Auth2));;