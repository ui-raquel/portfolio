import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import styles from './Widget.module.css'

function WidgetContact() {
    const navigate = useNavigate()

    return (
        <motion.div
            className={styles.contactIcon}
            onClick={() => navigate('/contact')}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
        >
            <img
                src="/src/assets/files/phone.webp" alt="contactos" className={styles.contactImg} 
                alt="contactos"
                className={styles.contactImg}
            />
            <span className={styles.contactLabel}>contactos</span>
        </motion.div>
    )
}

export default WidgetContact