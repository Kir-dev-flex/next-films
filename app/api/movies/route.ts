import { NextResponse } from "next/server"


interface Movie {
    id: number,
    title: string,
    genre: string,
}

const MOVIES = [
    { id: 1, title: "Начало", year: 2010, genre: "thriller" },
    { id: 2, title: "Интерстеллар", year: 2014, genre: "sci-fi" },
    { id: 3, title: "Довод", year: 2020, genre: "thriller" },
]

export function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const genre = searchParams.get("genre")
    const result = genre? MOVIES.filter(m => m.genre === genre) : MOVIES
    return NextResponse.json({ data: result })
}

export async function POST (request: Request) {
    const body = await request.json()
    const { title, year } = body
    if(!title || !year) {
        return NextResponse.json({ error: '...'}, { status: 400 } )
    }

    const newMovie = {
        id: MOVIES.length + 1,
        title,
        year,
        genre: body.genre ?? 'other',
    }
    return NextResponse.json({ data: newMovie }, { status: 201 })
}