import { useEffect, useState } from 'react'
import { BUG, DARK, DRAGON, ELECTRIC, FAIRY, FIGHTING, FIRE, FLYING, GHOST, GRASS, GROUND, ICE, NORMAL, POISON, PSYCHIC, ROCK, STEEL, WATER } from 'utils/constants'
import { bugColor, darkColor, dragonColor, electricColor, fairyColor, fightingColor, fireColor, flyingColor, ghostColor, grassColor, groundColor, iceColor, normalColor, poisonColor, psychicColor, rockColor, steelColor, waterColor } from 'styles/colors'

const URL_BASE = 'https://static.wikia.nocookie.net/pokemongo/images'

export const useMedal = (name = '') => {

  const [medal, setMedal] = useState({url: '', color: ''})

  useEffect(() => {
    switch (name) {
    case BUG:
      setMedal({url:`${URL_BASE}/6/60/BugCatcher_shadow.png`, color: bugColor})
      break
    case DARK:
      setMedal({url:`${URL_BASE}/7/7f/Delinquent_shadow.png`, color: darkColor})
      break
    case DRAGON:
      setMedal({url:`${URL_BASE}/c/c1/DragonTamer_shadow.png`, color: dragonColor})
      break
    case ELECTRIC:
      setMedal({url:`${URL_BASE}/6/6d/Rocker_shadow.png`, color: electricColor})
      break
    case FAIRY:
      setMedal({url:`${URL_BASE}/6/63/FairyTaleGirl_shadow.png`, color: fairyColor })
      break
    case FIGHTING:
      setMedal({url:`${URL_BASE}/5/51/BlackBelt_shadow.png`, color: fightingColor })
      break
    case FIRE:
      setMedal({url:`${URL_BASE}/d/d8/Kindler_shadow.png`, color: fireColor})
      break
    case FLYING:
      setMedal({url:`${URL_BASE}/f/f1/BirdKeeper_shadow.png`, color: flyingColor })
      break
    case GHOST:
      setMedal({url:`${URL_BASE}/7/77/HexManiac_shadow.png`, color: ghostColor })
      break
    case GRASS:
      setMedal({url:`${URL_BASE}/8/84/Gardener_shadow.png`, color: grassColor })
      break
    case GROUND:
      setMedal({url:`${URL_BASE}/3/34/RuinManiac_shadow.png`, color: groundColor})
      break
    case ICE:
      setMedal({url:`${URL_BASE}/a/aa/Skier_shadow.png`, color: iceColor })
      break
    case NORMAL:
      setMedal({url:`${URL_BASE}/a/a7/Schoolkid_shadow.png`, color: normalColor })
      break
    case POISON:
      setMedal({url:`${URL_BASE}/3/39/PunkGirl_shadow.png`, color: poisonColor })
      break
    case PSYCHIC:
      setMedal({url:`${URL_BASE}/5/51/Psychic_shadow.png`, color: psychicColor })
      break
    case ROCK:
      setMedal({url:`${URL_BASE}/5/5f/Hiker_shadow.png`, color: rockColor})
      break
    case STEEL:
      setMedal({url:`${URL_BASE}/7/71/RailStaff_shadow.png`, color: steelColor})
      break
    case WATER:
      setMedal({url:`${URL_BASE}/c/c6/Swimmer_shadow.png`, color: waterColor})
      break

    default:
      break
    }
  }, [name])

  return medal
}