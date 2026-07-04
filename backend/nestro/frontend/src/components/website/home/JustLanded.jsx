'use client'
import Link from 'next/link'
import Image from 'next/image'
import { IconTruck } from '@tabler/icons-react'
import ProductCard from '../ui/ProductCard'
import { products } from '@/data/products'

export default function JustLanded() {

  const centerProducts = products.slice(4, 6)

  const featured = {
    tag: 'FEATURED',
    name: 'Scandinavian Dining Set',
    description: 'Ash wood + linen chairs. Set of 4.',
    price: '₹1,24,000',
    image:
      'https://images.unsplash.com/photo-1519643381401-22c77e60520e?auto=format&fit=crop&w=900&q=80',
  }

  return (
    <section>

      {/* Header */}
      <div className="flex justify-between items-end mb-6">
        <div>
          <div className="text-[10px] tracking-[0.18em] uppercase text-[#8B5E3C] mb-2">
            NEW ARRIVALS
          </div>
          <h2 className="text-2xl md:text-3xl font-normal text-[#1E1E1E]">
            Just Landed
          </h2>
        </div>

        <Link
          href="/store"
          className="text-[12px] text-[#8B5E3C] border-b border-[#C6A27E] pb-px"
        >
          View all
        </Link>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.8fr_1fr_1fr] gap-4 items-start">

        {/* LEFT FEATURE CARD */}
        <div className="bg-[#2C2016] rounded-2xl p-6 flex flex-col gap-6 self-start">

          <div>
            <div className="text-[10px] tracking-[0.18em] uppercase text-[#C6A27E] mb-3">
              {featured.tag}
            </div>

            <h3 className="text-[22px] text-white leading-tight mb-2">
              {featured.name}
            </h3>

            <p className="text-[12px] text-white/60 mb-4">
              {featured.description}
            </p>

            <div className="text-[20px] text-[#D6BFA7] font-medium mb-4">
              {featured.price}
            </div>

            <Link
              href="/product/1"
              className="inline-block bg-[#8B5E3C] hover:bg-[#6F4A2E] text-white px-5 py-2.5 rounded-md text-[11px] uppercase tracking-[0.06em]"
            >
              View in Store
            </Link>
          </div>

          <div className="relative w-full h-[200px] rounded-xl overflow-hidden">
            <Image
              src={featured.image}
              alt={featured.name}
              fill
              className="object-cover"
            />
          </div>

        </div>

<div className="flex flex-col gap-4">

  {centerProducts.map((product) => (
    <div
      key={product.id}
      className="rounded-xl overflow-hidden border border-[#E8E0D5] bg-white"
    >

      {/* Image */}
      <div className="relative h-[150px]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Body */}
      <div className="p-4">

        {/* Category */}
        <div className="text-[10px] uppercase tracking-[0.14em] text-[#6B7280] mb-1">
          {product.category}
        </div>

        {/* Title */}
        <div className="text-[13px] font-medium text-[#1E1E1E] mb-2">
          {product.name}
        </div>

        {/* Stars + Price Row */}
        <div className="flex items-center justify-between">

          {/* Stars */}
          <div className="flex items-center gap-1 text-[#C6A27E]">
            {[...Array(5)].map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>

          {/* Price */}
          <div className="text-[14px] font-medium text-[#1E1E1E]">
            {product.price}
          </div>

        </div>

      </div>
    </div>
  ))}

</div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-4">

          {/* Offer Card */}
          <div className="bg-[#F5EDE4] rounded-xl p-5">
            <div className="text-[10px] uppercase tracking-[0.14em] text-[#8B5E3C] mb-2">
              OFFER
            </div>

            <div className="text-[14px] font-medium mb-1">
              First order 15% off
            </div>

            <div className="text-[12px] text-[#6B7280] mb-3">
              Use code Nestro15 at checkout
            </div>

            <Link
              href="/store"
              className="inline-block bg-[#8B5E3C] text-white px-4 py-2 rounded-md text-[11px]"
            >
              Shop Now
            </Link>
          </div>

          {/* Free Delivery */}
          <div className="bg-white border border-[#E8E0D5] rounded-xl p-5">
            <div className="text-[10px] uppercase tracking-[0.14em] text-[#6B7280] mb-2">
              FREE DELIVERY
            </div>

            <div className="text-[14px] font-medium mb-1">
              On orders above ₹50,000
            </div>

            <div className="text-[12px] text-[#6B7280] mb-3">
              White glove service. Assembly included.
            </div>

            <div className="text-[#8B5E3C]">
              <IconTruck size={20} stroke={1.8} />
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}