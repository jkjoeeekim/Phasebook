import { connect } from 'react-redux';
import { login, createNewUser } from '../../actions/session';
import LandingPage from './landing_page';

const mSTP = (state) => ({
  currentUser: state.session.currentUser,
});

const mDTP = (dispatch) => ({
  login: (user) => dispatch(login(user)),
  createNewUser: (user) => dispatch(createNewUser(user)),
});

export default connect(mSTP, mDTP)(LandingPage);