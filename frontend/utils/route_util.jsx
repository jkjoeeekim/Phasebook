import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter, Redirect, useParams } from 'react-router-dom';
import PostIndexContainer from '../components/posts/post_index_container';
import LoginPage from '../components/session/login_page';
import SigninPageContainer from '../components/session/signin_page_container';
import UserSearchPageContainer from '../components/user/user_search_page_container';
import UserProfilePageContainer from '../components/user/user_profile_page_container';

const Auth = ({ component: Component, path, loggedIn, exact }) => (
  loggedIn ? (
    <Route path="/" exact={exact} render={(props) => (<PostIndexContainer {...props} />)} />
  ) : (
    <Route path={path} exact={exact} render={(props) => (<Component {...props} />)} />
  )
);

const Auth2 = ({ component: Component, path, loggedIn, exact }) => {
  // let comp;

  if (loggedIn) {
    if (!!parseInt(location.hash.split("/")[1])) {
      return (
        <Route path="/:id" exact render={(props) => (<UserProfilePageContainer {...props} />)} />
      );
    } else if (!!location.hash.split("/search?userName=")[1]) {
      return (
        <Route path={location.hash.split("#")[1]} exact render={(props) => (<UserSearchPageContainer {...props} />)} />
      );
    } else {
      return (
        <Redirect to="/" render={(props) => (<SigninPageContainer />)} />
      );
    }
  } else {
    return (
      <Route path={path} exact={exact} render={(props) => (<LoginPage {...props} />)} />
    );
  }

  // return comp;
};

const Auth3 = ({ component: Component, path, loggedIn, exact }) => (
  loggedIn ? (
    <Route path={path} exact={exact} render={(props) => (<Component {...props} />)} />
  ) : (
    <Redirect to="/" render={(props) => (<SigninPageContainer />)} />
  )
);

const mSTP = (state) => {
  return ({
    loggedIn: Boolean(state.session.currentUser)
  });
};

export const AuthRoute = withRouter(connect(mSTP)(Auth));
export const AuthRoute2 = withRouter(connect(mSTP)(Auth2));
export const AuthRoute3 = withRouter(connect(mSTP)(Auth3));