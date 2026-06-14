import { motion, AnimatePresence } from 'framer-motion'
import styles from './PostIt.module.css'

function PostIt({ texto }) {
  return (
    <div className={styles.postit}>
      <div className={styles.header}>
        <span className={styles.lines} />
      </div>
      <AnimatePresence mode="wait">
        <motion.p
          key={texto}
          className={styles.texto}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.25 }}
        >
          {texto}
        </motion.p>
      </AnimatePresence>
    </div>
  )
}

export default PostIt