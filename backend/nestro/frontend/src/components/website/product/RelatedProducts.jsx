import SectionHeader from '@/components/ui/SectionHeader'
import ProductCard from '@/components/ui/ProductCard'

export default function RelatedProducts({ currentProduct, products }) {
  const related = products
    .filter(
      (p) => p.category === currentProduct.category && p.id !== currentProduct.id
    )
    .slice(0, 4)

  if (related.length === 0) return null

  return (
    <section>
      <SectionHeader
        tag="You May Also Like"
        title="Related Products"
        showLink
        linkHref="/store"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {related.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  )
}
