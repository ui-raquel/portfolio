import { motion, AnimatePresence } from 'framer-motion'
import styles from './PostIt.module.css'

function PostIt({ texto }) {
  return (
    <motion.div
      className={styles.postit}
      drag
      dragMomentum={false}
      whileDrag={{ scale: 1.05, rotate: 0, zIndex: 100 }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
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
    </motion.div>
  )
}

export default PostIt