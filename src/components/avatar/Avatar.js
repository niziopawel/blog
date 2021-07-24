import './Avatar.css'

function Avatar({ size, ...restProps }) {
  return (
    <div className="avatar">
      <img className="avatar__img" {...restProps} />
    </div>
  )
}

export default Avatar
