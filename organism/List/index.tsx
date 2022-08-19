import Grid from 'components/Grid'
import OnePokemon from 'components/Pokemon'
import type { Forms } from 'types/forms'

interface ListInterface{
  results: Forms[]
}

export default function List({results}:ListInterface) {
  return (
    <Grid>
      {results.map((result, idx) => (
        <OnePokemon key={idx} data={result}/>
      ))}
    </Grid>
  )
}