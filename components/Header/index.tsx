import { Navbar } from "./Navbar";
import { Controllers } from "./Controllers";

import header from './Header.module.css';
import Link from "next/link";

export function Header(){
    return (
        <header className={header.container}>
            <div className={header["limit-container"]}>
                <div className={header.logo}>
                    <h1>
                        <Link href="/">Mobix Store</Link>
                    </h1>
                    <div className={header.logo_line}></div>
                </div>

                <Navbar />

                <Controllers />
            </div>
        </header>
    )
}