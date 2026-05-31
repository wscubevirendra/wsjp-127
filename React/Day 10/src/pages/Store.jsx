import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import axios from 'axios'
import ProductCardSkeleton from '../components/ProductCardSkeleton';
import { Link, useParams } from 'react-router-dom';

export default function Store() {
    const { slug } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState([]);
    const [limit, setLimit] = useState(30);

    useEffect(
        () => {
            let API = `https://dummyjson.com/products?limit=${limit}`;

            if (slug != null) {
                API = `https://dummyjson.com/products/category/${slug}`
            }
            async function fetchProduct() {
                setLoading(true)
                axios.get(API).then(
                    (response) => {
                        setProducts(response.data.products)
                    }
                ).catch(
                    (error) => {
                        setProducts([])
                    }
                ).finally(
                    () => {
                        setLoading(false)
                    }
                )

            }

            fetchProduct();
        },
        [slug, limit]
    )

    useEffect(
        () => {
            const getCategories = async () => {
                try {
                    const response = await axios.get("https://dummyjson.com/products/categories");
                    setCategories(response.data)

                } catch (error) {
                    setCategories([])
                }
            }

            getCategories()

        },
        []
    )

    return (
        <div className='flex max-w-7xl'>
            <div className='w-[256px]  p-4'>
                <h2 className='text-xl font-bold my-4'>Filter</h2>
                <div className='flex  flex-col gap-4'>
                    <Link className={`shadow ${slug == null ? "bg-[#282d3b] text-white scale-105 " : ""} hover:font-bold  p-2 rounded-sm text-sm`} to="/store">
                        All
                    </Link>
                    {
                        categories.map((category, index) => {
                            return (
                                <Link className={`shadow ${slug == category.slug ? "bg-[#282d3b] text-white scale-105 " : ""} hover:font-bold  p-2 rounded-sm text-sm`} to={`/store/${category.slug}`}>
                                    {category.name}
                                </Link>
                            )
                        })
                    }
                </div>

            </div>
            <div className='flex-1 content-start  p-4 grid grid-cols-3 gap-4'>
                <div className='col-span-full'>
                    <select onChange={(e) => {
                        setLimit(e.target.value)
                    }} className=' shadow px-10 py-1 bg-[#282d3b] text-white font-medium'>
                        <option value="3">3</option>
                        <option value="30">30</option>
                        <option value="60">60</option>
                        <option value="90">90</option>
                        <option value="120">120</option>
                        <option value="150">150</option>
                        <option value="190">180</option>
                        <option value="210">210</option>
                    </select>
                </div>
                {
                    loading
                        ?

                        [1, 2, 3, 2, 3, 2, 2, 3, 3, 4, 5].map(o => <ProductCardSkeleton />)
                        :
                        products.map((data, index) => {
                            return (
                                <ProductCard key={data.id} id={data.id} title={data.title} thumbnail={data.thumbnail} category={data.category} price={data.price} />
                            )
                        })
                }


            </div>

        </div>
    )
}
