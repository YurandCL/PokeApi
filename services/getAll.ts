interface GetAll{
    url?: string
}

export const getAll = ({ url='' }: GetAll) => fetch(url)