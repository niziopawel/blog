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
        onClick={handleClick}
        className={getLikeClassNames()}
        {...restProps}
      />
    )
  }

  return (
    <AiOutlineHeart
      onClick={handleClick}
      className={getLikeClassNames()}
      {...restProps}
    />
  )
}
export default Like
