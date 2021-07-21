import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../../actions/post-actions'

function Posts() {
  const { data: posts, isFetching, error } = useSelector(state => state.posts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPosts())
  }, [])

  return <div>Posts</div>
}

export default Posts
