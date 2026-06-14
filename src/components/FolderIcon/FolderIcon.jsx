import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import styles from './FolderIcon.module.css'

function FolderIcon({ projeto, dimmed, onHover, onLeave }) {
  const navigate = useNavigate()

  return (
    <motion.div
      className={`${styles.folder} ${dimmed ? styles.dimmed : ''}`}
      onHoverStart={() => onHover(projeto.descricao)}
      onHoverEnd={onLeave}
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
      </div>
      <span className={styles.nome}>{projeto.nome}</span>
    </motion.div>
  )
}

export default FolderIcon