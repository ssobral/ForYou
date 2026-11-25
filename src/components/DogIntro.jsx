import { useEffect, useState } from 'react'
import DogIllustration from './DogIllustration'
import '../styles/dog-intro.css'

// The scene and its CSS share one clock. Navigation never depends on an asset loading.
const DURATION = 8600
const STORY = [
  { at: 0, phase: 'walk' },
  { at: 3200, phase: 'notice' },
  { at: 4600, phase: 'run' },
]

export default function DogIntro({ onComplete }) {
  const [phase, setPhase] = useState(STORY[0].phase)

  useEffect(() => {
    const timers = STORY.slice(1).map((step) => (
      window.setTimeout(() => setPhase(step.phase), step.at)
    ))
    // Also finish if animation events are unavailable or interrupted.
    timers.push(window.setTimeout(onComplete, DURATION + 400))

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onComplete()
    }
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      timers.forEach(window.clearTimeout)
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [onComplete])

  const handleAnimationEnd = (event) => {
    if (event.target === event.currentTarget && event.animationName === 'intro-reveal') {
      onComplete()
    }
  }

  return (
    <section
      className="dog-intro"
      data-phase={phase}
      style={{ '--intro-duration': `${DURATION}ms` }}
      aria-label="Abertura: um pastor de Shetland e um pinscher preto passeiam, olham para trás e correm com um shih-tzu seguindo. A página inicial será exibida em seguida."
      onAnimationEnd={handleAnimationEnd}
    >
      <div className="dog-intro__scene" aria-hidden="true">
        <div className="dog-intro__ground" />
        <DogIllustration breed="sheltie" />
        <DogIllustration breed="pinscher" />
        <DogIllustration breed="shih-tzu" />
      </div>
    </section>
  )
}
