import {
  IconShoppingBag,
  IconUser,
  IconMapPin,
  IconSettings,
  IconLogout,
  IconCrown,
} from '@tabler/icons-react'

const navItems = [
  { tab: 'orders',   Icon: IconShoppingBag, label: 'My Orders' },
  { tab: 'personal', Icon: IconUser,        label: 'Personal Info' },
  { tab: 'address',  Icon: IconMapPin,      label: 'Addresses' },
  { tab: 'settings', Icon: IconSettings,    label: 'Settings' },
]

export default function ProfileSidebar({ activeTab, setActiveTab }) {
  return (
    <aside className="bg-white border border-[#E8E0D5] rounded-xl p-6 flex flex-col gap-6 h-fit">

      {/* Avatar + Info */}
      <div className="flex flex-col items-center text-center gap-3">
        <div className="w-[72px] h-[72px] rounded-full bg-[#8B5E3C] flex items-center justify-center flex-shrink-0">
          <span className="text-xl font-medium text-white">RK</span>
        </div>
        <div className="flex flex-col gap-0.5">
          <p className="text-[15px] font-medium text-[#1E1E1E]">Rahul Kapoor</p>
          <p className="text-[12px] text-[#6B7280]">rahul.kapoor@email.com</p>
        </div>
        <span className="inline-flex items-center gap-1.5 bg-[#FFF8F5] border border-[#C6A27E]/40 text-[#8B5E3C] text-[10px] tracking-[0.08em] uppercase px-3 py-1 rounded-full">
          <IconCrown size={11} stroke={1.8} />
          Gold Member
        </span>
      </div>

      {/* Divider */}
      <div className="border-t border-[#E8E0D5]" />

      {/* Nav */}
      <nav className="flex flex-col gap-1">
        {navItems.map(({ tab, Icon, label }) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13px] transition-colors text-left w-full ${
              activeTab === tab
                ? 'bg-[#F5EDE4] text-[#8B5E3C] font-medium'
                : 'text-[#6B7280] hover:bg-[#F8F5F1] hover:text-[#1E1E1E]'
            }`}
          >
            <Icon size={16} stroke={1.8} className="flex-shrink-0" />
            {label}
          </button>
        ))}

        <div className="border-t border-[#E8E0D5] my-1" />

        <button className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13px] text-[#6B7280] hover:bg-red-50 hover:text-red-500 transition-colors w-full text-left">
          <IconLogout size={16} stroke={1.8} className="flex-shrink-0" />
          Sign Out
        </button>
      </nav>

    </aside>
  )
}
