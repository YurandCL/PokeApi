interface HeaderInterface{
  alt?: string
  img?: string
  children: React.ReactNode
}
const defaultImage = '/images/logo-pokemon-79x45.png'
const defaultAlt = 'pokémon'

const Header = ({ img = defaultImage, alt = defaultAlt, children }: HeaderInterface) => {
  return (
    <header>
      <a href="/"><img src={img} alt={alt} /></a>
      {children}
    </header>)
}

export default Header