import { useEffect, useRef } from 'react'
import styles from './Cursor.module.css'

function Cursor() {
  const cursorRef = useRef(null)
  const followerRef = useRef(null)
  const emojiRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const follower = followerRef.current
    const emoji = emojiRef.current

    let mouseX = 0, mouseY = 0
    let followerX = 0, followerY = 0

    const onMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`
    }

    const onMouseOver = (e) => {
      const target = e.target.closest('[data-draggable]')
      const interactive = e.target.closest('a, button, li')

      if (target) {
        cursor.style.backgroundColor = 'transparent'
        cursor.style.borderRadius = '0'
        emoji.classList.add(styles.emojiVisible)
        follower.classList.add(styles.followerDrag)
        follower.classList.remove(styles.expanded)
      } else if (interactive) {
        cursor.style.backgroundColor = 'var(--red)'
        cursor.style.borderRadius = '50%'
        emoji.classList.remove(styles.emojiVisible)
        follower.classList.add(styles.expanded)
        follower.classList.remove(styles.followerDrag)
      } else {
        cursor.style.backgroundColor = 'var(--red)'
        cursor.style.borderRadius = '50%'
        emoji.classList.remove(styles.emojiVisible)
        follower.classList.remove(styles.expanded)
        follower.classList.remove(styles.followerDrag)
      }
    }

    const animate = () => {
      followerX += (mouseX - followerX) * 0.1
      followerY += (mouseY - followerY) * 0.1
      follower.style.transform = `translate(${followerX}px, ${followerY}px)`

      requestAnimationFrame(animate)
    }

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseover', onMouseOver)
    animate()

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseover', onMouseOver)
    }
  }, [])

  return (
    <>
      <div ref={cursorRef} className={styles.cursor}>
        <span ref={emojiRef} className={styles.emoji}>✦</span>
      </div>
      <div ref={followerRef} className={styles.follower} />
    </>
  )
}

export default Cursor