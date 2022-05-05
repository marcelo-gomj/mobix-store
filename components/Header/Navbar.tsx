import Link from 'next/link';

import navbar from './Navbar.module.css';

export function Navbar(){
    return (
        <nav className={navbar.container}>
            <ul className={navbar.menu}>
                <li>
                    <Link href="/clothes">Roupas</Link>
                </li>
                <li>
                    <Link href="/eletronics">Eletronicos</Link>
                </li>
                <li>
                    <Link href="/jewerls">Joías</Link>
                </li>
                <li>
                    <Link href="/about">Sobre</Link>
                </li>
            </ul>
        </nav>
    )
}