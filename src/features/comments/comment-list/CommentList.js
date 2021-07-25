import './CommentList.css'
import Card from '../../../components/card'
import AddCommentForm from '../add-comment-form'

function CommentList({ comments }) {
  return (
    <section className="comments">
      <h4 className="comments__header">Discussion ({comments.length})</h4>
      <AddCommentForm />
      <div className="comments__list">
        {comments.map(comment => (
          <Card key={comment.id} className="comments__single-comment">
            <Card.Content>
              <Card.UserAvatar
                src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
                alt="avatar"
              >
                {comment.email}
              </Card.UserAvatar>
              <Card.Description>{comment.body}</Card.Description>
              <Card.Date className="comment__date">1hour ago</Card.Date>
            </Card.Content>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default CommentList
