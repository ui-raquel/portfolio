import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FolderIcon from '../components/FolderIcon/FolderIcon'
import Dock from '../components/Dock/Dock'
import { projetos } from '../data/projetos'
import styles from './Projects.module.css'
import { useNavigate } from 'react-router-dom'

function Projects() {
  const [techAtiva, setTechAtiva] = useState(null)
  const now = new Date()
  const hora = now.toLocaleTimeString('pt-PT', { hour: '2-digit', minute: '2-digit' })
  const navigate = useNavigate()


  return (
    <div className={styles.desktop}>

      <div className={styles.menuBar}>
        <div className={styles.menuBar}>
          <div className={styles.menuLeft}>
            <button className={styles.backBtn} onClick={() => navigate('/')}>
              ←
            </button>
            <span className={styles.menuNome}>Raquel Neves</span>
          </div>
          <span className={styles.menuHora}>{hora}</span>
        </div>
        <span className={styles.menuNome}>Raquel Neves</span>
        <span className={styles.menuHora}>{hora}</span>
      </div>

      <motion.div
        className={styles.grid}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <AnimatePresence>
          {projetos.map((projeto, i) => (
            <motion.div
              key={projeto.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <FolderIcon
                projeto={projeto}
                dimmed={techAtiva !== null && !projeto.tecnologias.includes(techAtiva)}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <Dock ativa={techAtiva} onSelect={setTechAtiva} />
    </div>
  )
}

export default Projects