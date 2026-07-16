import { fetchCategory, fetchRoom } from "@/utils/api";

import FilterSection from "./FilterSection";
import PriceFilter from "./PriceFilter";
import StockFilter from "./StockFilter";

export default async function FilterSidebar() {
  const categories = await fetchCategory();
  const rooms = await fetchRoom();

  return (
    <aside className="sticky top-20 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">

      <div className="mb-8 flex items-center justify-between border-b border-stone-200 pb-5">
        <div>
          <h2 className="text-xl font-bold text-stone-900">
            Filters
          </h2>

          <p className="mt-1 text-sm text-stone-500">
            Refine your search
          </p>
        </div>

        <button className="text-sm font-medium text-amber-700 hover:underline">
          Clear All
        </button>
      </div>

      <div className="space-y-8">
        <FilterSection
          title="Browse by Room"
          data={rooms.data}
          queryKey="room"
        />

        <FilterSection
          title="Product Category"
          data={categories.data}
          queryKey="category"
        />

        <PriceFilter />

        <StockFilter />
      </div>

    </aside>
  );
}