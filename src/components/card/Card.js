import Avatar from '../avatar'
import './Card.css'
function Card({ className, children, ...restProps }) {
  return (
    <div className={`card ${className ? className : ''}`} {...restProps}>
      {children}
    </div>
  )
}

Card.Content = function CardContent({ children, ...restProps }) {
  return (
    <div className="card__content" {...restProps}>
      {children}
    </div>
  )
}

Card.Image = function CardImage({ className, ...restProps }) {
  return (
    <img
      className={`card__image ${className ? className : ''}`}
      {...restProps}
    />
  )
}

Card.Title = function CardTitle({ children }) {
  return <div className="card__title">{children}</div>
}

Card.Subtitle = function CardSubtitle({ children }) {
  return <div className="card__subtitle">{children}</div>
}

Card.Date = function CardDate({ children, className }) {
  return (
    <time className={`card__date ${className ? className : ''}`}>
      {children}
    </time>
  )
}

Card.Description = function CardDescriptio({ children }) {
  return <p className="card__description">{children}</p>
}

Card.UserAvatar = function CardUserAvatar({ children, src, alt }) {
  return (
    <div className="card__user-avatar">
      <Avatar src={src} alt={alt} />
      {children}
    </div>
  )
}
export default Card
