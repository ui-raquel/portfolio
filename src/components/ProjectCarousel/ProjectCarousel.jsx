import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { projetos } from '../../data/projetos'
import TechIcon from '../TechIcon/TechIcon'
import styles from './ProjectCarousel.module.css'

const destacados = ['symbia', 'myvito', 'ecoscan']

function ProjectCarousel() {
    const carouselRef = useRef(null)
    const projetosDestacados = projetos.filter(p => destacados.includes(p.id))

    return (
        <div className={styles.wrapper}>
            <div ref={carouselRef} className={styles.carousel}>
                {projetosDestacados.map((projeto, i) => (
                    <motion.div
                        key={projeto.id}
                        className={styles.card}
                        style={{
                            '--card-primary': projeto.cores?.primary || 'var(--red)',
                        }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        whileHover={{ y: -6, transition: { duration: 0.2 } }}
                    >
                        <div className={styles.cardTop}>
                            <img
                                src={projeto.icone}
                                alt={projeto.nome}
                                className={styles.cardIcon}
                            />
                            <div className={styles.cardTechs}>
                                {projeto.tecnologias.slice(0, 4).map(tech => (
                                    <span key={tech} className={styles.techIcon}>
                                        <TechIcon id={tech} size={14} />
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className={styles.cardBody}>
                            <h3 className={styles.cardNome}>{projeto.nome}</h3>
                            <p className={styles.cardDesc}>{projeto.descricao}</p>
                        </div>

                        <div className={styles.cardActions}>
                            <Link
                                to={`/projects/${projeto.id}`}
                                className={styles.btnPrimary}
                            >
                                ver projeto →
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className={styles.verTodos}>
                <Link to="/projects" className={styles.verTodosLink}>
                    ver todos os projetos →
                </Link>
            </div>
        </div>
    )
}

export default ProjectCarousel