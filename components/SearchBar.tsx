'use client'

import { Film } from "@/app/catalog/page"
import Link from "next/link"
import { useState } from "react"

export default function SearchBar ({ movies }: { movies: Film[] }) {
    const [ search, setSearch ] = useState('')

    const filtered = movies.filter(m => 
        m.title.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div className="flex flex-col gap-4 p-4">
            <input className='bg-white rounded-sm text-red-900 p-1' type="text" value={search} onChange={(e) => setSearch(e.target.value)}/>
            <p>Найдено: </p>
            <ul className="flex flex-col gap-4">
                {filtered.map((item) => {
                    return (
                        <li key={item.id}>
                            <Link href={`catalog/${item.id}`}>{item.title}</Link>
                            </li>
                    )
                })}
            </ul>
        </div>
    )
}