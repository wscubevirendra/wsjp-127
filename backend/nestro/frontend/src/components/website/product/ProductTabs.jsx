'use client'

import { useState } from 'react'
import RatingStars from '@/components/ui/RatingStars'

const tabs = ['Description', 'Specifications', 'Reviews']

const mockReviews = [
  {
    id: 1,
    name: 'Priya Rao',
    location: 'Mumbai',
    rating: 5,
    date: 'March 2025',
    text: 'Absolutely stunning piece. The craftsmanship is exceptional and the delivery was seamless. It has completely transformed our living room.',
  },
  {
    id: 2,
    name: 'Arjun Mehta',
    location: 'Bangalore',
    rating: 5,
    date: 'January 2025',
    text: 'Worth every rupee. The quality of materials and the attention to detail is remarkable. Nestro truly delivers on its promise of Scandinavian elegance.',
  },
]

export default function ProductTabs({ description, specs }) {
  const [activeTab, setActiveTab] = useState('Description')

  return (
    <div>
      {/* Tab headers */}
      <div className="flex border-b border-[#E8E0D5] gap-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-3 text-[13px] font-medium transition-colors ${
              activeTab === tab
                ? 'border-b-2 border-[#8B5E3C] text-[#8B5E3C]'
                : 'text-[#6B7280] hover:text-[#1E1E1E]'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="pt-8">
        {/* Description */}
        {activeTab === 'Description' && (
          <div className="max-w-[720px]">
            <p className="text-sm text-[#4B4B4B] leading-relaxed">
              {description}
            </p>
          </div>
        )}

        {/* Specifications */}
        {activeTab === 'Specifications' && specs && (
          <div className="max-w-[560px]">
            <div className="divide-y divide-[#E8E0D5] border border-[#E8E0D5] rounded-xl overflow-hidden">
              {Object.entries(specs).map(([key, value]) => (
                <div key={key} className="grid grid-cols-2 px-5 py-3">
                  <span className="text-[12px] uppercase tracking-[0.08em] text-[#6B7280]">
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </span>
                  <span className="text-[13px] text-[#1E1E1E]">{value}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Reviews */}
        {activeTab === 'Reviews' && (
          <div className="flex flex-col gap-6 max-w-[720px]">
            {mockReviews.map((review) => (
              <div
                key={review.id}
                className="bg-white border border-[#E8E0D5] rounded-xl p-6 flex flex-col gap-3"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[13px] font-medium text-[#1E1E1E]">{review.name}</p>
                    <p className="text-[11px] text-[#6B7280]">
                      {review.location} · {review.date}
                    </p>
                  </div>
                  <RatingStars rating={review.rating} />
                </div>
                <p className="text-sm text-[#4B4B4B] italic leading-relaxed">
                  "{review.text}"
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
