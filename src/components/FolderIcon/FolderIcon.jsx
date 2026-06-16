import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import styles from './FolderIcon.module.css'
import TechIcon from '../TechIcon/TechIcon'


function FolderIcon({ projeto, dimmed, onHover, onLeave }) {
  const navigate = useNavigate()
  const isMobile = window.innerWidth <= 768

  if (isMobile) {
  return (
    <motion.div
      className={`${styles.card} ${dimmed ? styles.dimmed : ''}`}
      onClick={() => navigate(`/projects/${projeto.id}`)}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className={styles.cardTop}>
        <img
          src={projeto.icone}
          alt={projeto.nome}
          className={styles.cardIcon}
        />
        <div className={styles.cardInfo}>
          <span className={styles.cardNome}>{projeto.nome}</span>
          <span className={styles.cardDesc}>{projeto.descricao}</span>
        </div>
      </div>
      <div className={styles.cardBottom}>
        <div className={styles.cardTechs}>
          {projeto.tecnologias.map(tech => (
            <span key={tech} className={styles.cardTech}>
              <TechIcon id={tech} size={14} />
            </span>
          ))}
        </div>
        <span className={styles.cardArrow}>→</span>
      </div>
    </motion.div>
  )
}

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