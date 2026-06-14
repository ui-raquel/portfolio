import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import FolderIcon from '../components/FolderIcon/FolderIcon'
import Dock from '../components/Dock/Dock'
import PostIt from '../components/PostIt/PostIt'
import { projetos } from '../data/projetos'
import styles from './Projects.module.css'

const DEFAULT_TEXTO = 'passa o cursor numa pasta para saberes mais sobre cada projeto :)'

function Projects() {
  const [techAtiva, setTechAtiva] = useState(null)
  const [postitTexto, setPostitTexto] = useState(DEFAULT_TEXTO)
  const navigate = useNavigate()

  const now = new Date()
  const hora = now.toLocaleTimeString('pt-PT', { hour: '2-digit', minute: '2-digit' })

  return (
    <div className={styles.desktop}>

      <div className={styles.menuBar}>
        <div className={styles.menuLeft}>
          <button className={styles.backBtn} onClick={() => navigate('/')}>←</button>
          <span className={styles.menuNome}>Raquel Neves</span>
        </div>
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
                onHover={(descricao) => setPostitTexto(descricao)}
                onLeave={() => setPostitTexto(DEFAULT_TEXTO)}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <PostIt texto={postitTexto} />
      <Dock ativa={techAtiva} onSelect={setTechAtiva} />
    </div>
  )
}

export default Projects