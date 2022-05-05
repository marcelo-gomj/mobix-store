import User from '../../Icons/user.svg';
import Cart from '../../Icons/cart.svg';

import header from './Header.module.css';

export function Controllers(){
    return (
        <section className={header.buttons}>
            <div className={header.user}>
                <User />
            </div>

            <div className={header.cart}>
                <Cart />
            </div>
        </section>
    )
}