import { connect } from 'react-redux';
import { login } from '../../actions/session'
import LandingPage from './landing_page';

const mSTP = (state) => ({
  currentUser: state.session.currentUser,
});

const mDTP = (dispatch) => ({
  login: (user) => dispatch(login(user)),
});

export default connect(mSTP, mDTP)(LandingPage);