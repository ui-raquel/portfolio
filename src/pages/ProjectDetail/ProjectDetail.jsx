import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { projetos } from '../../data/projetos'
import styles from './ProjectDetail.module.css'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
    BotMessageSquare, Wrench, Clipboard, WifiHigh, MapPin,
    Globe, MonitorPlay, Smartphone,
    Barcode, ListChecks, Trophy, Star,
    Coffee, Map, UsersRound, MessagesSquare, BookOpen,
    Utensils, Funnel, Brain, NotebookPen,
    CookingPot, Images, HeartPulse, Sparkle,
    Database, Cpu, ChartArea
} from 'lucide-react'

const iconMap = {
    BotMessageSquare: <BotMessageSquare size={32} weight="bold" />,
    Wrench: <Wrench size={32} weight="bold" />,
    Clipboard: <Clipboard size={32} weight="bold" />,
    WifiHigh: <WifiHigh size={32} weight="bold" />,
    MapPin: <MapPin size={32} weight="bold" />,
    Globe: <Globe size={32} weight="bold" />,
    MonitorPlay: <MonitorPlay size={32} weight="bold" />,
    Smartphone: <Smartphone size={32} weight="bold" />,
    Barcode: <Barcode size={32} weight="bold" />,
    ListChecks: <ListChecks size={32} weight="bold" />,
    Trophy: <Trophy size={32} weight="bold" />,
    Star: <Star size={32} weight="bold" />,
    Coffee: <Coffee size={32} weight="bold" />,
    Map: <Map size={32} weight="bold" />,
    UsersRound: <UsersRound size={32} weight="bold" />,
    MessagesSquare: <MessagesSquare size={32} weight="bold" />,
    BookOpen: <BookOpen size={32} weight="bold" />,
    Utensils: <Utensils size={32} weight="bold" />,
    Funnel: <Funnel size={32} weight="bold" />,
    Brain: <Brain size={32} weight="bold" />,
    NotebookPen: <NotebookPen size={32} weight="bold" />,
    CookingPot: <CookingPot size={32} weight="bold" />,
    Images: <Images size={32} weight="bold" />,
    HeartPulse: <HeartPulse size={32} weight="bold" />,
    Sparkle: <Sparkle size={32} weight="bold" />,
    Database: <Database size={32} weight="bold" />,
    Cpu: <Cpu size={32} weight="bold" />,
    ChartArea: <ChartArea size={32} weight="bold" />,
}



gsap.registerPlugin(ScrollTrigger)

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

    const capaRef = useRef(null)

    useEffect(() => {
        if (!capaRef.current) return

        gsap.to(capaRef.current, {
            yPercent: -20,
            ease: 'none',
            scrollTrigger: {
                trigger: capaRef.current,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
            }
        })

        return () => ScrollTrigger.getAll().forEach(t => t.kill())
    }, [])

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
                        style={hero.logoStyle || {}}
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
                <div className={styles.capa}>
                    <img
                        ref={capaRef}
                        src={projeto.capa}
                        alt={`${projeto.nome} capa`}
                        className={styles.capaImg}
                    />
                </div>
            )}

            {/* FEATURES + MOCKUPS */}
            <section className={styles.features}>
                {features.map((f, i) => {
                    const Icon = iconMap[f.icon]
                    return (
                        <motion.div
                            key={f.titulo}
                            className={`${styles.featureRow} ${i % 2 !== 0 ? styles.featureRowReverse : ''}`}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={0.1}
                        >
                            <div className={styles.featureText}>
                                <p className={styles.featureIndex}>  {Icon && <span style={{ color: cores.primary }}>{Icon}</span>} {f.titulo}</p>
                                <p className={styles.featureDesc}>{f.descricao}</p>
                            </div>
                            {mockups[i] && (
                                <motion.div
                                    className={styles.featureMockup}
                                    initial={{ opacity: 0, x: i % 2 === 0 ? 60 : -60 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
                                >
                                    <img
                                        src={mockups[i]}
                                        alt={f.titulo}
                                        className={styles.mockupImg}
                                    />
                                </motion.div>
                            )}
                        </motion.div>
                    )
                })}
            </section>

        </div>
    )
}

export default ProjectDetail