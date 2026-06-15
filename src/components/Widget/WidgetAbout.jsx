import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Widget.module.css'

function WidgetAbout() {
  const [visible, setVisible] = useState(true)


  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className={styles.notification}
          initial={{ opacity: 0, x: 120 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 120 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <div className={styles.notificationHeader}>
            <div className={styles.notificationMeta}>
              <span className={styles.notificationApp}>Notificação</span>
              <span className={styles.notificationTime}>agora</span>
            </div>
            <button className={styles.notificationClose} onClick={() => setVisible(false)}>✕</button>
          </div>
          <p className={styles.notificationText}>
            Estes projetos são de contexto <span>académico</span>, de fases diferentes do meu percurso — é possível ver uma <span>evolução</span> clara.<br /><br />
            Portfólio em <span>constante atualização</span> ✦
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default WidgetAbout