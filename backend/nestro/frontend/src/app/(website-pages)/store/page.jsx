'use client'

import { useState } from 'react'
import { IconAdjustmentsHorizontal, IconX } from '@tabler/icons-react'
import Container from '@website/ui/Container'
import ProductCard from '@website/ui/ProductCard'
import StoreHero from '@website/store/StoreHero'
import FilterSidebar from '@website/store/FilterSidebar'
import SortBar from '@website/store/SortBar'
import Pagination from '@website/store/Pagination'
import PromoBanner from '@website/store/PromoBanner'
import { products } from '@/data/products'

export default function StorePage() {
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <>
      <Container className="mt-6">
        <StoreHero />
      </Container>

      <Container className="mt-10 mb-20">
        <div className="flex gap-6">

          {/* ── Desktop Sidebar ────────────────────── */}
          <div className="hidden lg:block w-[250px] flex-shrink-0">
            <FilterSidebar />
          </div>

          {/* ── Main Content ───────────────────────── */}
          <div className="flex-1 min-w-0">

            {/* Mobile filter toggle */}
            <div className="flex lg:hidden justify-end mb-3">
              <button
                onClick={() => setDrawerOpen(true)}
                className="flex items-center gap-2 border border-[#E8E0D5] rounded-xl px-4 py-2 text-[12px] text-[#1E1E1E] bg-white hover:border-[#C6A27E] transition-colors"
              >
                <IconAdjustmentsHorizontal size={16} stroke={1.8} className="text-[#8B5E3C]" />
                Filters
              </button>
            </div>

            {/* Sort bar */}
            <SortBar />

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mt-6">
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            {/* Promo Banner */}
            <PromoBanner />

            {/* Pagination */}
            <Pagination />

          </div>
        </div>
      </Container>

      {/* ── Mobile Drawer ──────────────────────────── */}
      {drawerOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-[400] lg:hidden"
            onClick={() => setDrawerOpen(false)}
          />
          <div className="fixed top-0 left-0 bottom-0 w-[300px] z-[500] bg-white overflow-y-auto lg:hidden shadow-2xl">
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#E8E0D5]">
              <p className="font-medium text-[#1E1E1E]">Filters</p>
              <button
                onClick={() => setDrawerOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#F0EBE3] transition-colors"
              >
                <IconX size={16} stroke={1.8} className="text-[#1E1E1E]" />
              </button>
            </div>
            <div className="p-4">
              <FilterSidebar />
            </div>
          </div>
        </>
      )}
    </>
  )
}
