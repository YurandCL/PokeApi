import { Container } from './styles'

interface CardInterface{
  children: React.ReactNode
  className: string
}

const Card = ({ children, className = 'normal' }:CardInterface) => {

  return <Container className={className}>{children}</Container>
}

export default Card