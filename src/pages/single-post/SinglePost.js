import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { URL } from '../../config/API'
import './SinglePost.css'

function SinglePost() {
  const { postId } = useParams()
  const post = useSelector(state =>
    state.posts.data.find(post => post.id == postId),
  )

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(async () => {
    if (!post) {
      setIsLoading(true)
      try {
        const response = await window.fetch(`${URL}/posts/${id}`)
        const post = await response.json()

        setPost(post)
        setIsLoading(false)
      } catch (err) {
        setError(err)
      }
    }
  }, [])

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

export default SinglePost
