import { useState } from 'react'
import { Link } from 'react-router-dom'
import Hamburger from '../hamburger'
import './Header.css'

const navLinks = [
  { title: 'Blog', path: '/blog' },
  { title: 'About', path: '/about' },
  { title: 'Sign in', path: '/signin' },
]

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__logo">
          <h2>Blog</h2>
        </div>
        <nav
          className={`header__navigation ${
            isMenuOpen ? 'header__navigation--open' : ''
          }`}
        >
          <ul>
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.path}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <Hamburger isMenuOpen={isMenuOpen} onToggleMenu={toggleMenu} />
      </div>
    </header>
  )
}

export default Header
