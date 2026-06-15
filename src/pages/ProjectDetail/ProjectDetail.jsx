import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { projetos } from '../../data/projetos'
import styles from './ProjectDetail.module.css'

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay = 0) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.7, ease: 'easeOut', delay }
    })
}

function ProjectDetail() {
    const { id } = useParams()
    const navigate = useNavigate()
    const projeto = projetos.find(p => p.id === id)

    if (!projeto) return <div>Projeto não encontrado.</div>

    const { cores, hero, contexto, features, mockups } = projeto

    return (
        <div className={styles.page} style={{ '--p-primary': cores.primary, '--p-secondary': cores.secondary, '--p-bg': cores.bg, '--p-text': cores.text, '--p-textLight': cores.textLight }}>

            {/* BACK */}
            <button className={styles.backBtn} onClick={() => navigate('/projects')}>
                ← projetos
            </button>

            {/* HERO */}
            <section className={styles.hero}>
                {hero.logo && (
                    <img
                        src={hero.logo}
                        alt=""
                        aria-hidden="true"
                        className={styles.heroBgLogo}
                    />
                )}
                <motion.p
                    className={styles.heroSub}
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={0.1}
                >
                    {hero.sub}
                </motion.p>
                <motion.h1
                    className={styles.heroNome}
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={0.2}
                >
                    {projeto.nome}
                </motion.h1>
                <motion.p
                    className={styles.heroFrase}
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={0.35}
                >
                    {hero.frase}
                </motion.p>
                {hero.equipa && (
                    <motion.p
                        className={styles.heroEquipa}
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        custom={0.45}
                    >
                        {hero.equipa}
                    </motion.p>
                )}
            </section>

            {/* CONTEXTO */}
            <section className={styles.contexto}>
                <motion.h2
                    className={styles.sectionTitle}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    Contexto
                </motion.h2>
                <motion.p
                    className={styles.contextoText}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={0.15}
                >
                    {contexto}
                </motion.p>
            </section>

            {/* CAPA */}
            {projeto.capa && (
                <motion.div
                    className={styles.capa}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <img
                        src={projeto.capa}
                        alt={`${projeto.nome} capa`}
                        className={styles.capaImg}
                    />
                </motion.div>
            )}

            {/* FEATURES */}
            <section className={styles.features}>
                <motion.h2
                    className={styles.sectionTitle}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    Features
                </motion.h2>
                <div className={styles.featuresGrid}>
                    {features.map((f, i) => (
                        <motion.div
                            key={f.titulo}
                            className={styles.featureCard}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={i * 0.1}
                            whileHover={{ y: -6, transition: { duration: 0.2 } }}
                        >
                            <span className={styles.featureEmoji}>{f.emoji}</span>
                            <h3 className={styles.featureTitulo}>{f.titulo}</h3>
                            <p className={styles.featureDesc}>{f.descricao}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* MOCKUPS */}
            {mockups && mockups.length > 0 && (
                <section className={styles.mockups}>
                    <motion.h2
                        className={styles.sectionTitle}
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        Mockups
                    </motion.h2>
                    <div className={styles.mockupsGrid}>
                        {mockups.map((src, i) => (
                            <motion.img
                                key={i}
                                src={src}
                                alt={`${projeto.nome} mockup ${i + 1}`}
                                className={styles.mockupImg}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={i * 0.15}
                            />
                        ))}
                    </div>
                </section>
            )}

        </div>
    )
}

export default ProjectDetail