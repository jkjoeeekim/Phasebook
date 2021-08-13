import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session_actions';
import SignupForm from './signup_form';
import { fetchUsers } from '../../actions/user_actions';
import { fetchPosts } from '../../actions/post_actions';

const mSTP = (state, ownProps) => {
  return {
    currentUser: state.session.id,
    errors: state.errors
  };
};

const mDTP = (dispatch) => ({
  createNewUser: (user) => dispatch(createNewUser(user)),
  fetchUsers: () => dispatch(fetchUsers()),
  fetchPosts: () => dispatch(fetchPosts()),
});

export default connect(mSTP, mDTP)(SignupForm);