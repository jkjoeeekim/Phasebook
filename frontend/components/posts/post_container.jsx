import Post from './post';
import { connect } from 'react-redux';
import { postPost, deletePost } from '../../actions/post_actions';
import { postLike, deleteLike } from '../../actions/like_actions';
import { openComments, closeComments } from '../../actions/comment_actions';

const mSTP = (state, ownProps) => ({
  posts: state.entities.posts,
  users: state.entities.users,
  likes: state.entities.likes,
  likers: state.entities.likes[ownProps.post.id],
  liked: state.ui.likes[ownProps.post.id],
});

const mDTP = (dispatch) => ({
  postPost: (post) => dispatch(postPost(post)),
  deletePost: (postId) => dispatch(deletePost(postId)),
  postLike: (like) => dispatch(postLike(like)),
  deleteLike: (likeId) => dispatch(deleteLike(likeId)),
  openComments: (postId) => dispatch(openComments(postId)),
  closeComments: (postId) => dispatch(closeComments(postId)),
});

export default connect(mSTP, mDTP)(Post);