'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import Container from '@website/ui/Container'
import ProductGallery from '@website/product/ProductGallery'
import ProductInfo from '@website/product/ProductInfo'
import ProductTabs from '@website/product/ProductTabs'
import RelatedProducts from '@website/product/RelatedProducts'
import { products } from '@/data/products'

export default function ProductPage() {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <i className="ti ti-mood-sad text-[48px] text-[#C6A27E]" />
        <p className="text-xl font-medium text-[#1E1E1E]">Product Not Found</p>
        <p className="text-sm text-[#6B7280]">
          The product you're looking for doesn't exist or has been removed.
        </p>
        <Link
          href="/store"
          className="mt-2 text-[11px] tracking-[0.08em] uppercase bg-[#8B5E3C] text-white px-6 py-2.5 rounded font-medium hover:opacity-90 transition-opacity"
        >
          Back to Store
        </Link>
      </div>
    )
  }

  return (
    <>
      {/* Breadcrumb */}
      <Container className="mt-6">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-[11px] text-[#6B7280] flex-wrap">
            <li>
              <Link href="/" className="hover:text-[#8B5E3C] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <i className="ti ti-chevron-right text-[10px]" />
            </li>
            <li>
              <Link href="/store" className="hover:text-[#8B5E3C] transition-colors">
                Store
              </Link>
            </li>
            <li>
              <i className="ti ti-chevron-right text-[10px]" />
            </li>
            <li>
              <Link
                href={`/store?category=${product.category}`}
                className="hover:text-[#8B5E3C] transition-colors"
              >
                {product.category}
              </Link>
            </li>
            <li>
              <i className="ti ti-chevron-right text-[10px]" />
            </li>
            <li className="text-[#1E1E1E] font-medium line-clamp-1">{product.name}</li>
          </ol>
        </nav>
      </Container>

      {/* Gallery + Info */}
      <Container className="mt-6">
        <div className="grid lg:grid-cols-2 gap-10 xl:gap-16">
          <ProductGallery images={product.images} badge={product.badge} />
          <ProductInfo product={product} />
        </div>
      </Container>

      {/* Tabs: Description / Specs / Reviews */}
      <Container className="mt-14">
        <ProductTabs description={product.description} specs={product.specs} />
      </Container>

      {/* Related Products */}
      <Container className="mt-16 mb-20">
        <RelatedProducts currentProduct={product} products={products} />
      </Container>
    </>
  )
}
