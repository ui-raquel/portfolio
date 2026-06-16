import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './Hero.module.css'


gsap.registerPlugin(ScrollTrigger)

function Hero() {
  const sectionRef = useRef(null)
  const pathRef = useRef(null)
  const bgRef = useRef(null)

  useEffect(() => {
    const path = pathRef.current
    const totalLength = path.getTotalLength()

    gsap.set(path, {
      strokeDasharray: totalLength,
      strokeDashoffset: totalLength,
    })

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=150%',
          scrub: 1,
          pin: true,
        }
      })

      tl.to(path, {
        strokeDashoffset: 0,
        duration: 1,
        ease: 'none',
      })
        .to(bgRef.current, {
          backgroundColor: '#FDD3CF',
          duration: 0.4,
          ease: 'power2.inOut',
        }, '>-0.1')
    })

    window.addEventListener('load', () => ScrollTrigger.refresh())

    return () => {
      ctx.revert()
      window.removeEventListener('load', () => ScrollTrigger.refresh())
    }

  }, [])

  return (
    <section ref={sectionRef} className={styles.hero}>

      <div ref={bgRef} className={styles.bg} />

      <svg
        className={styles.spiral}
        width="510"
        height="877"
        viewBox="0 0 510 877"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          ref={pathRef}
          d="M481.487 0.0391956C481.599 80.5468 494.007 244.045 334.111 275.752C174.215 307.46 93.6031 228.779 102.771 179.286C111.939 129.794 220.04 118.868 305.965 158.731C391.889 198.594 427.208 274.972 431.305 349.353C435.402 423.733 394.166 488.329 304.483 532.275C214.8 576.221 42.4957 610.074 28.1159 874.781"
          stroke="#FDD3CF"
          strokeWidth="56.3143"
        />
      </svg>

      <div className={styles.content}>
        <img
          className={styles.rnLogo}
          src="/assets/rn.svg"
          alt="Logo RN"
        />
        <h1 className={styles.name}>raquel<br />neves</h1>
      </div>

      <svg
        className={styles.curve}
        viewBox="0 0 1440 120"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0,50 C790,150 200,0 1840,90 L1440,120 L0,120 Z"
          fill="#FDD3CF"
        />
      </svg>
    </section>
  )
}

export default Hero