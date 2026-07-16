'use client'

import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'
import { useSearchParams,useRouter } from 'next/navigation';

export default function Pagination({pages}) {
  const seachParams=useSearchParams()
  const currentPage = parseInt(seachParams.get('page')) || 1;
  const router=useRouter()
  const pageNumbers = Array.from({ length: pages }, (_, i) => i + 1);

  function handlePageChange(pageNumber) {
    const searchParams = new URLSearchParams(seachParams.toString());
    searchParams.set('page', pageNumber);
    router.push(`/store?${searchParams.toString()}`);
  }

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

        {pageNumbers.map((page, index) => (

         <button
         onClick={()=>handlePageChange(page)}
              aria-label={`Page ${page}`}
              className={`w-8 h-8 rounded-md border text-[12px] font-medium transition-colors ${
                currentPage === page
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

    </div>
  )
}
