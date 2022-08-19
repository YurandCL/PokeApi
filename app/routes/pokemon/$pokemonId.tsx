import type { LoaderFunction, MetaFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

import { getOnce } from 'services/getOnce'
import { URL_BASE } from 'hooks/useFetch'

import type { Pokemon } from 'types/Pokemon'

import Card from 'components/Card'
import Flex from 'components/Flex'
import Bubble from 'components/Bubble'
import Medal from 'components/Medal'
import { Title } from 'components/Pokemon/styles'
import Grid from 'components/Grid'

export const meta: MetaFunction = ({params}) => ({
  title: `Pokedex - ${params.pokemonId}`
})

export const loader: LoaderFunction = async ({ params }) => {
  const urlPokemon = `${URL_BASE}/pokemon/${params.pokemonId}`

  const responsePokemon = await getOnce({ url: urlPokemon }).then<Pokemon>(res => res.json())

  return responsePokemon
}

export default function PokemonIdRoute() {

  const pokemon = useLoaderData<Pokemon>()
  const {abilities, id, name, moves, sprites, stats, types} = pokemon
  const firstType = types[0].type.name

  return (
    <>
      <Flex className="justify-center align-center direction-column">
        <Title>{`${name} - #${id}`}</Title>
        <Flex gap={5}>
          {types.map(({ type, slot }) => (
            <Bubble key={slot} name={`${type.name}`}>
              <Medal name={`${type.name}`} />
              {type.name}
            </Bubble>
          ))}
        </Flex>
        <Flex>
          <div>
            <Title>Normal</Title>
            <Flex>
              <img src={`${sprites.front_default}`} alt={`${name}`} width={96} height={96}/>
              <img src={`${sprites.back_default}`} alt={`${name}`} width={96} height={96}/>
            </Flex>
          </div>
          <div>
            <Title>Shiny</Title>
            <Flex>
              <img src={`${sprites.front_shiny}`} alt={`${name} shiny`} width={96} height={96}/>
              <img src={`${sprites.back_shiny}`} alt={`${name} shiny`} width={96} height={96}/>
            </Flex>
          </div>
        </Flex>
      </Flex>
      <br/>
      <Grid>
        <Card className={`${firstType}`}>
          <Title>Abilities</Title>
          {abilities.map(({ ability, is_hidden, slot }) => (
            <div key={slot}>
              {!is_hidden ? (<p>{ability.name}</p>)
                : (
                  <details>
                    <summary>HIDDEN</summary>
                    <p>{ability.name}</p>
                  </details>
                )}
            </div>
          ))}
        </Card>
        <Card className={`${firstType}`}>
          <Title>Moves</Title>
          <details>
            <summary>See {moves.length} moves</summary>
            {moves.map(({ move }, idx) => (
              <p key={idx} >{move.name}</p>
            ))}
          </details>
        </Card>
        <Card className={`${firstType}`}>
          <Title>Stats</Title>
          {stats.map(({stat, base_stat, effort}) => (
            <div key={stat.name}>
              {stat.name}
              -
              {base_stat}
              -
              {effort}
            </div>
          ))}
        </Card>
      </Grid>
    </>
  )
}