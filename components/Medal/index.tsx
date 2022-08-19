import { useMedal } from 'hooks/useMedal'
import { Container } from './styles'

interface MedalInterface{
  name: string
}

const Medal = ({ name }: MedalInterface) => {
  const {url, color} = useMedal(name)
  return <Container src={url} alt={name} backgroundColor={color} width={20} height={20} />
}

export default Medal