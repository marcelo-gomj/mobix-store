import { Navbar } from "./Navbar";

import header from './Header.module.css';

export function Header(){
    return (
        <header className={header.container}>
            <div className={header.logo}>
                <h1>Mobix Store</h1>
            </div>

            <Navbar />
        </header>
    )
}