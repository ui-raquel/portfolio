import { motion } from 'framer-motion'
import TechIcon from '../TechIcon/TechIcon'
import { tecnologias } from '../../data/projetos'
import styles from './Dock.module.css'

function Dock({ ativa, onSelect }) {
  return (
    <div className={styles.dockWrapper}>
      <div className={styles.dock}>
        {tecnologias.map((tech) => (
          <motion.button
            key={tech.id}
            className={`${styles.dockItem} ${ativa === tech.id ? styles.active : ''}`}
            onClick={() => onSelect(ativa === tech.id ? null : tech.id)}
            whileHover={{ y: -12, scale: 1.2 }}
            transition={{ type: 'spring', stiffness: 400, damping: 18 }}
            title={tech.nome}
          >
            <div className={styles.iconWrapper}>
              <TechIcon id={tech.id} size={32} />
            </div>
            <span className={styles.dockLabel}>{tech.nome}</span>
            {ativa === tech.id && <span className={styles.dot} />}
          </motion.button>
        ))}
      </div>
    </div>
  )
}

export default Dock