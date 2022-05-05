import Head from "next/head";
import { GetServerSideProps } from 'next';

import { CategorySection } from "../components/CategorySection";
import { Header } from "../components/Header";
import { HeroBanner } from "../components/HeroBanner";
import { api } from "../services/api";

export interface ProductsProps {
   id: number;
   title: string;
   price: number;
   category: string;
   image: string;
   rating: {
      rate: number;
      count: number;
   };
   description: string;
}

interface HomeProps {
   products: Array<ProductsProps>[]
}

export default function Home( {products} : HomeProps) {
   const categories = [
      'Roupas Femininas',
      'Roupas Mascúlinas',
      'Joías',
      'Eletrônicos',
   ]

   return (
      <>
         <Head>
            <title>Home</title>
         </Head>
         
         <Header />
         
         <main>
            <HeroBanner />

            {
               categories.map((category, index) => {
                  return (
                     <CategorySection 
                        key={index} 
                        title={category} 
                        products={products[index]}
                     />
                  )
               })
            }
            
         </main>

      </>
   )
}

export const getServerSideProps : GetServerSideProps = async () => {
   const categories = await api.get('/products/categories');
   const listCategories : Array<string> = await categories.data

   const allProducts = listCategories.map(async (category) => {
      const resonse = await api.get(`/products/category/${category}`);

      return resonse.data
   })

   const products = await Promise.all(allProducts);

   return {
      props: {
         products
      }
   }
}