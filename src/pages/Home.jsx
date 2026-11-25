import { useNavigate } from 'react-router-dom'
import HomeWorld from '../components/HomeWorld'
import '../styles/home-landing.css'

function GiftIcon({ letter = false }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" aria-hidden="true">
      {letter ? <>
        <rect x="4" y="8" width="24" height="18" rx="3" />
        <path d="m5 10 11 9 11-9M5 24l8-7m14 7-8-7" />
        <path d="M16 8s-7-3-5-6c2-2 5 1 5 3 0-2 3-5 5-3 2 3-5 6-5 6Z" />
      </> : <>
        <rect x="4" y="12" width="24" height="6" rx="1.5" />
        <path d="M6 18v11h20V18M16 12v17m0-17c-8 0-10-5-7-7 4-3 7 7 7 7Zm0 0s3-10 7-7c3 2 1 7-7 7Z" />
      </>}
    </svg>
  )
}

export default function Home() {
  const navigate = useNavigate()

  return (
    <main className="home-landing">
      <div className="home-layout">
        <HomeWorld person="hers" />

        <section className="home-center" aria-labelledby="home-title">
          <h1 id="home-title">Oi, <em>amor.</em><span className="home-title-heart" aria-hidden="true">♡</span></h1>

          <div className="home-keepsakes">
            <div className="home-gifts">
              <button className="home-gift home-gift--first" onClick={() => navigate('/v1')}>
                <span className="home-gift__icon"><GiftIcon /></span>
                <span className="home-gift__title">Primeiro presente</span>
              </button>
              <button className="home-gift home-gift--second" onClick={() => navigate('/v2')}>
                <span className="home-gift__icon"><GiftIcon letter /></span>
                <span className="home-gift__title">Segundo presente</span>
              </button>
            </div>
          </div>

          <div className="home-quizzes">
            <div className="home-quiz-buttons">
              {[1, 2, 3].map(number => (
                <button key={number} className="home-quiz" onClick={() => navigate(`/quiz${number}`)}>
                  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="m10 2 2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4L2.2 7.7l5.4-.8Z" stroke="currentColor" strokeWidth="1.2" /></svg>
                  Quiz {number}
                </button>
              ))}
              <button className="home-quiz home-quiz--memory" onClick={() => navigate('/memoria')}>
                <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><rect x="2" y="3" width="7" height="11" rx="2" stroke="currentColor" strokeWidth="1.2" /><rect x="11" y="6" width="7" height="11" rx="2" stroke="currentColor" strokeWidth="1.2" /><path d="M4.5 8.5h2m7 3h2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /></svg>
                Memória
              </button>
            </div>
          </div>

          <div className="home-love-note"><span /><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 20S3 14 3 8.5C3 3 10 2 12 7c2-5 9-4 9 1.5C21 14 12 20 12 20Z" stroke="currentColor" strokeWidth="1.3" /></svg><span /></div>
          <p className="home-closing">Em qualquer universo, eu escolheria você.</p>
        </section>

        <HomeWorld person="his" />
      </div>

      <footer className="home-footer">
        <span>feito com amor, para o meu amor.</span>
      </footer>
    </main>
  )
}
