import Image from 'next/image';

import { ProductsProps } from '../../pages';

import item from './ProductItem.module.css';

interface ProductsItemProps {
    product: ProductsProps
}

export function ProductsItem({ product } : ProductsItemProps){
    function formatPrice(value : number){
        return Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(value)
    }

    console.log(product);
    return (
        <li className={item.card}>
            
            <Image 
                src={product.image} 
                alt={product.title}
                height='100px'
                width='60px'
                quality='100'
            />

            <h3>{product.title}</h3>
            <p>{formatPrice(product.price)}</p>
            <span>{product.rating.rate}</span>
        </li>
    )
}