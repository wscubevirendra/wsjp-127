export default function QuantitySelector({ quantity, setQuantity }) {
  const decrement = () => setQuantity((prev) => Math.max(1, prev - 1))
  const increment = () => setQuantity((prev) => Math.min(5, prev + 1))

  return (
    <div className="flex flex-col gap-2">
      <p className="text-[11px] uppercase tracking-[0.1em] text-[#6B7280]">Quantity</p>
      <div className="flex items-center border border-[#E8E0D5] rounded-md overflow-hidden w-fit">
        <button
          onClick={decrement}
          disabled={quantity <= 1}
          aria-label="Decrease quantity"
          className="w-10 h-10 flex items-center justify-center text-[#6B7280] hover:bg-[#F0EBE3] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          <i className="ti ti-minus text-sm" />
        </button>

        <span className="w-12 h-10 flex items-center justify-center text-[14px] font-medium text-[#1E1E1E] border-x border-[#E8E0D5]">
          {quantity}
        </span>

        <button
          onClick={increment}
          disabled={quantity >= 5}
          aria-label="Increase quantity"
          className="w-10 h-10 flex items-center justify-center text-[#6B7280] hover:bg-[#F0EBE3] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          <i className="ti ti-plus text-sm" />
        </button>
      </div>
      {quantity >= 5 && (
        <p className="text-[11px] text-[#8B5E3C]">Maximum 5 units per order</p>
      )}
    </div>
  )
}
