import Image from 'next/image';

import { ProductsProps } from '../../pages';
import Fav from '../../Icons/fav.svg';

import item from './ProductItem.module.css';

interface ProductsItemProps {
    product: ProductsProps
}

export function ProductsItem({ product } : ProductsItemProps){
    function formatPrice(value : number){
        return Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(value)
    }

    function reduceTitleProduct(title : string){
        return title.split('')
            .reduce((acc, word, index) => {
                if(index < 60){
                    return acc + word
                }

                if(index === 60) return acc + '...'

                return acc
            }, '');
    }

    return (
        <li className={item.card}>
            <div className={item.product_image}>
                <Image 
                    src={product.image} 
                    alt={product.title}
                    layout='fill'
                    quality='100'
                />
            </div>

            <div className={item.description}>
                <h3>{reduceTitleProduct(product.title)}</h3>
                
                <footer>
                    <p className={item.price}>{formatPrice(product.price)}</p>
                    <div className={item.extra_infos}>
                       <div className={item.classification}>
                           <div className={item.fav_icon}>
                              <Fav />
                           </div>
                           <span className={item.rate}>{product.rating.rate}</span>
                        </div>
 
                        <button>Adicionar</button>
                    </div>
                </footer>
            </div>

        </li>
    )
}