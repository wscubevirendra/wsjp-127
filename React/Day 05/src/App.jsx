import React, { useEffect, useState } from 'react'

import ProductCard from './ProductCard'

export default function App() {
  const [products, setProducts] = useState([]);


  async function getProducts() {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProducts(data.products)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(
    () => {
      getProducts()
    },
    []
  )

  return (
    <div className="container-xl">
      <div className="row">
        {
          products.map((data, index) => {
            return <ProductCard thumbnail={data.thumbnail} title={data.title} />
          })
        }
      </div>

    </div>
  )
}
