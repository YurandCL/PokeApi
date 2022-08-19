import { createGlobalStyle } from 'styled-components'
import { bugColor, darkColor, dragonColor, electricColor, fairyColor, fightingColor, fireColor, flyingColor, ghostColor, grassColor, groundColor, iceColor, normalColor, poisonColor, psychicColor, rockColor, steelColor, waterColor } from 'styles/colors'
import { BUG, DARK, DRAGON, ELECTRIC, FAIRY, FIGHTING, FIRE, FLYING, GHOST, GRASS, GROUND, ICE, NORMAL, POISON, PSYCHIC, ROCK, STEEL, WATER } from 'utils/constants'

const putColor = (color: string) => {
  const style = `background: linear-gradient(45deg, rgba(73, 74, 73, 0.17) 0%, rgba(${color}, 0.17) 100%);
        border: 1px solid rgb(${color}, 0.66);
        color: rgb(${color});`
  return style
}

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Montserrat';
        src: url('/fonts/Montserrat-Regular.woff2') format('woff2');
        font-weight: 400;
    }
    @font-face {
        font-family: 'Montserrat';
        src: url('/fonts/Montserrat-SemiBold.woff2') format('woff2');
        font-weight: 600;
    }
    @font-face {
        font-family: 'Montserrat';
        src: url('/fonts/Montserrat-Bold.woff2') format('woff2');
        font-weight: 700;
    }
    *{
        box-sizing: border-box;
    }

    html {
        font-family: 'Montserrat';
    }
    body{
        background-attachment: fixed;
        background-color: #212121;
        background-image: url('/images/paisaje.jpg');
    }

    a{
        color: inherit;
        text-decoration: none;
    }

    &.${BUG}{
        ${putColor(bugColor)};
    }
    &.${DARK}{
        ${putColor(darkColor)};
        color: #fafafa;
    }
    &.${DRAGON}{
        ${putColor(dragonColor)};
    }
    &.${ELECTRIC}{
        ${putColor(electricColor)};
    }
    &.${FAIRY}{
        ${putColor(fairyColor)};
    }
    &.${FIGHTING}{
        ${putColor(fightingColor)};
    }
    &.${FIRE}{
        ${putColor(fireColor)};
    }
    &.${FLYING}{
        ${putColor(flyingColor)};
    }
    &.${GHOST}{
        ${putColor(ghostColor)};
    }
    &.${GRASS}{
        ${putColor(grassColor)};
    }
    &.${GROUND}{
        ${putColor(groundColor)};
    }
    &.${ICE}{
        ${putColor(iceColor)};
    }
    &.${NORMAL}{
        ${putColor(normalColor)};
    }
    &.${POISON}{
        ${putColor(poisonColor)};
    }
    &.${PSYCHIC}{
        ${putColor(psychicColor)};
    }
    &.${ROCK}{
        ${putColor(rockColor)};
    }
    &.${STEEL}{
        ${putColor(steelColor)};
    }
    &.${WATER}{
        ${putColor(waterColor)};
    }
`

export default GlobalStyle