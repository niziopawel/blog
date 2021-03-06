import { Link } from 'react-router-dom'
import Card from '../../../components/card'
import Like from '../../../components/like'
import { useDispatch } from 'react-redux'
import { handlePostLike } from '../postsSlice'
import './PostCard.css'

function PostCard({ post, isPostLiked }) {
  const dispatch = useDispatch()

  return (
    <Card data-testid={`post-card-${post.id}`}>
      <Card.Image src="https://aduu.pl/wp-content/uploads/2019/04/placeholder-image-600x450.jpg"></Card.Image>
      <Card.Content>
        <Card.Title>
          <Link to={`post/${post.id}`}>{post.title.substr(0, 20)}</Link>
        </Card.Title>
        <Card.Date>May 19, 2021</Card.Date>
        <Like
          isLiked={isPostLiked}
          className="post-card__like"
          onClick={() => dispatch(handlePostLike(post.id))}
        />
      </Card.Content>
    </Card>
  )
}

export default PostCard
