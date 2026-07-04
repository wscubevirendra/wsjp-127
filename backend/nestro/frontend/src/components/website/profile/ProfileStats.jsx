const stats = [
  { value: '7', label: 'Total Orders' },
  { value: '₹4.2L', label: 'Total Spent' },
  { value: '420', label: 'Reward Points' },
  { value: '3', label: 'Reviews Given' },
]

export default function ProfileStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-[#F8F5F1] rounded-lg p-4 text-center flex flex-col gap-1"
        >
          <p className="text-xl font-medium text-[#8B5E3C]">{stat.value}</p>
          <p className="text-xs text-[#6B7280]">{stat.label}</p>
        </div>
      ))}
    </div>
  )
}
