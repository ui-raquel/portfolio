import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import styles from './Summary.module.css'
import Navbar from '../../components/Navbar/Navbar'
import ProjectCarousel from '../../components/ProjectCarousel/ProjectCarousel'



// const projetos = {
//   default: "Os projetos apresentados foram desenvolvidos em contexto académico, no âmbito da licenciatura em Multimédia e Tecnologias da Comunicação. Cada trabalho reflete a aplicação prática de UX/UI design combinada com competências técnicas em front-end development.",
//   ativo: "Plataforma digital dedicada à promoção do bem-estar físico e mental da população sénior, através de desafios diários, jogos interativos e conteúdos educativos.",
//   vito: "Proposta de prototipagem desenvolvida em Figma, que visa reforçar a ligação entre a marca VITO TOOLS, os seus clientes B2B e os consumidores finais.",
//   evento: "Prototipagem em Figma de dois websites e uma aplicação mobile de suporte a um evento desportivo.",
//   eco: "Aplicação mobile focada no consumo consciente e na sustentabilidade, prototipada em Figma e desenvolvida com HTML, CSS e PHP.",
//   tea: "Plataforma digital concebida para criar uma comunidade envolvente entre leitores que não dispensam de uma chávena de chá.",
//   mutemind: "Conceito de aplicação mobile com o objetivo de promover o bem-estar psicológico dos utilizadores."
// }

const skills = {
  design: [
    { nome: 'figma', valor: 97 },
    { nome: 'affinity', valor: 75 },
    { nome: 'illustrator', valor: 70 },
    { nome: 'photoshop', valor: 60 },
    { nome: 'after effects', valor: 45 },
  ],
  frontend: [
    { nome: 'html', valor: 100 },
    { nome: 'css', valor: 100 },
    { nome: 'tailwind', valor: 90 },
    { nome: 'react', valor: 85 },
    { nome: 'javascript', valor: 75 },
  ]
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
}

const fromLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } }
}

const fromRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } }
}

function AnimatedBlock({ children, variant, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      variants={variant}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}

function SkillItem({ nome, valor }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <li ref={ref} className={styles.skillItem}>
      <span className={styles.skillNome}>{nome}</span>
      <div className={styles.progressBar}>
        <motion.div
          className={styles.progressFill}
          initial={{ width: 0 }}
          animate={inView ? { width: `${valor}%` } : { width: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        />
      </div>
    </li>
  )
}

function Summary() {
  // const [projetoAtivo, setProjetoAtivo] = useState('default')

  return (
    <section className={styles.summary}>
      <Navbar></Navbar>
      <div className={styles.quoteSection}>
        <AnimatedBlock variant={fadeUp}>
          <p className={styles.quote}>
            Olá, chamo-me <Link to="/about" className={styles.nomeLink}>Raquel</Link> e sou UI/UX designer com foco em design centrado no utilizador!
          </p>
        </AnimatedBlock>
      </div>

      <div className={styles.formacaoSection}>
        <AnimatedBlock variant={fromLeft}>
          <h2 className={styles.sectionTitle}>Formação e Skills</h2>
        </AnimatedBlock>
        <AnimatedBlock variant={fromRight} delay={0.1}>
          <p className={styles.text}>
            Frequentei a Licenciatura em Multimédia e Tecnologias da Comunicação na Universidade de Aveiro entre 2022/23 e 2024/25.
            Esta formação deu-me uma base multidisciplinar que combina áreas da comunicação, tecnologia e expressão visual. <br></br><br></br>
            Atualmente, frequento o Mestreado em Comunicação e Tecnologias Web na Universidade de Aveiro, aprofundando os meus conhecimentos em design de interfaces e desenvolvimento front-end,
            com o objetivo de criar experiências digitais envolventes e funcionais.
          </p>
        </AnimatedBlock>
      </div>

      <div className={styles.skillsSection}>
        <span className={styles.bigTitle} aria-hidden="true">skills</span>

        <div className={styles.skillsContent}>
          <AnimatedBlock variant={fromLeft}>
            <p className={styles.text}>
              Com experiência em design de interfaces e desenvolvimento front-end, integro essas duas vertentes na maioria dos projetos que desenvolvo.
            </p>
          </AnimatedBlock>
          <div className={styles.skillsGrupos}>
            <AnimatedBlock variant={fromRight}>
              <div className={styles.skillsGrupo}>
                <h3 className={styles.skillsTitle}>Design Gráfico</h3>
                <ul className={styles.skillsList}>
                  {skills.design.map(skill => (
                    <SkillItem key={skill.nome} nome={skill.nome} valor={skill.valor} />
                  ))}
                </ul>
              </div>
            </AnimatedBlock>
            <AnimatedBlock variant={fromRight} delay={0.2}>
              <div className={styles.skillsGrupo}>
                <h3 className={styles.skillsTitle}>Front-End</h3>
                <ul className={styles.skillsList}>
                  {skills.frontend.map(skill => (
                    <SkillItem key={skill.nome} nome={skill.nome} valor={skill.valor} />
                  ))}
                </ul>
              </div>
            </AnimatedBlock>
          </div>
        </div>
      </div>


      <div className={styles.projetosSection}>
        <span className={styles.bigTitleRight} aria-hidden="true">destaque</span>
        <div className={styles.projetosContent}>
          <AnimatedBlock variant={fadeUp}>
            <h2 className={styles.sectionTitle}>Projetos</h2>
          </AnimatedBlock>
          <ProjectCarousel />
        </div>
      </div>

    </section>
  )
}

export default Summary