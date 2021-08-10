import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import UserProfilePage from './user_profile_page';

const mSTP = (state, ownParams) => ({
  currentUser: state.entities.users[ownParams.match.params.id],
});

const mDTP = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mSTP, mDTP)(UserProfilePage);