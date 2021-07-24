import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchPostById, selectPostById } from '../postsSlice'
import './PostDetails.css'

function PostDetails() {
  const { postId } = useParams()
  const dispatch = useDispatch()
  const { isLoading, error } = useSelector(state => state.posts)
  const post = useSelector(state => selectPostById(state, postId))

  useEffect(async () => {
    if (!post) {
      dispatch(fetchPostById(postId))
    }
  }, [dispatch])

  return (
    <div className="post-wrapper">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {post && (
        <>
          <article className="post">
            <h1 className="post__title">{post.title}</h1>
            <p className="post__content">{post.body}</p>
          </article>
          <section className="comments"></section>
        </>
      )}
    </div>
  )
}

export default PostDetails
