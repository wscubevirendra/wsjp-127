const protections = [
  { icon: 'ti-shield-check', label: '5-Year Warranty' },
  { icon: 'ti-refresh', label: '30-Day Returns' },
  { icon: 'ti-tools', label: 'Free Assembly' },
  { icon: 'ti-map-pin', label: 'Tracked Delivery' },
]

export default function PurchaseProtection() {
  return (
    <div className="bg-white border border-[#E8E0D5] rounded-xl p-4">
      <div className="flex items-center gap-2 mb-3">
        <i className="ti ti-shield-check text-[18px] text-[#8B5E3C]" />
        <p className="text-[13px] font-medium text-[#1E1E1E]">Purchase Protection</p>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {protections.map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            <i className={`ti ${item.icon} text-[14px] text-[#8B5E3C]`} />
            <span className="text-[11px] text-[#6B7280]">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
