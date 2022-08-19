export const URL_BASE = 'https://pokeapi.co/api/v2'

interface fetch {
    url?: string
    path?: string
    method?: string
    headers?: {}
}

export const useFetch = async ({
  url = URL_BASE,
  //   path,
  method = 'GET',
  headers = { 'Content-type': 'application/json' }
}: fetch) => {
  const response = await fetch(url, { method, headers })
    .then(res => res.json())
    .then(res => res)
  return response
}