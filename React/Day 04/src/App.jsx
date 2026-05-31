import React, { useState } from 'react'
import ProductCard from './ProductCard'

export default function App() {
  const [product, setProduct] = useState([
    {
      image: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp",
      title: "Essence Mascara Lash Princess"
    },
    {
      image: "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp",
      title: "Powder Canister"
    },
    {
      image: "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp",
      title: "Powder Canister"
    },
    {
      image: "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp",
      title: "Powder Canister"
    },
    {
      image: "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp",
      title: "Powder Canister"
    }
  ])



  return (
    <div className='container'>
      <div className="row gy-5">
        {
          product.map((data, index) => {
            return <ProductCard key={index} image={data.image} title={data.title} />
          })
        }
      </div>

    </div>
  )
}
