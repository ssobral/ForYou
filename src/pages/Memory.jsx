import { useEffect, useReducer } from 'react'
import { createMemoryGame, memoryGameReducer } from '../lib/memoryGame'
import bob from '../assets/memory/bob.jpeg'
import mel from '../assets/memory/mel.jpeg'
import friend from '../assets/memory/nlembro.jpeg'
import leia from '../assets/memory/leia.jpeg'
import cloe from '../assets/memory/cloe.jpeg'
import lilo from '../assets/memory/lilo.jpeg'
import pipoca from '../assets/memory/pipoca.jpeg'
import '../styles/home-landing.css'
import '../styles/memory.css'

const pets = [
  { pairId: 'bob', name: 'Bob', image: bob, position: '50% 68%' },
  { pairId: 'mel', name: 'Mel', image: mel, position: '50% 57%' },
  { pairId: 'friend', name: 'Amiguinho', image: friend, position: '50% 58%' },
  { pairId: 'leia', name: 'Leia', image: leia, position: '50% 64%' },
  { pairId: 'cloe', name: 'Cloe', image: cloe, position: '50% 52%' },
  { pairId: 'lilo', name: 'Lilo', image: lilo, position: '50% 70%' },
  { pairId: 'pipoca', name: 'Pipoca', image: pipoca, position: '50% 50%' },
]

function PawIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="currentColor" aria-hidden="true">
      <ellipse cx="10" cy="20" rx="4.5" ry="6" transform="rotate(-25 10 20)" />
      <ellipse cx="19" cy="12" rx="4.5" ry="6" transform="rotate(-10 19 12)" />
      <ellipse cx="30" cy="12" rx="4.5" ry="6" transform="rotate(10 30 12)" />
      <ellipse cx="39" cy="20" rx="4.5" ry="6" transform="rotate(25 39 20)" />
      <path d="M12 34c0-5 7-15 12-15s12 10 12 15c0 9-8 5-12 5s-12 4-12-5Z" />
    </svg>
  )
}

export default function Memory() {
  const [game, dispatch] = useReducer(memoryGameReducer, pets, createMemoryGame)
  const { cards, flippedIds, matchedPairs, moves } = game
  const isChecking = flippedIds.length === 2
  const isComplete = matchedPairs.length === pets.length

  useEffect(() => {
    if (flippedIds.length !== 2) return

    const timeout = window.setTimeout(() => {
      dispatch({ type: 'conceal', flippedIds })
    }, 1000)

    return () => window.clearTimeout(timeout)
  }, [flippedIds])

  let message = 'Escolha uma cartinha para começar.'
  if (isComplete) {
    message = ''
  } else if (isChecking) {
    message = 'Ainda não foi esse par. Tente lembrar onde eles estão!'
  } else if (flippedIds.length === 1) {
    message = 'Onde está a outra foto igual?'
  } else if (matchedPairs.length > 0) {
    message = 'Par encontrado! Continue procurando os amiguinhos.'
  } else if (moves > 0) {
    message = 'Vamos tentar de novo? Escolha uma cartinha.'
  }

  return (
    <main className="memory-page" aria-labelledby="memory-title">
      <div className="memory-game">
        <header className="memory-heading">
          <h1 id="memory-title">Jogo da <em>memória.</em></h1>
        </header>

        <div className="memory-toolbar">
          <dl className="memory-stats">
            <div><dt>Pares</dt><dd>{matchedPairs.length}<span> / {pets.length}</span></dd></div>
            <div><dt>Jogadas</dt><dd>{moves}</dd></div>
          </dl>
          <button className="memory-restart" type="button" onClick={() => dispatch({ type: 'restart', game: createMemoryGame(pets, cards) })}>
            {isComplete ? 'Jogar de novo' : 'Nova partida'}
          </button>
        </div>

        <div className="memory-board" role="group" aria-label="Cartas do jogo da memória">
          {cards.map((card, index) => {
            const isMatched = matchedPairs.includes(card.pairId)
            const isRevealed = isMatched || flippedIds.includes(card.id)

            return (
              <button
                key={card.id}
                type="button"
                className={`memory-card${isRevealed ? ' memory-card--revealed' : ''}${isMatched ? ' memory-card--matched' : ''}`}
                aria-label={`Carta ${index + 1}${isRevealed ? `: ${card.name}${isMatched ? ', par encontrado' : ''}` : ': virar'}`}
                aria-pressed={isRevealed}
                disabled={isMatched || isChecking || isRevealed}
                onClick={() => dispatch({ type: 'flip', id: card.id })}
              >
                <span className="memory-card__inner">
                  <span className="memory-card__back" aria-hidden="true"><PawIcon /></span>
                  <span className="memory-card__front" aria-hidden={!isRevealed}>
                    <img src={card.image} alt={isRevealed ? card.name : ''} style={{ objectPosition: card.position }} draggable="false" />
                    {isMatched && <span className="memory-card__check" aria-hidden="true">✓</span>}
                  </span>
                </span>
              </button>
            )
          })}
        </div>

        {message && <p className="memory-status" role="status" aria-live="polite" aria-atomic="true">{message}</p>}
      </div>
    </main>
  )
}
