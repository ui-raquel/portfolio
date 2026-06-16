import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import styles from './Widget.module.css'

function WidgetFiles() {
  const navigate = useNavigate()

  return (
    <>
      <motion.div
  className={`${styles.fileIcon} ${styles.fileQuemSou}`}
  onClick={() => navigate('/about')}
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5, delay: 0.6 }}
>
  <img src="/assets/files/photo-booth.webp" alt="quem sou" className={styles.fileImg} />
  <span className={styles.fileName}>Quem Sou</span>
</motion.div>

<motion.div
  className={`${styles.fileIcon} ${styles.fileContactos}`}
  onClick={() => navigate('/contact')}
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5, delay: 0.7 }}
>
  <img src="/assets/files/phone.webp" alt="contactos" className={styles.fileImg} />
  <span className={styles.fileName}>Contactos</span>
</motion.div>
    </>
  )
}

export default WidgetFiles