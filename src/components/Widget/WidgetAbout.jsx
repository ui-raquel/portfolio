import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Widget.module.css'

function WidgetAbout() {
  const [visible, setVisible] = useState(true)

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className={styles.alertBox}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.85 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <div className={styles.alertHeader}>
            <div className={styles.alertDots}>
              <span className={styles.dot1} />
              <span className={styles.dot2} />
              <span className={styles.dot3} />
            </div>
            <p className={styles.alertTitle}>nota.txt</p>
          </div>
          <p className={styles.alertText}>
            Estes projetos são de contexto <span>académico</span>, de fases diferentes do meu percurso — é possível ver uma <span>evolução</span> clara.<br /><br />
            Portfólio em <span>constante atualização</span> ✦
          </p>
          <button className={styles.alertBtn} onClick={() => setVisible(false)}>
            OK
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default WidgetAbout