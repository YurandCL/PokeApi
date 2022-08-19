import { Container } from './styles'

interface BubbleInterface{
  name?: string
  children: React.ReactNode
}

const Bubble = ({ name, children }:BubbleInterface) => {

  return (
    <Container className={name}>
      {children}
    </Container>
  )
}

export default Bubble