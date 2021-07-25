import { useState } from 'react'

export const useLikedPosts = () => {
  const [likedPosts, setLikedPosts] = useState(getLikedPostsFromLocalStorage())

  function getLikedPostsFromLocalStorage() {
    if (localStorage.getItem('likedPosts') === null) {
      return {}
    } else {
      return JSON.parse(localStorage.getItem('likedPosts'))
    }
  }

  function handlePostLike(postId) {
    const likedPostsCpy = getLikedPostsFromLocalStorage()
    if (!likedPostsCpy[postId]) {
      likedPostsCpy[postId] = postId
    } else {
      delete likedPostsCpy[postId]
    }

    localStorage.setItem('likedPosts', JSON.stringify(likedPostsCpy))
    setLikedPosts(likedPostsCpy)
  }

  return { likedPosts, handlePostLike }
}
