import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useQuery } from '../../../hooks/useQuery'
import PostCard from '../post-card/PostCard'
import Pagination from '../../../components/pagination'
import Spinner from '../../../components/spinner'
import { fetchPosts, selectAllPosts } from '../postsSlice'
import './Posts.css'

function PostsList() {
  const [itemsPerPage] = useState(20)
  const query = useQuery()
  const [currentPage, setCurrentPage] = useState(query.get('page') || 1)
  const posts = useSelector(selectAllPosts)
  const { isLoading, error } = useSelector(state => state.posts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  const getPaginatedPosts = () => {
    const startIndex = currentPage * itemsPerPage - itemsPerPage
    const endIndex = startIndex + itemsPerPage

    return posts.slice(startIndex, endIndex)
  }

  if (isLoading) {
    return <Spinner />
  }

  if (error) {
    return <ErrorMessage>{error.message}</ErrorMessage>
  }

  return (
    <>
      <section className="post-list">
        {posts.length > 0 &&
          getPaginatedPosts().map(post => (
            <PostCard key={post.id} post={post} />
          ))}
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

export default PostsList
