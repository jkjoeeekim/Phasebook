import UserSearchPage from './user_search_page';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchUsers } from '../../actions/user_actions';
import { searchUser } from '../../actions/search_actions';
import { requestFriendship, requestFriendships } from '../../actions/friendship_actions';

const mSTP = (state, ownParams) => {
  return (
    {
      user: state.entities.users[state.session.currentUser],
      users: state.entities.users,
      friends: state.session.friends,
      friendships: state.session.friendships,
      requests: state.session.requests,
      history: ownParams.history,
      search: state.session.search,
      prevSearch: ownParams.location.search.split("=")[1],
    }
  );
};

const mDTP = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
  logout: () => dispatch(logout()),
  searchUser: (userName) => dispatch(searchUser(userName)),
  requestFriendship: (friendship) => dispatch(requestFriendship(friendship)),
  requestFriendships: (userId) => dispatch(requestFriendships(userId)),
});

export default connect(mSTP, mDTP)(UserSearchPage);