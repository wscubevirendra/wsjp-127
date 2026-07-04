const sampleChips = ['Living Room', 'Solid Wood']

export default function SortBar() {
  return (
    <div className="bg-white border border-[#E8E0D5] rounded-xl px-4 py-3 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
      {/* Left: count + decorative chips */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-[12px] text-[#6B7280] whitespace-nowrap">
          <span className="font-medium text-[#1E1E1E]">128</span> products found
        </span>
        {sampleChips.map((chip) => (
          <span
            key={chip}
            className="inline-flex items-center gap-1 bg-[#F5EDE4] text-[#8B5E3C] text-xs px-3 py-1 rounded-full"
          >
            {chip}
            <span className="hover:opacity-70 ml-0.5 cursor-pointer text-[10px]">✕</span>
          </span>
        ))}
      </div>

      {/* Right: sort dropdown */}
      <div className="flex items-center gap-2 flex-shrink-0">
        <span className="text-[11px] text-[#6B7280] hidden sm:block">Sort:</span>
        <select className="border border-[#E8E0D5] rounded-md px-3 py-1.5 text-[12px] text-[#1E1E1E] bg-white outline-none cursor-pointer focus:border-[#C6A27E] transition-colors">
          <option>Featured</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Newest</option>
        </select>
      </div>
    </div>
  )
}
