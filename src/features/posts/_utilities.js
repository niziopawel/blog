export const isPostLiked = (likedPosts, postId) => {
  return likedPosts[postId] ? true : false
}
