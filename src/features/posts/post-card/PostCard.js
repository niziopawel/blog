import { Link } from 'react-router-dom'
import Card from '../../../components/card'

function Post({ post }) {
  return (
    <Card>
      <Card.Image src="https://aduu.pl/wp-content/uploads/2019/04/placeholder-image-600x450.jpg"></Card.Image>
      <Card.Content>
        <Card.Title>
          <Link to={`post/${post.id}`}>{post.title.substr(0, 20)}</Link>
        </Card.Title>
        <Card.Date>May 19, 2021</Card.Date>
      </Card.Content>
    </Card>
  )
}

export default Post
