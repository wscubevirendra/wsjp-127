import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'

const pages = [1, 2, 3]

export default function Pagination() {
  return (
    <div className="flex flex-col items-center gap-4 mt-8">
      {/* Page numbers */}
      <div className="flex items-center gap-2">
        {/* Prev */}
        <button
          aria-label="Previous page"
          className="w-8 h-8 rounded-md border border-[#E8E0D5] flex items-center justify-center text-[#6B7280] hover:border-[#C6A27E] transition-colors"
        >
          <IconChevronLeft size={14} stroke={1.8} />
        </button>

        {pages.map((page, index) => (

       
            <button
              aria-label={`Page ${page}`}
              className={`w-8 h-8 rounded-md border text-[12px] font-medium transition-colors ${
                page === 1
                  ? 'bg-[#8B5E3C] text-white border-[#8B5E3C]'
                  : 'border-[#E8E0D5] text-[#6B7280] hover:border-[#C6A27E]'
              }`}
            >
              {page}
            </button>
          
        ))}

        {/* Next */}
        <button
          aria-label="Next page"
          className="w-8 h-8 rounded-md border border-[#E8E0D5] flex items-center justify-center text-[#6B7280] hover:border-[#C6A27E] transition-colors"
        >
          <IconChevronRight size={14} stroke={1.8} />
        </button>
      </div>

      {/* Load More */}
      <button className="border border-[#C6A27E] text-[#8B5E3C] text-[11px] tracking-[0.08em] uppercase px-8 py-2.5 rounded font-medium hover:bg-[#F0EBE3] transition-colors">
        Load More Products
      </button>
    </div>
  )
}
