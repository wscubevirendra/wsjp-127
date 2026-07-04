'use client'

import { useState } from 'react'

export default function PromoCode({ onApply }) {
  const [code, setCode] = useState('')
  const [message, setMessage] = useState(null)

  const handleApply = () => {
    const upper = code.trim().toUpperCase()
    if (upper === 'NESTRO15') {
      onApply(0.15)
      setMessage({ type: 'success', text: 'Promo code applied! 15% discount.' })
      setCode('')
    } else if (upper === '') {
      setMessage({ type: 'error', text: 'Please enter a promo code' })
    } else {
      onApply(0)
      setMessage({ type: 'error', text: 'Invalid promo code' })
    }
  }

  return (
    <div className="bg-white border border-[#E8E0D5] rounded-xl p-4">
      <p className="text-[13px] font-medium text-[#1E1E1E] mb-3">Promo Code</p>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Enter code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleApply()}
          className="flex-1 border border-[#E8E0D5] rounded-md px-3 py-2 text-[13px] text-[#1E1E1E] bg-white outline-none focus:border-[#C6A27E] transition-colors placeholder-[#aaa]"
        />
        <button
          onClick={handleApply}
          className="px-4 py-2 bg-[#8B5E3C] text-white text-[11px] tracking-[0.06em] uppercase rounded-md font-medium hover:opacity-90 transition-opacity"
        >
          Apply
        </button>
      </div>
      {message && (
        <p
          className={`text-[11px] mt-2 px-3 py-1.5 rounded ${
            message.type === 'success'
              ? 'bg-green-100 text-green-700'
              : 'bg-red-100 text-red-600'
          }`}
        >
          {message.text}
        </p>
      )}
    </div>
  )
}
