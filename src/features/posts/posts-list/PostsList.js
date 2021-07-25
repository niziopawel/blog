import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useQuery } from '../../../hooks/useQuery'
import { useLikedPosts } from '../../../hooks/useLikedPosts'
import PostCard from '../post-card/PostCard'
import Pagination from '../../../components/pagination'
import Spinner from '../../../components/spinner'
import { fetchPosts, selectAllPosts } from '../postsSlice'
import './Posts.css'

function PostsList() {
  const query = useQuery()
  const dispatch = useDispatch()
  const [currentPage, setCurrentPage] = useState(query.get('page') || 1)

  const posts = useSelector(selectAllPosts)
  const { isLoading, error } = useSelector(state => state.posts)
  const [itemsPerPage] = useState(20)
  const { likedPosts, handlePostLike } = useLikedPosts()

  const getPaginatedPosts = () => {
    const startIndex = currentPage * itemsPerPage - itemsPerPage
    const endIndex = startIndex + itemsPerPage

    return posts.slice(startIndex, endIndex)
  }

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

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
            <PostCard
              key={post.id}
              post={post}
              isPostLiked={likedPosts[post.id] ? true : false}
              onPostLikeClick={handlePostLike}
            />
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
