import styled from 'styled-components'

interface Flex{
  gap?: number | string
}

export const Container = styled.div<Flex>`
  display: flex;
  gap: ${({ gap }) => typeof gap === 'number' ? `${gap}px` : gap};

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }

  &.wrap{
    flex-wrap: wrap;
  }

  &.align-center{
    align-items: center;
  }

  &.justify-center{
    justify-content: center;
  }

  &.width-100{
    width: 100%;
  }

  &.height-100{
    height: 100%;
  }

  &.direction-column{
    flex-direction: column;
  }
`
