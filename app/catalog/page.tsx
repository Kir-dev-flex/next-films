import SearchBar from '@/components/SearchBar'
import Link from 'next/link'

export interface Film {
    id: number
    title: string
    body: string
}

export const metadata = {
    title: "Каталог",
}

async function getFilms () {
    const response = await(fetch(`${process.env.API_BASE_URL}/posts?_limit=10`, { cache: 'no-store' }))
    const data = await response.json() as Film[]
    return data
}

export default async function CatalogPage () {
    
    const films = await getFilms()
    return (
        <SearchBar movies={films} />
    )
}