// Ого, даже такой файл вшит в некст, очень удобно
export default function Loading () {
    return (
        <ul>
            {Array.from({ length: 6 }).map((_, i) => (
                <li key={i} className="h-5 bg-gray-200 rounded mb-2 animate-pulse">тест</li>
            ))}
        </ul>
    )
}