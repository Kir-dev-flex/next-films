import Link from 'next/link'

export default function Home() {
  return (
    <main> 
      <h1>Каталог фильмов</h1>
      <div className='flex gap-10'>
        <Link href='/catalog'>Каталог</Link>
        <Link href='/about'>О проекте</Link>
      </div>
    </main>
  );
}
