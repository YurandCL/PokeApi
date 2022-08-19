import { Container } from './styles'

interface FlexInterface{
  children: React.ReactNode
  gap?: number | string
  className?: string
}

const Flex = ({children, gap, className}: FlexInterface) => {
  return (
    <Container className={className} gap={gap}>
      {children}
    </Container>
  )
}

export default Flex