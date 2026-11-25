import { useCallback, useState } from 'react'
import Nav from './components/Nav'
import DogIntro from './components/DogIntro'
import { Outlet, useLocation } from 'react-router-dom'


function App() {
  const { pathname } = useLocation()
  // Kept in the layout so returning to Home does not replay the opening.
  // A full reload starts a new opening; direct links to other pages skip it.
  const [showIntro, setShowIntro] = useState(() => pathname === '/')
  const completeIntro = useCallback(() => setShowIntro(false), [])

  return (
    <>
      <div inert={showIntro} aria-hidden={showIntro || undefined}>
        <Nav/>
        <Outlet/>
      </div>
      {showIntro && <DogIntro onComplete={completeIntro} />}
    </>
  )
}

export default App
