import Link from "next/link";

export default function CatalogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex'>
        <aside>
            <ul className='flex flex-col gap-4'>
                <li><Link href='/catalog'>Все</Link></li>
                <li><Link href='/catalog'>Боевик</Link></li>
                <li><Link href='/catalog'>Комедия</Link></li>
                <li><Link href='/catalog'>Драма</Link></li>
                <li><Link href='/catalog'>Фантастика</Link></li>
            </ul>
        </aside>
        {children}
    </div>
  );
}
