import { RECEIVE_POST, RECEIVE_POSTS, REMOVE_POST } from '../actions/post_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_POSTS:
      let posts = action.posts;
      posts.map((post) => {
        nextState[post.id] = post;
      });
      return nextState;
    default:
      return state;
  }
};