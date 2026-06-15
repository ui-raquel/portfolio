import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        &copy; {new Date().getFullYear()} Raquel Neves. Todos os direitos reservados.
      </p>
      <p>Vamos conectar-nos! | <a href="/contact" className={styles.link}>Contacto</a></p>
    </footer>
  )
}

export default Footer