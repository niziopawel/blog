import { useState } from 'react'
import './Hamburger.css'

function Hamburger() {
  const [isActive, setIsActvie] = useState(false)

  return (
    <div
      className={`hamburger ${isActive ? 'hamburger--active' : ''}`}
      onClick={() => setIsActvie(!isActive)}
    >
      <span className="hamburger__line"></span>
      <span className="hamburger__line"></span>
      <span className="hamburger__line"></span>
    </div>
  )
}

export default Hamburger
