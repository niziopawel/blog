import './Hamburger.css'

function Hamburger({ isMenuOpen, onToggleMenu }) {
  return (
    <div
      className={`hamburger ${isMenuOpen ? 'hamburger--active' : ''}`}
      onClick={() => onToggleMenu()}
    >
      <span className="hamburger__line"></span>
      <span className="hamburger__line"></span>
      <span className="hamburger__line"></span>
    </div>
  )
}

export default Hamburger
