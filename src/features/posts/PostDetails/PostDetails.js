import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Spinner from '../../../components/spinner'
import ErrorMessage from '../../../components/error-message'
import CommentList from '../../comments/comment-list'
import { useParams } from 'react-router-dom'
import { fetchPostById, selectPostById } from '../postsSlice'
import {
  fetchPostsComments,
  selectCommentsByPostId,
} from '../../comments/commentsSlice'
import './PostDetails.css'

function PostDetails() {
  const { postId } = useParams()
  const dispatch = useDispatch()
  const { isLoading: isFetchingPost, error: postError } = useSelector(
    state => state.posts,
  )
  const { isLoading: isFetchingComments, error: commentsError } = useSelector(
    state => state.comments,
  )
  const post = useSelector(state => selectPostById(state, postId))
  const comments = useSelector(selectCommentsByPostId(postId))

  useEffect(async () => {
    if (!post) {
      dispatch(fetchPostById(postId))
    }
  }, [dispatch])

  useEffect(async () => {
    dispatch(fetchPostsComments(postId))
  }, [])

  if (isFetchingPost) {
    return <Spinner />
  }

  if (postError) {
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
          <CommentList comments={comments} />
        </>
      )}
    </div>
  )
}

export default PostDetails
