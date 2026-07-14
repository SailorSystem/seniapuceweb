import { motion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'

export default function SplitText({
  text = '',
  className = '',
  delay = 100,
  animationFrom = { opacity: 0, transform: 'translateY(40px)' },
  animationTo = { opacity: 1, transform: 'translateY(0)' },
  threshold = 0.1,
  rootMargin = '0px',
  onAnimationComplete,
}) {
  const letters = text.split('')
  const [inView, setInView] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(ref.current)
        }
      },
      { threshold, rootMargin }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return (
    <p ref={ref} className={className} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          initial={animationFrom}
          animate={inView ? animationTo : animationFrom}
          transition={{
            duration: 0.4,
            delay: (i * delay) / 1000,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          onAnimationComplete={i === letters.length - 1 ? onAnimationComplete : undefined}
          style={{ display: 'inline-block', whiteSpace: letter === ' ' ? 'pre' : undefined }}
        >
          {letter}
        </motion.span>
      ))}
    </p>
  )
}
