import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SigninForm from './signin_form';

const mSTP = (state) => ({
  currentUser: state.session.id,
});

const mDTP = (dispatch) => ({
  login: (user) => dispatch(login(user)),
});

export default connect(mSTP, mDTP)(SigninForm);