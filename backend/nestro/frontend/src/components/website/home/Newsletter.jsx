'use client'

import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Newsletter signup:', email)
    setEmail('')
  }

  return (
    <section className="bg-[#1A1208] rounded-xl px-6 md:px-12 py-10">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
        {/* Left: Heading */}
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl md:text-3xl font-normal text-white leading-tight">
            Join Our <span className="italic text-[#D6BFA7]">Design Community</span>
          </h2>
          <p className="text-sm text-white/60">
            Subscribe to get exclusive offers, design inspiration, and early access to new collections.
          </p>
        </div>

        {/* Right: Form */}
        <form onSubmit={handleSubmit} className="flex gap-2 w-full md:w-auto">
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 md:w-[280px] bg-white/10 border border-[#C6A27E]/30 text-[#D6BFA7] placeholder-white/30 rounded-md px-4 py-2.5 text-sm outline-none focus:border-[#C6A27E]/60 transition-colors"
          />
          <button
            type="submit"
            className="bg-[#8B5E3C] text-white text-[11px] tracking-[0.08em] uppercase rounded-md px-6 py-2.5 font-medium hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}
