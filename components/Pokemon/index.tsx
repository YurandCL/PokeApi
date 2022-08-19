import { useEffect, useState } from 'react'

import { Id, Title } from './styles'

import { getOnce } from 'services/getOnce'

import type { Forms } from 'types/forms'
import type { Pokemon } from 'types/Pokemon'

import Card from 'components/Card'
import Loader from 'components/Loader'
import Bubble from 'components/Bubble'
import Flex from 'components/Flex'
import Medal from 'components/Medal'

interface PokemonInterface{
    data: Forms
}

const OnePokemon = ({ data }: PokemonInterface) => {
  const { name, url } = data

  const [pokemon, setPokemon] = useState<Pokemon>()
  const [type, setType] = useState()

  const getPokemon = async () => {
    const response = await getOnce({ url }).then(res=> res.json())
    setType(response.types[0].type.name)
    return response
  }

  useEffect(() => {
    getPokemon().then((res) => setPokemon(res))
  }, [url])

  return pokemon
    ? (
      <Card className={`${type}`}>
        <a href={`/pokemon/${name}`}>
          <Id>
            <Bubble>{pokemon.id}</Bubble>
          </Id>
          <Flex>
            <Flex className={'align-center justify-center width-100'}>
              <Title>{name}</Title>
            </Flex>
          </Flex>
          <Flex className={'align-center justify-center'}>
            <img src={`${pokemon.sprites.front_default}`} alt={`${pokemon.name}`} />
            <img src={`${pokemon.sprites.back_default}`} alt={`${pokemon.name}`} />
          </Flex>
        </a>
        <Flex gap={3}>
          {pokemon.types.map(({ type }, idx) => (
            <a key={idx} href={`/type/${type.name}`}>
              <Bubble name={type.name}>
                <Medal name={type.name} />
                {type.name}
              </Bubble>
            </a>
          ))}
        </Flex>
      </Card>
    )
    : (
      <Card className="normal">
        <Flex className={'align-center justify-center height-100'}>
          <Loader />
        </Flex>
      </Card>
    )
}

export default OnePokemon