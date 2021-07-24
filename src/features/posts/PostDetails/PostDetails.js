import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Spinner from '../../../components/spinner'
import { useParams } from 'react-router-dom'
import ErrorMessage from '../../../components/error-message'
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

  if (isLoading) {
    return <Spinner />
  }

  if (error) {
    return <ErrorMessage>{error.message}</ErrorMessage>
  }

  return (
    <div className="post-wrapper">
      {post && (
        <>
          <article className="post">
            <h1 className="post__title">{post.title}</h1>
            <p className="post__content">{post.body}</p>
          </article>
        </>
      )}
    </div>
  )
}

export default PostDetails
