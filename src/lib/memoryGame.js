export function createMemoryGame(pets, previousCards = []) {
  const cards = pets.flatMap(pet => [
    { ...pet, id: `${pet.pairId}-1` },
    { ...pet, id: `${pet.pairId}-2` },
  ])

  for (let index = cards.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1))
    ;[cards[index], cards[randomIndex]] = [cards[randomIndex], cards[index]]
  }

  // Even an unlucky shuffle must give a new visible arrangement on restart.
  if (cards.length > 1 && cards.every((card, index) => card.pairId === previousCards[index]?.pairId)) {
    const differentIndex = cards.findIndex(card => card.pairId !== cards[0].pairId)
    if (differentIndex !== -1) {
      ;[cards[0], cards[differentIndex]] = [cards[differentIndex], cards[0]]
    }
  }

  return { cards, flippedIds: [], matchedPairs: [], moves: 0 }
}

export function memoryGameReducer(state, action) {
  switch (action.type) {
    case 'flip': {
      const card = state.cards.find(item => item.id === action.id)
      if (!card || state.flippedIds.length === 2 || state.flippedIds.includes(card.id) || state.matchedPairs.includes(card.pairId)) {
        return state
      }

      if (state.flippedIds.length === 0) {
        return { ...state, flippedIds: [card.id] }
      }

      const firstCard = state.cards.find(item => item.id === state.flippedIds[0])
      if (firstCard.pairId === card.pairId) {
        return {
          ...state,
          flippedIds: [],
          matchedPairs: [...state.matchedPairs, card.pairId],
          moves: state.moves + 1,
        }
      }

      return { ...state, flippedIds: [...state.flippedIds, card.id], moves: state.moves + 1 }
    }
    case 'conceal':
      return state.flippedIds === action.flippedIds ? { ...state, flippedIds: [] } : state
    case 'restart':
      return action.game
    default:
      return state
  }
}
