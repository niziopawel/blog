import { Link } from 'react-router-dom'
import Card from '../../../components/card'
import Like from '../../../components/like'
import './PostCard.css'

function PostCard({ post, isPostLiked, onPostLikeClick }) {
  return (
    <Card>
      <Card.Image src="https://aduu.pl/wp-content/uploads/2019/04/placeholder-image-600x450.jpg"></Card.Image>
      <Card.Content>
        <Card.Title>
          <Link to={`post/${post.id}`}>{post.title.substr(0, 20)}</Link>
        </Card.Title>
        <Card.Date>May 19, 2021</Card.Date>
        <Like
          isLiked={isPostLiked}
          className="post-card__like"
          onClick={() => onPostLikeClick(post.id)}
        />
      </Card.Content>
    </Card>
  )
}

export default PostCard
