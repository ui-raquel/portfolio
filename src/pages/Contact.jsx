import { useState } from 'react'
import { motion } from 'framer-motion'
import { EnvelopeSimple, LinkedinLogo, GithubLogo, InstagramLogo, Check } from '@phosphor-icons/react'
import styles from './Contact.module.css'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: 'easeOut', delay }
  })
}

const links = [
  {
    icon: EnvelopeSimple,
    label: 'email',
    value: 'raquelneves.design@gmail.com',
    href: 'mailto:raquelneves.design@gmail.com',
    copiable: true,
  },
  {
    icon: LinkedinLogo,
    label: 'linkedin',
    value: '/in/raquelgneves',
    href: 'https://linkedin.com/in/raquelgneves',
  },
  {
    icon: GithubLogo,
    label: 'github',
    value: 'ui-raquel',
    href: 'https://github.com/ui-raquel',
  },
  {
    icon: InstagramLogo,
    label: 'instagram',
    value: '@ui.raquel',
    href: 'https://instagram.com/ui.raquel',
  },
]

function Contact() {
  const [copied, setCopied] = useState(false)

  const handleCopy = (e) => {
    e.preventDefault()
    navigator.clipboard.writeText('raquelneves.design@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.left}>
          <motion.span
            className={styles.hello}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
          >
            projetos, colaborações ou só um olá
          </motion.span>
          <motion.h1
            className={styles.titulo}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
          >
            vamos<br />conversar
          </motion.h1>
          <motion.p
            className={styles.frase}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.35}
          >
            estou disponível :)
          </motion.p>
        </div>

        <div className={styles.right}>
          {links.map((item, i) => {
            const Icon = item.icon
            const isEmail = item.copiable

            return (
              <motion.a
                key={item.label}
                href={item.href}
                target={isEmail ? undefined : '_blank'}
                rel="noreferrer"
                className={`${styles.contactLink} ${isEmail ? styles.emailLink : ''}`}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.1 * (i + 1)}
              >
                <div className={styles.linkLeft}>
                  <Icon size={isEmail ? 28 : 20} weight="regular" className={styles.icon} />
                  <div className={styles.linkText}>
                    <span className={styles.label}>{item.label}</span>
                    <span className={styles.value}>{item.value}</span>
                  </div>
                </div>

                {isEmail && (
                  <button
                    className={styles.copyBtn}
                    onClick={handleCopy}
                    aria-label="Copiar"
                  >
                    {copied
                      ? <><Check size={14} weight="bold" /> copiado!</>
                      : 'copiar'
                    }
                  </button>
                )}
              </motion.a>
            )
          })}
        </div>

      </section>
    </div>
  )
}

export default Contact