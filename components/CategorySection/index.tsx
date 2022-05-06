import { ProductsProps } from '../../pages';
import { ProductsItem } from './ProductItem';

import category from './category.module.css';

interface CategorySectionProps {
    title: string;
    products: Array<ProductsProps>
}

export function CategorySection({title, products} : CategorySectionProps){
    return (
        <section className={category.container}>
            <header>
                <h2>{title}</h2>
            </header>
            <ul className={category.list}>
                {
                    products.map((product) => {
                        return <ProductsItem product={product} />;
                    })
                }
            </ul>
        </section>
    )
}