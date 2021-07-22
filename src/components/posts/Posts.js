import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Post from '../post'
import './Posts.css'
import { fetchPosts } from '../../actions/post-actions'

function Posts() {
  const { data: posts, isFetching, error } = useSelector(state => state.posts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPosts())
  }, [])

  return (
    <section className="post-list">
      {isFetching && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {posts.length > 0 && posts.map(post => <Post post={post} />)}
    </section>
  )
}

export default Posts
