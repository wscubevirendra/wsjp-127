'use client'
import SectionHeader from '@website/ui/SectionHeader'
import ProductCard from '@website/ui/ProductCard'
import { products } from '@/data/products'

export default function BestSellers({data}) {
  const bestSellers = data.slice(0, 4)

  return (
    <section>
      <SectionHeader
        tag="Trending"
        title="Best Sellers"
        showLink
        linkHref="/store"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {bestSellers.map((product) => (
          <ProductCard key={product._id}   product={product} />
        ))}
      </div>
    </section>
  )
}
