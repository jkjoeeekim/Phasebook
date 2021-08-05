import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter, Redirect } from 'react-router-dom';
import PostIndexContainer from '../components/posts/post_index_container';

const Auth = ({ component: Component, path, loggedIn, exact }) => (
  loggedIn ? (
    <Route path="/" exact={exact} render={(props) => (<PostIndexContainer />)} />
  ) : (
    <Route path={path} exact={exact} render={(props) => (<Component {...props} />)} />
  )
);
const Auth2 = ({ component: Component, path, loggedIn, exact }) => (
  loggedIn ? (
    <Redirect to="/" component={Component} />
  ) : (
    <Route path={path} exact={exact} render={(props) => (<Component {...props} />)} />
  )
);

const mSTP = (state) => ({
  loggedIn: Boolean(state.session.currentUser)
});

export const AuthRoute = withRouter(connect(mSTP)(Auth));
export const AuthRoute2 = withRouter(connect(mSTP)(Auth2));