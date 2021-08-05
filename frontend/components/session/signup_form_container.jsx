import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mSTP = (state, ownProps) => {
  return {
    currentUser: state.session.id,
    errors: state.errors
  };
};

const mDTP = (dispatch) => ({
  createNewUser: (user) => dispatch(createNewUser(user)),
});

export default connect(mSTP, mDTP)(SignupForm);