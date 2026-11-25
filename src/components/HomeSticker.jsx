import edwardEgg from '../assets/edward-egg.png'

function AnimeCharacter({ character }) {
  if (character === 'inosuke') {
    return (
      <>
        <path d="m51 129-9 32 23 3 14-28 9 28 24-3-9-32" fill="#313947" />
        <path d="m42 164 21-2v10H39Zm47-2 23 2 4 8H90" fill="#51433d" />
        <path d="m51 94-15 36 13 7 14-24 30 1 17 22 13-9-19-34" fill="#e7ad8b" />
        <path d="m53 107 5 18-9 11 12 5 10-5 10 6 12-6 11 2-6-14 4-17" fill="#98745d" />
        <path d="m22 143 13-65 6 2-10 65m91 0-7-65 6-1 12 65" fill="#d5e6df" />
        <path d="m25 111 9-5m-8 14 7-4m91-14-7-5m8 15-7-4" stroke="#303b48" />
        <path d="m44 45-5-22 24 7 15-6 19 5 22-8-4 26c18 30 3 60-36 61-39-1-54-32-35-63Z" fill="#9695a0" />
        <path d="m45 31 4 18 10-13m42 0 10-7-2 20" fill="#e6a8ad" />
        <path d="m49 59 20 7-5 12-18-6m44-6 20-8 3 15-18 6" fill="#d4ecf2" />
        <ellipse cx="60" cy="69" rx="3" ry="6" fill="#3485b2" />
        <ellipse cx="101" cy="69" rx="3" ry="6" fill="#3485b2" />
        <ellipse cx="80" cy="87" rx="18" ry="13" fill="#e6b3b6" />
        <ellipse cx="73" cy="87" rx="3" ry="5" fill="#645568" />
        <ellipse cx="88" cy="87" rx="3" ry="5" fill="#645568" />
        <path d="m45 86-4 14 12-2m59-12 5 14-12-2" fill="#f0eee5" />
      </>
    )
  }

  const nezuko = character === 'nezuko'
  const rengoku = character === 'rengoku'
  const tanjiro = character === 'tanjiro'
  const hair = rengoku ? '#ffc752' : tanjiro ? '#5e2537' : '#292b37'

  return (
    <>
      {nezuko && <path d="M41 55c-11 24-13 71-4 95l28-8 30 8 27-3-5-87Z" fill="#292b37" />}
      {nezuko && <path d="m35 124 13 13 8-6 10 14-29 5m73-24 11-4 1 25-23 1" fill="#c17558" />}
      <path d="m62 144-4 23h17l5-19 5 19h17l-5-25" fill="#242a35" />
      <path d="m57 165 18 1v7H54Zm28 1 18-1 4 8H85" fill="#443740" />
      <path d="m58 99-15 38 17 5 4-17-3 27h39l-3-27 5 17 16-7-18-36Z" fill={nezuko ? '#e5a5b4' : '#273139'} />
      {nezuko ? (
        <>
          <path d="m61 101 18 21 20-20-4 48H65Z" fill="#efb9c4" />
          <path d="m66 107 28 36m-27-20 15-12 12 28m-28 3 28-21m-14-5v33" stroke="#b56f85" strokeWidth="1.5" />
          <path d="M43 134 58 99l8 4-8 48-16-7m56-43 8-1 15 40-19 8-9-34" fill="#4c333e" />
          <path d="M62 127h35v12H62Z" fill="#c6ad8a" />
          <path d="m69 127 12 12 10-12" fill="#c2646d" />
        </>
      ) : (
        <>
          <path d="m57 99-17 39 20 7 17-43m6 1 17-4 21 39-22 8Z" fill={rengoku ? '#fff1d9' : tanjiro ? '#5b9c79' : '#8d4658'} />
          {tanjiro && <path d="M55 106h11v12H50Zm13 12h10v12H63Zm-21 12h12v12H42Zm45-26h10v12H92Zm10 12h10v12h-10Zm-10 12h10v13H93Z" fill="#283d35" stroke="none" />}
          {rengoku && <path d="m40 138 7-13 3 11 8-9 2 18 9-8-6 16-16-7m54-2 4-18 5 11 5-12 8 14-6 10-20 4" fill="#dc6651" />}
          {!rengoku && !tanjiro && <>
            <path d="m83 103 16-4 22 39-22 8Z" fill="#6d9b7e" />
            <path d="m93 108 9 1 4 9-9 1Zm6 15 10-1 6 9-10 4Z" fill="#e2c88c" />
          </>}
          <path d="m61 136 34-3" stroke="#d4b997" strokeWidth="4" />
          <path d="m111 122 17-31 4 2-15 31" fill="#d9e8e5" />
          <path d="m109 121 11 6" stroke="#e7b66e" strokeWidth="4" />
        </>
      )}
      {rengoku && <path d="m37 68-8-21 13 3-5-21 16 5 9-19 16 11 16-12 10 20 16-4-2 21 14-2-8 20 6 20-19-5-7 12-46-1-11-12-16 6Z" fill="#de6550" />}
      <path d="M44 62c0-27 17-39 37-39s38 14 38 40l-6 28c-9 13-22 19-33 19-16 0-29-9-36-24Z" fill="#edc2a1" />
      <path d={rengoku
        ? 'm40 71-4-24 14 4-1-20 18 7 12-16 12 16 17-7-1 20 15-4-4 25-12-7-9-17-9 14-10-18-10 18-11-8-6 17Z'
        : tanjiro
          ? 'm40 72-5-23 12-2-2-17 17 2 7-15 15 9 17-6 7 15 15 6-5 30-15-16-13 4-12-12-11 13-12-4-6 17Z'
          : 'm40 77-7-26 11-8 3-15 19 1 14-9 18 9 17 4 6 18-6 27-12-15-8 9-11-20-9 14-10-9-12 28Z'} fill={hair} />
      {nezuko && <path d="m109 50 15-8-2 21-12-5-8 8-2-18Z" fill="#df92ab" />}
      {tanjiro && <path d="m54 56 13 3-5 17-11-4Z" fill="#b96664" stroke="none" />}
      <ellipse cx="64" cy="80" rx="5" ry="7" fill={nezuko ? '#ce7f9a' : rengoku ? '#b95641' : '#643a4b'} />
      <ellipse cx="96" cy="80" rx="5" ry="7" fill={nezuko ? '#ce7f9a' : rengoku ? '#b95641' : '#643a4b'} />
      <path d={rengoku ? 'm54 68 17 4m18 0 17-4' : 'm57 70 13 1m21 0 12-1'} strokeWidth={rengoku ? '4' : '2'} />
      <path d="m74 97 7 2 7-2" stroke="#9b5f57" strokeWidth="2" />
      {nezuko && <><rect x="57" y="91" width="47" height="14" rx="5" fill="#7caa76" /><path d="M66 92v12m30-12v12m-36-7h42" stroke="#547b53" strokeWidth="1.5" /></>}
      {tanjiro && <><path d="M44 84v23h8V86m60-2v23h-8V86" fill="#f5e5ce" /><path d="m45 101 4-9 3 9m54 0 3-9 3 9" fill="#c96e60" /></>}
    </>
  )
}

function StickerArt({ type }) {
  switch (type) {
    case 'mickey':
      return <g fill="#24222a" stroke="#f4dec0" strokeWidth="3"><circle cx="40" cy="49" r="29" /><circle cx="120" cy="49" r="29" /><circle cx="80" cy="102" r="49" /></g>
    case 'potter':
      return <g stroke="#d3b574" strokeWidth="4"><path d="m80 15 52 89H28Z" fill="#d3b5740a" /><circle cx="80" cy="73" r="29" fill="none" /><path d="M80 15v89" /><circle cx="48" cy="140" r="21" fill="#d3b5740a" /><circle cx="108" cy="140" r="21" fill="#d3b5740a" /><path d="M69 140c5-8 12-8 18 0m-61-5-12-3m115 3 12-3m-34-19 9-15-2 14 9-4-10 17" /></g>
    case 'stranger':
      return <g stroke="#dc6d6c" fill="#dc6d6c"><path d="M6 43h148M8 126h144" strokeWidth="3" /><text x="80" y="77" textAnchor="middle" strokeWidth=".5" fontFamily="Georgia,serif" fontSize="30" letterSpacing="-2">STRANGER</text><text x="80" y="113" textAnchor="middle" strokeWidth=".5" fontFamily="Georgia,serif" fontSize="32" letterSpacing="1">THINGS</text></g>
    case 'dachshund':
      return <><path d="M37 102c-13-3-22-17-21-29-10 20 2 36 18 40" fill="#a96742" /><path d="m37 101 6 46-6 7h20l6-38 43 3 3 28-5 7h21l-1-47Z" fill="#ab6942" /><path d="M40 87c15-11 44-8 61-6l16-27 20 3 4 27 14 9-9 12-25 1-8 19-58-2-21-12Z" fill="#c17d50" /><path d="M117 58c-22-1-28 14-19 38l12 8 12-9-4-20" fill="#754830" /><circle cx="134" cy="76" r="3" fill="#241f26" /><path d="m146 89 10 3-6 7-8-4" fill="#2c2428" /><path d="m132 102 10-1" /><path d="m51 115 33 3" stroke="#e0a070" /></>
    case 'edward-egg':
      return <image href={edwardEgg} x="-30" y="-8" width="224" height="224" />
    case 'spider':
      return <><path d="M80 6v27m0-16L65 9m15 8 15-8" stroke="#d8cfbf" /><path d="M37 79c0-31 19-49 43-49s43 18 43 49c0 40-24 68-43 68S37 119 37 79Z" fill="#b54a55" /><path d="M80 31v115M39 73h82M43 99h74M54 123h52M48 48l65 73m-2-73-65 73" stroke="#542d3b" strokeWidth="2" /><path d="m44 69 29 13-10 23c-14-2-19-13-19-36Zm72 0L87 82l10 23c14-2 19-13 19-36Z" fill="#f4ebdf" strokeWidth="4" /><path d="m62 157 18-11 18 11-18 9Z" fill="#375879" /></>
    case 'billie':
      return <><path d="M49 55c0-24 13-35 32-35 22 0 35 13 35 37l-1 43-69-2Z" fill="#292b31" /><path d="m58 132-4 32 20 2 6-26 6 26 21-2-6-33" fill="#24252c" /><path d="m53 162 22 1v10H48Zm32 1 22-1 5 11H85" fill="#f2e8d3" /><path d="m55 94-20 40 17 7 8-21-3 28h47l-3-28 9 20 17-7-22-39Z" fill="#35363e" /><path d="M62 99c2 16 35 16 38 0m-21 10v17" stroke="#c9b584" strokeWidth="2" /><path d="m72 127 8 8 8-8" stroke="#c9b584" fill="none" /><ellipse cx="81" cy="64" rx="28" ry="34" fill="#d4b79d" /><path d="M49 62c-5-26 12-43 33-43 24 0 40 20 32 49l-15-23-17-9-20 13-8 23Z" fill="#31343c" /><path d="M51 43c7-31 55-34 62 3L95 38l-12-9-13 9Z" fill="#a0b76a" /><path d="m61 67 14 2m13 0 14-2" strokeWidth="4" /><circle cx="69" cy="72" r="3" fill="#708185" /><circle cx="94" cy="72" r="3" fill="#708185" /><path d="m73 87 8 2 7-2" stroke="#9d756d" /></>
    case 'knight':
      return <><path d="m56 104-15 40 19-4 11 17 11-14 17 12 18-16-18-36Z" fill="#48516b" /><path d="m74 147-3 25m24-25 4 25" strokeWidth="7" /><path d="m114 134 26-69 7 3-24 70" fill="#b5bdc8" /><path d="m114 132 13 5" stroke="#d1b17c" strokeWidth="5" /><path d="M49 57C24 40 39 16 46 9c-4 25 12 28 24 26h19c13 0 25-9 21-26 18 21 15 36 1 49 14 27 3 58-30 58-34 0-47-32-32-59Z" fill="#f2ebdf" /><ellipse cx="64" cy="78" rx="9" ry="15" fill="#292b38" /><ellipse cx="96" cy="78" rx="9" ry="15" fill="#292b38" /></>
    case 'controller':
      return <><path d="M46 62c-17 0-25 16-30 45-6 31 5 45 21 28l18-20h50l17 20c17 18 29 3 22-28-6-29-14-45-31-45l-17 7H64Z" fill="#414650" /><path d="M50 78v28m-14-14h28" stroke="#e6ded3" strokeWidth="8" /><circle cx="112" cy="82" r="5" fill="#d8b671" /><circle cx="124" cy="94" r="5" fill="#cd7780" /><circle cx="100" cy="94" r="5" fill="#74a490" /><circle cx="112" cy="106" r="5" fill="#7a98b4" /><circle cx="69" cy="108" r="9" fill="#272c35" /><circle cx="91" cy="108" r="9" fill="#272c35" /><path d="m75 84 9 0m-4-16V45" stroke="#b3b6b8" strokeWidth="2" /></>
    case 'gym':
      return <g transform="rotate(-21 80 90)"><path d="M38 83h84v15H38Z" fill="#abaeb6" /><rect x="20" y="53" width="17" height="75" rx="5" fill="#3f4351" /><rect x="37" y="62" width="12" height="57" rx="4" fill="#575e6c" /><rect x="123" y="53" width="17" height="75" rx="5" fill="#3f4351" /><rect x="111" y="62" width="12" height="57" rx="4" fill="#575e6c" /><path d="M13 83h7v15h-7m127-15h7v15h-7" fill="#abaeb6" /><path d="M75 101c-18 25 0 43 20 26l-5-11c-7 7-14 5-7-11" fill="#ac5c6c" /></g>
    case 'toothless':
      return <><path d="M54 100 13 78l8 49 21-11 15 18m48-34 42-22-8 49-21-11-15 18" fill="#424d59" /><path d="m34 96 10 19m81-19-9 19" stroke="#6d7883" /><path d="M73 126c-16 24 4 38 22 25l29 3 11-10" stroke="#35414b" strokeWidth="13" /><path d="m127 139 20-8-1 24-16-4" fill="#b65e63" /><ellipse cx="81" cy="122" rx="29" ry="30" fill="#35414b" /><path d="m55 144-6 15 20 1m33-16 8 15-19 1" fill="#475460" /><path d="m42 51-7-20 21 7 12-12 13 7 17-7 10 12 18-7-6 23c16 34-3 60-39 60-38 0-55-29-39-63Z" fill="#35414b" /><path d="M47 66c16-7 25-1 27 13-13 9-25 3-27-13Zm67 0c-16-7-25-1-27 13 13 9 25 3 27-13Z" fill="#a4bd72" /><path d="M61 65v16m40-16v16" stroke="#202b31" strokeWidth="4" /><path d="m76 92 5 4 5-4m-20 9 15 4 16-5" stroke="#89939a" strokeWidth="2" /></>
    case 'mcqueen':
      return <><path d="m22 95 21-31h64l32 29 9 32-12 12H27l-17-14Z" fill="#c85756" /><path d="m48 68-15 26 89-1-23-25Z" fill="#e5dfce" /><path d="m38 87 22-5m31 0 21 5" strokeWidth="3" /><circle cx="58" cy="86" r="5" fill="#5b8a9c" /><circle cx="96" cy="86" r="5" fill="#5b8a9c" /><path d="m46 108 58-6-28 15 30-4-37 16 6-13-29 3Z" fill="#eac16e" stroke="none" /><text x="110" y="122" fill="#f7db9a" fontSize="20" fontFamily="sans-serif" fontWeight="900" stroke="none">95</text><path d="M39 136v10H22v-15m116 5v10h-17v-10" fill="#34343b" /><path d="m24 113 15-3m94-2 10 4" stroke="#f9e8ba" strokeWidth="4" /></>
    case 'sports-car':
      return <><path d="m20 101 23-6 23-29 39 2 30 31 15 9-2 25H16l-5-17Z" fill="#7da6b7" /><path d="m70 72-18 22h72l-23-22Z" fill="#344753" /><path d="m85 73-5 21m-54 12 18 2m83 0 15-3" stroke="#c4dce0" strokeWidth="3" /><path d="m64 100 35-1m-49 23 63-2" stroke="#466f86" /><circle cx="42" cy="130" r="14" fill="#2c323d" /><circle cx="42" cy="130" r="6" fill="#b2c0c8" /><circle cx="124" cy="130" r="14" fill="#2c323d" /><circle cx="124" cy="130" r="6" fill="#b2c0c8" /></>
    default:
      return <AnimeCharacter character={type} />
  }
}

export default function HomeSticker({ type }) {
  return (
    <svg className="home-sticker__art" viewBox="0 0 160 180" fill="none" aria-hidden="true">
      <g stroke="#28242e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <StickerArt type={type} />
      </g>
    </svg>
  )
}
