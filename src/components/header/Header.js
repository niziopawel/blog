import { Link } from 'react-router-dom'
import Hamburger from '../hamburger'
import './Header.css'

const navLinks = [
  { title: 'Blog', path: '/blog' },
  { title: 'About', path: '/about' },
  { title: 'Sign in', path: '/signin' },
]

function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__logo">
          <h2>Blog</h2>
        </div>
        <nav className="header__navigation">
          <ul>
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.path}>{link.title}</Link>
              </li>
            ))}
          </ul>
          <Hamburger />
        </nav>
      </div>
    </header>
  )
}

export default Header
