import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mSTP = (state) => ({
  currentUser: state.session.id,
});

const mDTP = (dispatch) => ({
  createNewUser: (user) => dispatch(createNewUser(user)),
});

export default connect(mSTP, mDTP)(SignupForm);