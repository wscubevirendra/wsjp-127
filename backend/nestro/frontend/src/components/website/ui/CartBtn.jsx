'use client'

import React from 'react'
import { IconHeart } from '@tabler/icons-react'
import { addToCart } from '@/redux/features/cartSlice'
import { useDispatch } from 'react-redux';

export default function CartBtn({product}) {
     const dispatcher = useDispatch()

    function cartHandler() {
       
        dispatcher(addToCart({
            id: product._id,
            name: product.name,
            salePrice: product.salePrice,
            originalPrice: product.originalPrice,
            discount: product.discount,
            thumbnail: product.thumbnail,
            qty: 1
        }))

    }
    return (
       <div onClick={cartHandler} className="absolute z-50 bottom-0 left-0 right-0 bg-[#2C2016]/90 text-[#D6BFA7] text-[11px] tracking-[0.1em] uppercase py-2.5 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          Quick Add
        </div>
    )
}
