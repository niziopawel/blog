import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import './Like.css'

function Like({ isLiked, onClick, className, ...restProps }) {
  const handleClick = () => {
    onClick()
  }

  function getLikeClassNames() {
    return `like ${className ? className : ''}`
  }

  if (isLiked) {
    return (
      <AiFillHeart
        data-testid="like-active"
        onClick={handleClick}
        className={getLikeClassNames()}
        {...restProps}
      />
    )
  }

  return (
    <AiOutlineHeart
      data-testid="like-inactive"
      onClick={handleClick}
      className={getLikeClassNames()}
      {...restProps}
    />
  )
}
export default Like
