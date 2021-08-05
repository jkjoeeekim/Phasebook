import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';

const mSTP = (state) => ({
  currentUser: state.session.id,
  errors: state.errors
});

const mDTP = (dispatch) => ({
  login: (user) => dispatch(login(user)),
});

export default connect(mSTP, mDTP)(LoginForm);