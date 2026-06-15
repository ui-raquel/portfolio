import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Navbar.module.css'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [onHero, setOnHero] = useState(true)
  const location = useLocation()

  useEffect(() => {
    if (location.pathname !== '/') {
      setScrolled(true)
      setOnHero(false)
      return
    }

    const handleScroll = () => {
      const heroHeight = window.innerHeight * 2
      setScrolled(window.scrollY > 50)
      setOnHero(window.scrollY < heroHeight)
    }

    // reset ao entrar na homepage
    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [location.pathname])

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
          <Link to="/projects" className={styles.link}>
            projetos
          </Link>
        </li>
        <li>
          <Link to="/about" className={styles.link}>
            quem sou
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