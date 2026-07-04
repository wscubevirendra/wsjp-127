const shippingOptions = [
  {
    id: 'standard',
    label: 'Standard Delivery',
    desc: 'Estimated 5–7 business days',
    price: 0,
    displayPrice: 'Free',
    icon: 'ti-truck',
  },
  {
    id: 'express',
    label: 'Express Delivery',
    desc: 'Estimated 1–2 business days',
    price: 1500,
    displayPrice: '₹1,500',
    icon: 'ti-rocket',
  },
]

export default function ShippingMethod({ selected, setSelected }) {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-[13px] font-medium text-[#1E1E1E]">Shipping Method</p>
      <div className="flex flex-col gap-3">
        {shippingOptions.map((option) => {
          const isActive = selected === option.id
          return (
            <button
              key={option.id}
              onClick={() => setSelected(option.id)}
              className={`w-full flex items-center gap-4 border rounded-lg p-4 text-left transition-all ${
                isActive
                  ? 'border-[#8B5E3C] bg-[#FFF8F5]'
                  : 'border-[#E8E0D5] bg-white hover:border-[#C6A27E]'
              }`}
            >
              {/* Radio indicator */}
              <div
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                  isActive ? 'border-[#8B5E3C]' : 'border-[#C6A27E]'
                }`}
              >
                {isActive && (
                  <div className="w-2.5 h-2.5 rounded-full bg-[#8B5E3C]" />
                )}
              </div>

              {/* Icon */}
              <i className={`ti ${option.icon} text-[18px] text-[#8B5E3C] flex-shrink-0`} />

              {/* Text */}
              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-medium text-[#1E1E1E]">{option.label}</p>
                <p className="text-[11px] text-[#6B7280]">{option.desc}</p>
              </div>

              {/* Price */}
              <span
                className={`text-[13px] font-medium flex-shrink-0 ${
                  option.price === 0 ? 'text-green-600' : 'text-[#1E1E1E]'
                }`}
              >
                {option.displayPrice}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
