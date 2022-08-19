interface GetOnce{
    url: string
}

export const getOnce = ({ url }: GetOnce) => fetch(url)