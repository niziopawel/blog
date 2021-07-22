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

Card.Image = function CardImage({ className, src, alt, ...restProps }) {
  return (
    <img
      className={`card__image ${className ? className : ''}`}
      src={src}
      alt={alt}
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

Card.Date = function CardDate({ children }) {
  return <time className="card__date">{children}</time>
}

export default Card
