'use client'

const inputClass =
  'w-full border border-[#E8E0D5] rounded-md px-3 py-2.5 text-[13px] text-[#1E1E1E] bg-white outline-none focus:border-[#C6A27E] transition-colors placeholder-[#aaa]'

const labelClass = 'text-[11px] uppercase tracking-[0.08em] text-[#6B7280]'

const indianStates = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
  'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand',
  'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
  'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
  'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
  'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
  'Delhi', 'Chandigarh', 'Puducherry',
]

export default function DeliveryForm({ formData, onChange }) {
  const handleChange = (e) => {
    onChange(e.target.name, e.target.value)
  }

  return (
    <div className="flex flex-col gap-4">
      <p className="text-[13px] font-medium text-[#1E1E1E]">Delivery Address</p>
      <div className="grid md:grid-cols-2 gap-4">
        {/* First Name */}
        <div className="flex flex-col gap-1.5">
          <label className={labelClass}>First Name *</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First name"
            className={inputClass}
          />
        </div>

        {/* Last Name */}
        <div className="flex flex-col gap-1.5">
          <label className={labelClass}>Last Name *</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last name"
            className={inputClass}
          />
        </div>

        {/* Address — full width */}
        <div className="flex flex-col gap-1.5 md:col-span-2">
          <label className={labelClass}>Address *</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Street address, apartment, etc."
            className={inputClass}
          />
        </div>

        {/* City */}
        <div className="flex flex-col gap-1.5">
          <label className={labelClass}>City *</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="City"
            className={inputClass}
          />
        </div>

        {/* PIN Code */}
        <div className="flex flex-col gap-1.5">
          <label className={labelClass}>PIN Code *</label>
          <input
            type="text"
            name="pin"
            value={formData.pin}
            onChange={handleChange}
            placeholder="6-digit PIN"
            maxLength={6}
            className={inputClass}
          />
        </div>

        {/* State */}
        <div className="flex flex-col gap-1.5">
          <label className={labelClass}>State *</label>
          <select
            name="state"
            value={formData.state}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">Select state</option>
            {indianStates.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-1.5">
          <label className={labelClass}>Phone *</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 XXXXX XXXXX"
            className={inputClass}
          />
        </div>
      </div>
    </div>
  )
}
