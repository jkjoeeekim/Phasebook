import TopNavBar from './top_nav_bar';
import { connect } from 'react-redux';
import { requestFriendships } from '../../actions/friendship_actions';

const mSTP = (state, ownProps) => ({
  history: ownProps.history,
  users: state.entities.users,
  requests: state.session.requests,
});

const mDTP = (dispatch) => ({
  requestFriendships: (userId) => dispatch(requestFriendships(userId)),
});

export default connect(mSTP, mDTP)(TopNavBar);