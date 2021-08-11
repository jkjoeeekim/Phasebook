export const OPEN_COMMENTS = 'OPEN_COMMENTS';
export const CLOSE_COMMENTS = 'CLOSE_COMMENTS';

export const openComments = (postId) => ({
  type: OPEN_COMMENTS,
  postId
})

export const closeComments = (postId) => ({
  type: CLOSE_COMMENTS,
  postId
})