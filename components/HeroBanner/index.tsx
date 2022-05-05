import { useState, useEffect } from 'react';
import hero from './HeroBanner.module.css';

export function HeroBanner(){
    const [ state, setState ] = useState<number>(0);

    const banners = [
        {title : 'Produtos 50%', bg: 'rgb(130, 100, 20)'},
        {title : 'Produtos 70%', bg: 'rgb(45, 200, 100)'},
        {title : 'Produtos 30%', bg: 'rgb(0, 140, 120)'},
        {title : 'Produtos 60%', bg: 'rgb(50, 200, 90)'},
        {title : 'Produtos 20%', bg: 'rgb(35, 200, 0)'}
    ]

    useEffect(() => {
        setTimeout(() => {
            const tick = state + 1;
            
            if(tick < 5){
                setState(tick)
            }else{
                setState(0)
            }
        }, 10000)
    });

    return(
        <section className={hero.container}>
            {
                banners.map((banner, index) => {
                    return (
                        <div 
                            className={hero.hero}
                            key={index}
                            style={{
                                display: state === index ? 'flex' : 'none', 
                                background: banner.bg
                            }}
                        >
                            {banner.title}
                        </div>
                    )
                })
            }

            <footer>
                {banners.map(banner => <div>{banner.title}</div>)}
            </footer>
        </section>
    )
}