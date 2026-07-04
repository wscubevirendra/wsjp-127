import { fetchCategory, fetchRoom } from "@/utils/api"

const colorSwatches = {
  Ivory: '#F5F0E8',
  Walnut: '#7B4F2E',
  Ebony: '#2C1810',
  Slate: '#6B7280',
}

const filterGroups = {
  category: ['Sofas', 'Chairs', 'Tables', 'Storage', 'Bedroom'],
  room: ['Living Room', 'Dining Room', 'Bedroom', 'Office'],
  material: ['Solid Wood', 'Velvet', 'Linen', 'Marble'],
  color: ['Ivory', 'Walnut', 'Ebony', 'Slate'],
}

export default async function FilterSidebar() {
  const categories = await fetchCategory();
  const rooms = await fetchRoom()
  return (
    <aside className="bg-white border border-[#E8E0D5] rounded-xl p-6 sticky top-[72px] flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <p className="text-[13px] font-medium text-[#1E1E1E]">Filters</p>
        <button className="text-[11px] text-[#8B5E3C] hover:underline">
          Clear All
        </button>
      </div>

      {/* Category */}
      <FilterGroup label="Category">
        {categories.data.map((cat) => (
          <CheckboxRow key={cat._id} label={cat.name} />
        ))}
      </FilterGroup>

      {/* Room */}
      <FilterGroup label="Room">
        {rooms.data.map((room) => (
          <CheckboxRow key={room._id} label={room.name} />
        ))}
      </FilterGroup>

      {/* Price Range */}
      <FilterGroup label="Price Range">
        <div className="flex gap-2 items-center">
          <input
            type="number"
            placeholder="Min"
            className="w-full border border-[#E8E0D5] rounded-md px-2 py-1.5 text-[12px] text-[#1E1E1E] placeholder-[#aaa] outline-none focus:border-[#C6A27E] transition-colors"
          />
          <span className="text-xs text-[#6B7280]">–</span>
          <input
            type="number"
            placeholder="Max"
            className="w-full border border-[#E8E0D5] rounded-md px-2 py-1.5 text-[12px] text-[#1E1E1E] placeholder-[#aaa] outline-none focus:border-[#C6A27E] transition-colors"
          />
        </div>
      </FilterGroup>

      {/* In Stock */}
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          className="w-4 h-4 rounded border-[#C6A27E] accent-[#8B5E3C]"
        />
        <span className="text-[12px] text-[#1E1E1E]">In Stock Only</span>
      </label>
    </aside>
  )
}

function FilterGroup({ label, children }) {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-[10px] tracking-[0.12em] uppercase text-[#6B7280] font-medium">
        {label}
      </p>
      {children}
    </div>
  )
}

function CheckboxRow({ label }) {
  return (
    <label className="flex items-center gap-2 cursor-pointer group">
      <input
        type="checkbox"
        className="w-4 h-4 rounded border-[#C6A27E] accent-[#8B5E3C]"
      />
      <span className="text-[12px] text-[#1E1E1E] group-hover:text-[#8B5E3C] transition-colors">
        {label}
      </span>
    </label>
  )
}
