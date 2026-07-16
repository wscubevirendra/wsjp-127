import Link from 'next/link'
import Image from 'next/image'
import { IconHeart } from '@tabler/icons-react'
import CartBtn from './CartBtn'


export default function ProductCard({ product }) {

  const {
    _id,
    thumbnail,
    categoryId,
    name,
    salePrice,
    originalPrice,
  } = product;

  return (
    <div
     
      className="group relative bg-white rounded-xl overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] rounded-t-xl overflow-hidden bg-[#F0EBE3]">
        {thumbnail ? (
          <Link  href={`/product/${_id}`}>
          <Image
            src={thumbnail}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          </Link>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-[#C6A27E]/40">
            <span className="text-4xl">🛋</span>
          </div>
        )}

        <CartBtn product={product} />
      </div>

      {/* Body */}
      <div className="px-4 py-3 flex flex-col gap-1.5">
        {categoryId && (
          <span className="text-[10px] uppercase tracking-[0.14em] text-[#6B7280]">{categoryId?.name}</span>
        )}
        <p className="text-[13px] font-medium text-[#1E1E1E] leading-snug line-clamp-2">{name}</p>
        <div className="flex items-center gap-2 mt-0.5">
          <span className="text-[14px] font-medium text-[#1E1E1E]">{salePrice}</span>
          <span className="text-[11px] line-through text-[#6B7280]">{originalPrice}</span>
        </div>
      </div>
    </div>
  )
}
