import React from 'react'
import CategoryCard from './components/CategoryCard'
import CategorySection from './components/CategorySection'
import ProductSlider from './components/ProductSlider'

export default function App() {
  return (
    <div>
      <div className='max-w-7xl mx-auto'>
        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=2700/layout-engine/2026-01/Frame-1437256605-2-2.jpg" alt="" className='w-full h-full' />
      </div>
      <div className="max-w-7xl grid grid-cols-4 gap-10 mx-auto p-4">
        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/pharmacy-WEB.jpg" alt="" />
        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/pharmacy-WEB.jpg" alt="" />
        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/pharmacy-WEB.jpg" alt="" />
      </div>
      <CategorySection />
      <ProductSlider title="Snacks & Munchies"  />
      <ProductSlider title="Rolling paper & tobacco" />
      <ProductSlider title="Hookah"  />

    </div>
  )
}
