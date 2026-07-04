'use client'

import { useState } from 'react'
import {
  IconShoppingBag,
  IconCheck,
  IconHeart,
  IconShare,
  IconCircleCheck,
  IconCircleX,
} from '@tabler/icons-react'
import RatingStars from '@/components/ui/RatingStars'
import VariantSelector from './VariantSelector'
import QuantitySelector from './QuantitySelector'
import ProductUSP from './ProductUSP'

export default function ProductInfo({ product }) {
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] ?? null)
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] ?? null)
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  const savings =
    product.priceValue && product.oldPrice
      ? product.oldPrice.replace(/[₹,]/g, '') - product.priceValue
      : null

  const handleAddToCart = () => {
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Category + stock */}
      <div className="flex items-center justify-between">
        <span className="text-[10px] uppercase tracking-[0.14em] text-[#6B7280]">
          {product.category}
        </span>
        {product.inStock ? (
          <span className="flex items-center gap-1 text-[11px] text-green-600">
            <IconCircleCheck size={13} stroke={1.8} />
            In Stock
          </span>
        ) : (
          <span className="flex items-center gap-1 text-[11px] text-red-500">
            <IconCircleX size={13} stroke={1.8} />
            Out of Stock
          </span>
        )}
      </div>

      <h1 className="text-3xl md:text-4xl font-normal text-[#1E1E1E] leading-tight">
        {product.name}
      </h1>

      <RatingStars rating={product.rating} reviews={product.reviews} />

      <div className="flex items-end gap-3 flex-wrap">
        <span className="text-2xl font-medium text-[#1E1E1E]">{product.price}</span>
        {product.oldPrice && (
          <span className="text-sm line-through text-[#6B7280]">{product.oldPrice}</span>
        )}
        {savings > 0 && (
          <span className="text-[11px] bg-[#F5EDE4] text-[#8B5E3C] px-2 py-1 rounded-full">
            Save ₹{savings.toLocaleString('en-IN')}
          </span>
        )}
      </div>

      <div className="border-t border-[#E8E0D5]" />

      {product.colors?.length > 0 && (
        <VariantSelector
          label="Color"
          options={product.colors}
          selected={selectedColor}
          setSelected={setSelectedColor}
          type="color"
        />
      )}

      {product.sizes?.length > 0 && (
        <VariantSelector
          label="Size"
          options={product.sizes}
          selected={selectedSize}
          setSelected={setSelectedSize}
          type="size"
        />
      )}

      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />

      <div className="flex gap-3 flex-wrap">
        <button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className={`flex-1 min-w-[140px] flex items-center justify-center gap-2 text-[11px] tracking-[0.08em] uppercase px-6 py-3.5 rounded font-medium transition-all ${
            added
              ? 'bg-green-600 text-white'
              : product.inStock
              ? 'bg-[#8B5E3C] text-white hover:opacity-90'
              : 'bg-[#E8E0D5] text-[#6B7280] cursor-not-allowed'
          }`}
        >
          {added
            ? <><IconCheck size={14} stroke={1.8} /> Added!</>
            : <><IconShoppingBag size={14} stroke={1.8} /> {product.inStock ? 'Add to Cart' : 'Out of Stock'}</>
          }
        </button>

        <button
          disabled={!product.inStock}
          className={`flex-1 min-w-[140px] text-[11px] tracking-[0.08em] uppercase px-6 py-3.5 rounded font-medium transition-all ${
            product.inStock
              ? 'bg-[#2C2016] text-[#D6BFA7] hover:opacity-90'
              : 'bg-[#E8E0D5] text-[#6B7280] cursor-not-allowed'
          }`}
        >
          Buy Now
        </button>
      </div>

      <div className="flex gap-4">
        <button className="flex items-center gap-1.5 text-[11px] text-[#6B7280] hover:text-[#8B5E3C] transition-colors">
          <IconHeart size={15} stroke={1.8} />
          Add to Wishlist
        </button>
        <button className="flex items-center gap-1.5 text-[11px] text-[#6B7280] hover:text-[#8B5E3C] transition-colors">
          <IconShare size={15} stroke={1.8} />
          Share
        </button>
      </div>

      <div className="border-t border-[#E8E0D5]" />
      <ProductUSP />
    </div>
  )
}
