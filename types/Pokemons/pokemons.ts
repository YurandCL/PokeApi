import type { Forms } from 'types/forms'

export interface Pokemons {
    count: number
    next: string | null
    previous: string | null
    results: Forms[]
}