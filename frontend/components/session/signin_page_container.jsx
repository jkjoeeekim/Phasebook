import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { fetchUsers } from '../../actions/user_actions';
import { fetchPosts } from '../../actions/post_actions';
import SigninPage from './signin_page';

const mSTP = (state) => ({
  currentUser: state.session.id,
  errors: state.errors
});

const mDTP = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
  fetchPosts: () => dispatch(fetchPosts()),
});

export default connect(mSTP, mDTP)(SigninPage);