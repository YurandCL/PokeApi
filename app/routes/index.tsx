import { Form, useActionData, useLoaderData } from '@remix-run/react'
import { redirect } from '@remix-run/node'
import { useState } from 'react'

import { getAll } from 'services/getAll'

import type { ActionFunction, LoaderFunction} from '@remix-run/node'
import type { Pokemons } from 'types/Pokemons/pokemons'

import List from 'organism/List'
import { URL_BASE} from 'hooks/useFetch'
import Header from 'components/Header'

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData()
  const value = form.get('searchBar')

  return redirect(`/pokemon/${value}`)
}

export const loader: LoaderFunction = async () => {
  const limit = 40
  const offset = 0
  const url = `${URL_BASE}/pokemon?limit=${limit}&offset=${offset}`

  const response = await getAll({ url })

  return response
}

export default function Index() {
  const { next, previous, results } = useLoaderData<Pokemons>()

  const [list, setList] = useState(results)
  const [prevList, setPrevList] = useState(previous)
  const [nextList, setNextList] = useState(next)
  const [error, setError] = useState('')

  const getAnother = async () => {
    if(!nextList) return setError('No hay más')
    const response = await getAll({ url: nextList }).then<Pokemons>(res => res.json())
    setList(response.results)
    setPrevList(response.previous)
    setNextList(response.next)
  }

  const goBack =async () => {
    if(!prevList) return setError('No hay más')
    const response = await getAll({ url: prevList }).then<Pokemons>(res => res.json())
    setList(response.results)
    setPrevList(response.previous)
    setNextList(response.next)
  }

  return (
    <>
      <Header>
        <Form>
          <label >
            Type your pokemon
            <input name="searchBar" id="searchBar" type="text" placeholder="Ex: bulbasaur" />
          </label>
          <button type="submit" >search</button>
        </Form>
        <button onClick={goBack}>Back</button>
        <button onClick={getAnother}>Next</button>
      </Header>
      <List results={list} />
      {error}
    </>
  )
}
