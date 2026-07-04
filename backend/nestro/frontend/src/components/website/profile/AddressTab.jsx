import { IconHome, IconBuilding, IconPlus } from '@tabler/icons-react'

const addresses = [
  {
    id: 1,
    label: 'Home',
    name: 'Rahul Kapoor',
    line1: '42, Sunset Boulevard',
    line2: 'Bandra West, Mumbai',
    state: 'Maharashtra 400050',
    phone: '+91 98765 43210',
    isDefault: true,
  },
  {
    id: 2,
    label: 'Office',
    name: 'Rahul Kapoor',
    line1: '1202, Skyline Tower, Andheri East',
    line2: 'Mumbai',
    state: 'Maharashtra 400069',
    phone: '+91 98765 43210',
    isDefault: false,
  },
]

export default function AddressTab() {
  return (
    <div className="bg-white border border-[#E8E0D5] rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[15px] font-medium text-[#1E1E1E]">Saved Addresses</h2>
        <button className="flex items-center gap-1.5 text-[11px] tracking-[0.06em] border border-[#C6A27E] text-[#8B5E3C] px-4 py-2 rounded hover:bg-[#F0EBE3] transition-colors">
          <IconPlus size={13} stroke={1.8} />
          Add New
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {addresses.map((addr) => {
          const AddrIcon = addr.label === 'Home' ? IconHome : IconBuilding
          return (
            <div key={addr.id} className="relative border border-[#E8E0D5] rounded-lg p-4 flex flex-col gap-2">
              {/* Default badge */}
              {addr.isDefault && (
                <span className="absolute top-3 right-3 bg-[#F5EDE4] text-[#8B5E3C] text-[10px] px-2 py-1 rounded-full">
                  Default
                </span>
              )}

              {/* Label */}
              <div className="flex items-center gap-2">
                <AddrIcon size={15} stroke={1.8} className="text-[#8B5E3C]" />
                <p className="text-[13px] font-medium text-[#1E1E1E]">{addr.label}</p>
              </div>

              {/* Address lines */}
              <div className="flex flex-col gap-0.5 pl-6">
                <p className="text-[13px] text-[#1E1E1E]">{addr.name}</p>
                <p className="text-[12px] text-[#6B7280]">{addr.line1}</p>
                <p className="text-[12px] text-[#6B7280]">{addr.line2}</p>
                <p className="text-[12px] text-[#6B7280]">{addr.state}</p>
                <p className="text-[12px] text-[#6B7280]">{addr.phone}</p>
              </div>

              {/* Actions */}
              <div className="flex gap-3 pl-6 mt-1">
                <button className="text-[11px] text-[#8B5E3C] hover:underline">Edit</button>
                {!addr.isDefault && (
                  <>
                    <span className="text-[#E8E0D5]">|</span>
                    <button className="text-[11px] text-[#6B7280] hover:text-[#8B5E3C]">Set Default</button>
                    <span className="text-[#E8E0D5]">|</span>
                    <button className="text-[11px] text-red-400 hover:text-red-600">Delete</button>
                  </>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
