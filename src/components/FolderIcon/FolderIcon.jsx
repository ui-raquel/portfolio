import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import styles from './FolderIcon.module.css'

function FolderIcon({ projeto, dimmed }) {
  const [hovered, setHovered] = useState(false)
  const navigate = useNavigate()

  return (
    <motion.div
      className={`${styles.folder} ${dimmed ? styles.dimmed : ''}`}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={() => navigate(`/projects/${projeto.id}`)}
      whileHover={{ scale: 1.08 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className={styles.iconWrapper}>
        <img
          src={projeto.icone}
          alt={projeto.nome}
          className={styles.icon}
        />
        <AnimatePresence>
          {hovered && (
            <motion.div
              className={styles.tooltip}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.2 }}
            >
              {projeto.descricao}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <span className={styles.nome}>{projeto.nome}</span>
    </motion.div>
  )
}

export default FolderIcon