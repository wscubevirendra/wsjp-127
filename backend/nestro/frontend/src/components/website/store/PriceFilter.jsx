'use client'

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
export default function PriceFilter() {
  const router=useRouter();
  const [priceRange, setPriceRange] = useState({ min: 300, max: 100000 });
  const searchParams = useSearchParams();
  const minPrice = searchParams.get("min") || "";
  const maxPrice = searchParams.get("max") || "";


  function priceHandler() {
    // Implement the logic to handle price filter changes
    const params = new URLSearchParams(searchParams.toString());
    if (priceRange.min && priceRange.max) {
      params.set("min", priceRange.min);
      params.set("max", priceRange.max);
    } else {
      params.delete("min");
      params.delete("max");
    }
    router.push(`/store?${params.toString()}`);
  

  }

  function clearFilters() {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("min");
    params.delete("max");
    router.push(`/store?${params.toString()}`);
  }

  return (
    <section className="border-b border-stone-200 pb-7">

      <h3 className="mb-5 text-base font-semibold text-stone-900">
        Price Range
      </h3>

      <div className="flex items-center gap-3">

        <input
          type="number"
          placeholder="Min ₹"
          className="h-11 w-full rounded-lg border border-stone-300 px-3 text-sm outline-none transition focus:border-amber-700"
          value={priceRange.min}
          onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
        />

        <span className="text-stone-400">—</span>

        <input
          type="number"
          placeholder="Max ₹"
          value={priceRange.max}
          onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
          className="h-11 w-full rounded-lg border border-stone-300 px-3 text-sm outline-none transition focus:border-amber-700"
        />

      </div>

      <button onClick={priceHandler} className="mt-4 w-full rounded-lg bg-amber-700 py-2.5 text-sm font-semibold text-white transition hover:bg-amber-800">
        Apply Price
      </button>

        <button onClick={clearFilters} className="mt-4 w-full rounded-lg bg-amber-700 py-2.5 text-sm font-semibold text-white transition hover:bg-amber-800">
        Clear Filters
      </button>
      

    </section>
  );
}