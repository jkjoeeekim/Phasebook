import PostIndex from './post_index';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchUser, fetchUsers } from '../../actions/user_actions';
import { fetchPosts, postPost, deletePost } from '../../actions/post_actions';
import { openComments, closeComments } from '../../actions/comment_actions';

const mSTP = (state) => ({
  userId: state.session.currentUser,
  user: state.entities.users[state.session.currentUser],
  posts: state.entities.posts,
  users: state.entities.users,
  likes: state.entities.likes,
  friends: state.session.friends,
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
});

export default connect(mSTP, mDTP)(PostIndex);