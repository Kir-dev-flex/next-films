"use client" // О как можно сделать, типо клиентский компонент внутри серверного

import { useState } from "react"

export default function FavouriteButton () {
    const [favourite, setFavourite] = useState(false) // а в реальном проекте это наверное пихалось бы в zustand или сразу на сервер пушилось, но тут так будем

    return (
        // Балуюсь с Tailwind, изучаю
        <button className="bg-yellow-500 text-red-500 w-fit mx-auto p-4 rounded-sm" onClick={() => {setFavourite(prev => !prev)}}>
            {
            favourite? 'Убрать из избранного' : 'Добавить в Избранное'
            }
        </button>
    )
}