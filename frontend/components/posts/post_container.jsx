import Post from './post';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchUser, fetchUsers } from '../../actions/user_actions';
import { fetchPosts, postPost, deletePost } from '../../actions/post_actions';
import { openComments, closeComments } from '../../actions/comment_actions';

const mSTP = (state, ownProps) => ({
  posts: state.entities.posts,
  users: state.entities.users,
  ui: state.ui[ownProps.post.id]
});

const mDTP = (dispatch) => ({
  postPost: (post) => dispatch(postPost(post)),
  deletePost: (postId) => dispatch(deletePost(postId)),
  openComments: (postId) => dispatch(openComments(postId)),
  closeComments: (postId) => dispatch(closeComments(postId)),
});

export default connect(mSTP, mDTP)(Post);