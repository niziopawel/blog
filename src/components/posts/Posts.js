import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useQuery } from '../hooks/useQuery'
import Post from '../post'
import Pagination from '../pagination'
import { fetchPosts } from '../../actions/post-actions'
import './Posts.css'

function Posts() {
  const { data: posts, isFetching, error } = useSelector(state => state.posts)
  const [itemsPerPage] = useState(20)
  const query = useQuery()
  const [currentPage, setCurrentPage] = useState(query.get('page') || 1)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPosts())
  }, [])

  const getPaginatedPosts = () => {
    const startIndex = currentPage * itemsPerPage - itemsPerPage
    const endIndex = startIndex + itemsPerPage

    return posts.slice(startIndex, endIndex)
  }

  return (
    <>
      <section className="post-list">
        {isFetching && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {posts.length > 0 &&
          getPaginatedPosts().map(post => <Post key={post.id} post={post} />)}
      </section>
      <Pagination
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        totalRecords={posts}
        itemsPerPage={20}
      />
    </>
  )
}

export default Posts
