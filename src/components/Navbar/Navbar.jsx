import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Navbar.module.css'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [onHero, setOnHero] = useState(true)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 2
      setScrolled(window.scrollY > 50)
      setOnHero(window.scrollY < heroHeight)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (location.pathname !== '/') {
      setOnHero(false)
    } else {
      setOnHero(window.scrollY < window.innerHeight * 0.8)
    }
  }, [location])

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''} ${onHero ? styles.onHero : styles.offHero}`}>
      <Link to="/" className={styles.logo}>
        <img
          src="/src/assets/rn.svg"
          alt="Raquel Neves"
          className={styles.logoImg}
        />
      </Link>

      <ul className={styles.links}>
        <li>
          <Link to="/about" className={styles.link}>
            quem sou
          </Link>
        </li>
        <li>
          <Link to="/projects" className={styles.link}>
            projetos
          </Link>
        </li>
        <li>
          <Link to="/contact" className={styles.link}>
            contactos
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar