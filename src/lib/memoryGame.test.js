import test from 'node:test'
import assert from 'node:assert/strict'
import { createMemoryGame, memoryGameReducer } from './memoryGame.js'

const pets = ['bob', 'mel', 'friend', 'leia', 'cloe', 'lilo', 'pipoca'].map(pairId => ({ pairId }))
const flip = (game, id) => memoryGameReducer(game, { type: 'flip', id })

test('creates fourteen unique cards with exactly two of each photo', () => {
  const game = createMemoryGame(pets)
  assert.equal(game.cards.length, 14)
  assert.equal(new Set(game.cards.map(card => card.id)).size, 14)
  for (const pet of pets) {
    assert.equal(game.cards.filter(card => card.pairId === pet.pairId).length, 2)
  }
  assert.deepEqual(game.flippedIds, [])
  assert.deepEqual(game.matchedPairs, [])
  assert.equal(game.moves, 0)
})

test('restarting changes the visible arrangement even when random repeats', context => {
  context.mock.method(Math, 'random', () => 0.5)
  const first = createMemoryGame(pets)
  const next = createMemoryGame(pets, first.cards)
  assert.notDeepEqual(next.cards.map(card => card.pairId), first.cards.map(card => card.pairId))
})

test('different random values produce different shuffled boards', context => {
  const random = context.mock.method(Math, 'random', () => 0)
  const first = createMemoryGame(pets)
  random.mock.mockImplementation(() => 0.99)
  const next = createMemoryGame(pets)
  assert.notDeepEqual(next.cards.map(card => card.pairId), first.cards.map(card => card.pairId))
})

test('ignores repeated clicks on the same card and invalid cards', () => {
  const game = createMemoryGame(pets)
  const selected = flip(game, game.cards[0].id)
  assert.equal(flip(selected, game.cards[0].id), selected)
  assert.equal(flip(selected, 'missing'), selected)
  assert.equal(selected.moves, 0)
})

test('keeps matching cards visible and counts one move per pair attempt', () => {
  const game = createMemoryGame(pets)
  const pair = game.cards.filter(card => card.pairId === 'bob')
  const matched = flip(flip(game, pair[0].id), pair[1].id)
  assert.deepEqual(matched.matchedPairs, ['bob'])
  assert.deepEqual(matched.flippedIds, [])
  assert.equal(matched.moves, 1)
  assert.equal(flip(matched, pair[0].id), matched)
})

test('blocks a third card until a mismatch is concealed', () => {
  const game = createMemoryGame(pets)
  const first = game.cards[0]
  const second = game.cards.find(card => card.pairId !== first.pairId)
  const third = game.cards.find(card => card.id !== first.id && card.id !== second.id)
  const checking = flip(flip(game, first.id), second.id)
  assert.equal(checking.moves, 1)
  assert.equal(flip(checking, third.id), checking)
  const concealed = memoryGameReducer(checking, { type: 'conceal', flippedIds: checking.flippedIds })
  assert.deepEqual(concealed.flippedIds, [])
  assert.deepEqual(concealed.matchedPairs, [])
  assert.deepEqual(flip(concealed, third.id).flippedIds, [third.id])
})

test('restarting clears progress and an old timeout cannot hide a new selection', () => {
  const game = createMemoryGame(pets)
  const first = game.cards[0]
  const second = game.cards.find(card => card.pairId !== first.pairId)
  const checking = flip(flip(game, first.id), second.id)
  const restarted = memoryGameReducer(checking, { type: 'restart', game: createMemoryGame(pets, checking.cards) })
  assert.equal(restarted.moves, 0)
  assert.deepEqual(restarted.flippedIds, [])
  assert.deepEqual(restarted.matchedPairs, [])
  const selected = flip(restarted, restarted.cards[0].id)
  assert.equal(memoryGameReducer(selected, { type: 'conceal', flippedIds: checking.flippedIds }), selected)
})

test('all seven pairs can be found and remain unavailable to further clicks', () => {
  let game = createMemoryGame(pets)
  for (const pet of pets) {
    const pair = game.cards.filter(card => card.pairId === pet.pairId)
    game = flip(flip(game, pair[0].id), pair[1].id)
  }
  assert.equal(game.matchedPairs.length, 7)
  assert.equal(game.moves, 7)
  assert.deepEqual(game.flippedIds, [])
  for (const card of game.cards) assert.equal(flip(game, card.id), game)
})
