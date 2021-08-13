import PostIndex from './post_index';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchUser, fetchUsers } from '../../actions/user_actions';
import { fetchPosts, postPost, deletePost } from '../../actions/post_actions';
import { openComments, closeComments } from '../../actions/comment_actions';
import { requestFriendships, requestFriendship, deleteFriendship } from '../../actions/friendship_actions';
import { searchUser } from '../../actions/search_actions';

const mSTP = (state, ownParams) => ({
  userId: state.session.currentUser,
  user: state.entities.users[state.session.currentUser],
  posts: state.entities.posts,
  users: state.entities.users,
  likes: state.entities.likes,
  friends: state.session.friends,
  history: ownParams.history,
  friendships: state.session.friendships,
  requests: state.session.requests,
});

const mDTP = (dispatch) => ({
  fetchUser: () => dispatch(fetchUser()),
  fetchUsers: () => dispatch(fetchUsers()),
  logout: () => dispatch(logout()),
  fetchPosts: () => dispatch(fetchPosts()),
  postPost: (post) => dispatch(postPost(post)),
  deletePost: (postId) => dispatch(deletePost(postId)),
  openComments: (postId) => dispatch(openComments(postId)),
  closeComments: (postId) => dispatch(closeComments(postId)),
  searchUser: (userName) => dispatch(searchUser(userName)),
  requestFriendships: (userId) => dispatch(requestFriendships(userId)),
  requestFriendship: (friendship) => dispatch(requestFriendship(friendship)),
  deleteFriendship: (friendshipId) => dispatch(deleteFriendship(friendshipId)),
});

export default connect(mSTP, mDTP)(PostIndex);