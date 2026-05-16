import FavouriteButton from "@/components/FavouriteButton"
import { Film } from '../page'

interface Props {
    params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props) {
    const { id } = await params
    const film = await fetch(
        `${process.env.API_BASE_URL}/posts/${id}`
    ).then(res => res.json())
    
    return {
        title: film.title,
    }
}

export default async function FilmPage ({params}: Props) {
    
    const { id } = await params

    const [film, similar]: [Film, Film[]] = await Promise.all([
        fetch(`${process.env.API_BASE_URL}/posts/${id}`).then(res=>res.json()),
        fetch(`${process.env.API_BASE_URL}/posts?_limit=4`).then(res=>res.json())
    ])

    return (
        <div className='flex gap-4 flex-col p-4'>
            <div>Фильм №{id}</div>
            <div>Описание: {film.title} / {film.body}</div>
            <FavouriteButton />
            <div>Похожие фильмы: </div>
            <ul>
                {similar.map((item) => {
                    return (
                        <li key={item.id}>{item.title}</li>
                    )
                })}
            </ul>
        </div>
    )
}