import Link from 'next/link';

import navbar from './Navbar.module.css';

export function Navbar(){
    return (
        <nav className={navbar.container}>
            <ul className={navbar.menu}>
                <li>
                    <span>Roupas</span>
                    <div className={navbar.menu_select}></div>
                    <ul className={navbar.type_clothes}>
                        <li>
                            <Link href="/fundo">Feminino</Link>
                        </li>
                        <li>
                            <Link href="/fest">Mascúlino</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link href="/eletronics">Eletrônicos</Link>
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