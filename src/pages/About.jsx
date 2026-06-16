import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './About.module.css'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: 'easeOut', delay }
  })
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

const timeline = [
  {
    ano: '22/23',
    texto: 'Foi neste ano letivo que iniciei a minha licenciatura em Multimédia e Tecnologias da Comunicação na Universidade de Aveiro. Dei os primeiros passos no mundo do design digital, com destaque para o Figma, onde comecei a explorar o design de interfaces e aplicações. Também fui introduzida ao desenvolvimento web, aprendendo as bases de HTML e CSS.',
    tags: ['Figma', 'HTML', 'CSS'],
  },
  {
    ano: '23/24',
    texto: 'Neste segundo ano da licenciatura, expandi os meus conhecimentos técnicos ao aprender as bases de JavaScript, além de explorar bases de dados com MySQL e PHP. Participei num projeto multidisciplinar em grupo (CBL), que me permitiu aplicar conceitos de trabalho colaborativo e integrar diferentes áreas do conhecimento.',
    tags: ['JavaScript', 'MySQL', 'PHP', 'CBL'],
  },
  {
    ano: '24/25',
    texto: 'No primeiro semestre, realizei o meu Erasmus em Leuven, Bélgica, onde aprofundei conhecimentos em bases de dados, teorias da comunicação, psicologia das redes sociais e publicidade, desenvolvendo também soft skills como adaptação e comunicação numa língua estrangeira. No segundo semestre, foquei-me na construção da minha marca pessoal e participei no projeto final com a VITO TOOLS.',
    tags: ['Erasmus', 'Figma', 'Prototipagem'],
  },
  {
    ano: '25/26',
    texto: 'Primeiro ano de Mestrado em Comunicação e Tecnologias Web na Universidade de Aveiro. Aprofundei conhecimentos em interfaces avançadas com ReactJS, integração de APIs, desenvolvimento do projeto Symbia com integração de sensores, desenvolvimento de um jogo em Arduino com C++, e aprofundei conhecimentos em acessibilidade digital e conformidade.',
    tags: ['ReactJS', 'APIs', 'Arduino', 'C++', 'Acessibilidade'],
  },
  {
    ano: '26/27',
    futuro: true,
    texto: 'Conclusão do Mestrado em Comunicação e Tecnologias Web com projeto próprio. Um ano dedicado a explorar novas tecnologias como Flutter, Swift e Cloud Computing, alargando horizontes para o desenvolvimento móvel nativo e infraestruturas cloud.',
    tags: ['Flutter', 'Swift', 'Cloud Computing', 'Projeto de Mestrado'],
  },
]

function About() {
  const h1Ref = useRef(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [hovering, setHovering] = useState(false)

  const handleMouseMove = (e) => {
    const rect = h1Ref.current.getBoundingClientRect()
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <div className={styles.page}>

      {/* HERO */}
      <section className={styles.hero}>
        <motion.span
          className={styles.heroHello}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
        >
          olá, sou a
        </motion.span>

        <h1
          ref={h1Ref}
          className={styles.heroNome}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          style={{
            backgroundImage: hovering
              ? `radial-gradient(circle 150px at ${mousePos.x}px ${mousePos.y}px, var(--red) 50%, var(--black) 50%)`
              : 'none',
            WebkitBackgroundClip: hovering ? 'text' : 'unset',
            WebkitTextFillColor: hovering ? 'transparent' : 'var(--black)',
            backgroundClip: hovering ? 'text' : 'unset',
            color: hovering ? 'transparent' : 'var(--black)',
          }}
        >
          Raquel<br />Neves
        </h1>

        <motion.p
          className={styles.heroFrase}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.35}
        >
          apaixonada por design UI/UX que une criatividade, empatia e propósito para criar um mundo digital mais inclusivo e acessível.
        </motion.p>

        <div className={styles.heroMockupWrapper}>
          <img
            src="/../public/assets/foto-raquel.png"
            alt="Raquel Neves"
            className={styles.heroMockup}
          />
          <img
            src="/../public/assets/foto-raquel-cores.png"
            alt="Raquel Neves a cores"
            className={styles.heroMockupColor}
          />
        </div>
      </section>

      {/* SOBRE */}
      <section className={styles.sobre}>
        <AnimatedBlock variant={fromLeft}>
          <div className={styles.sobreBloco}>
            <h2 className={styles.sectionTitle}>Sobre mim</h2>
            <p className={styles.text}>
              Formei-me em Multimédia e Tecnologias da Comunicação na Universidade de Aveiro, onde desenvolvi competências que vão desde o design gráfico até ao desenvolvimento front-end. Aprendi a importância de unir criatividade e funcionalidade para construir soluções que realmente façam sentido para os utilizadores.
            </p>
            <p className={styles.text}>
              Para além das habilidades técnicas, valorizo o crescimento pessoal e o desenvolvimento constante de soft skills como a comunicação eficaz e o trabalho em equipa.
            </p>
          </div>
        </AnimatedBlock>
        <AnimatedBlock variant={fromRight} delay={0.1}>
          <div className={styles.sobreBloco}>
            <h2 className={styles.sectionTitle}>O que me move</h2>
            <p className={styles.text}>
              Acredito no poder do design para tornar o mundo digital mais humano e acessível. O que me move é a convicção de que a tecnologia e o design devem ser acessíveis, humanos e conscientes.
            </p>
            <p className={styles.text}>
              Gosto especialmente de me envolver em projetos que valorizem a diversidade, a sustentabilidade, o bem-estar psicológico e físico e a inovação social. O meu grande objetivo é unir a minha criatividade e os meus conhecimentos a uma missão maior, contribuindo para um mundo mais justo, empático e conectado.
            </p>
          </div>
        </AnimatedBlock>
      </section>

      {/* TIMELINE */}
      <section className={styles.timeline}>
        <AnimatedBlock variant={fadeUp}>
          <h2 className={styles.sectionTitle}>Percurso</h2>
          <p className={styles.timelineIntro}>
            Uma seleção de projetos desenvolvidos em contexto académico, refletindo a aplicação prática de UX/UI design combinada com competências técnicas em front-end development.
          </p>
        </AnimatedBlock>

        <div className={styles.timelineList}>
          {timeline.map((item, i) => (
            <AnimatedBlock key={item.ano} variant={i % 2 === 0 ? fromLeft : fromRight} delay={0.1}>
              <div className={`${styles.timelineItem} ${item.futuro ? styles.timelineItemFuturo : ''}`}>
                <div className={styles.timelineAno}>
                  <span>{item.ano}</span>
                  <div className={styles.timelineLine} />
                </div>
                <div className={styles.timelineContent}>
                  <p className={styles.text}>{item.texto}</p>
                  <div className={styles.tags}>
                    {item.tags.map(tag => (
                      <span key={tag} className={`${styles.tag} ${item.futuro ? styles.tagFuturo : ''}`}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedBlock>
          ))}
        </div>
      </section>

    </div>
  )
}

export default About