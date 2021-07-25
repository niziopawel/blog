import './Button.css'

function Button({ children, variant, color, onClick, ...restProps }) {
  function getButtonClassNames() {
    return `button button--${variant ? variant : 'contained'} button--${
      color ? color : 'primary'
    }`
  }

  return (
    <button className={getButtonClassNames()} onClick={onClick} {...restProps}>
      {children}
    </button>
  )
}

export default Button
