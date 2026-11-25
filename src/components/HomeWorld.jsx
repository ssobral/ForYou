import HomeSticker from './HomeSticker'

const worlds = {
  hers: [
    { type: 'mickey', name: 'Mickey', x: 2, y: 0, w: 32, r: -12 },
    { type: 'potter', name: 'Harry Potter', x: 54, y: 0, w: 40, r: 10 },
    { type: 'stranger', name: 'Stranger Things', x: 0, y: 20, w: 53, r: -8 },
    { type: 'dachshund', name: 'Cachorro salsicha', x: 56, y: 23, w: 44, r: 9 },
    { type: 'edward-egg', name: 'Edward no ovo', x: 5, y: 40, w: 40, r: -10 },
    { type: 'spider', name: 'Homem-Aranha', x: 62, y: 41, w: 32, r: 12 },
    { type: 'billie', name: 'Billie Eilish', x: 0, y: 64, w: 39, r: -19 },
    { type: 'nezuko', name: 'Nezuko', x: 65, y: 65, w: 36, r: 9 },
    { type: 'inosuke', name: 'Inosuke', x: 31, y: 81, w: 39, r: -6 },
  ],
  his: [
    { type: 'knight', name: 'Hollow Knight', x: 5, y: 0, w: 37, r: -10 },
    { type: 'controller', name: 'Video game', x: 53, y: 2, w: 46, r: 13 },
    { type: 'gym', name: 'Academia', x: 0, y: 22, w: 42, r: -4 },
    { type: 'toothless', name: 'Como Treinar o Seu Dragão', x: 54, y: 24, w: 46, r: 8 },
    { type: 'mcqueen', name: 'Relâmpago McQueen', x: 0, y: 43, w: 45, r: -10 },
    { type: 'sports-car', name: 'Carros esportivos', x: 56, y: 45, w: 45, r: 10 },
    { type: 'rengoku', name: 'Rengoku', x: 0, y: 64, w: 38, r: -11 },
    { type: 'tanjiro', name: 'Tanjiro', x: 65, y: 64, w: 37, r: 10 },
    { type: 'tomioka', name: 'Tomioka', x: 32, y: 81, w: 38, r: -6 },
  ],
}

export default function HomeWorld({ person }) {
  return (
    <aside className={`home-world home-world--${person}`} aria-label={person === 'hers' ? 'Referências dela' : 'Referências dele'}>
      <div className="home-world__stickers">
        {worlds[person].map(({ type, name, x, y, w, r }) => (
          <figure key={type} className={`home-sticker home-sticker--${type}`}
            style={{ '--x': `${x}%`, '--y': `${y}%`, '--w': `${w}%`, '--rotation': `${r}deg` }}
            role="img" aria-label={name}>
            <HomeSticker type={type} />
          </figure>
        ))}
      </div>
    </aside>
  )
}
