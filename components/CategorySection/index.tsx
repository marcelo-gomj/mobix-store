

import { ProductsProps } from '../../pages';

import category from './category.module.css';

interface CategorySectionProps {
    title: string;
    products: Array<ProductsProps>
}

export function CategorySection({title, products} : CategorySectionProps){

    return (
        <section>
            <header>
                <h3>{title}</h3>
            </header>
            <ul>
                {
                    products.map((product) => {
                        return <li>{ product.title }</li>
                    })
                }
            </ul>
        </section>
    )
}