import Link from "next/link";

export default function Navbar () {
    return (
        <header className="flex gap-10 mb-10">
            <Link href='/'>Главная</Link>
            <Link href='/catalog'>Каталог</Link>
            <Link href='/about'>О нас</Link>
        </header>
    )
}