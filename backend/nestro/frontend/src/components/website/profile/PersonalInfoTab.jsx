'use client'

import { useState } from 'react'

const inputClass =
  'w-full border border-[#E8E0D5] rounded-md px-3 py-2.5 text-[13px] text-[#1E1E1E] bg-[#FAFAF9] outline-none focus:border-[#C6A27E] transition-colors placeholder-[#aaa]'

const labelClass = 'text-[11px] uppercase tracking-[0.08em] text-[#6B7280]'

export default function PersonalInfoTab() {
  const [form, setForm] = useState({
    firstName: 'Rahul',
    lastName: 'Kapoor',
    email: 'rahul.kapoor@email.com',
    phone: '+91 98765 43210',
    dob: '1990-06-15',
    gender: 'Male',
  })
  const [saved, setSaved] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSaved(true)
    setTimeout(() => setSaved(false), 2500)
  }

  return (
    <div className="bg-white border border-[#E8E0D5] rounded-xl p-6">
      <h2 className="text-[15px] font-medium text-[#1E1E1E] mb-6">Personal Information</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="grid md:grid-cols-2 gap-4">
          {/* First Name */}
          <div className="flex flex-col gap-1.5">
            <label className={labelClass}>First Name</label>
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              className={inputClass}
              placeholder="First name"
            />
          </div>

          {/* Last Name */}
          <div className="flex flex-col gap-1.5">
            <label className={labelClass}>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              className={inputClass}
              placeholder="Last name"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label className={labelClass}>Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className={inputClass}
              placeholder="Email address"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-1.5">
            <label className={labelClass}>Phone</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className={inputClass}
              placeholder="Phone number"
            />
          </div>

          {/* Date of Birth */}
          <div className="flex flex-col gap-1.5">
            <label className={labelClass}>Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={form.dob}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          {/* Gender */}
          <div className="flex flex-col gap-1.5">
            <label className={labelClass}>Gender</label>
            <select
              name="gender"
              value={form.gender}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="">Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Non-binary">Non-binary</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </select>
          </div>
        </div>

        {/* Save */}
        <div className="flex items-center gap-4">
          <button
            type="submit"
            className={`text-[11px] tracking-[0.08em] uppercase px-5 py-2.5 rounded font-medium transition-all ${
              saved
                ? 'bg-green-600 text-white'
                : 'bg-[#8B5E3C] text-white hover:opacity-90'
            }`}
          >
            {saved ? '✓ Saved' : 'Save Changes'}
          </button>
          {saved && (
            <span className="text-[12px] text-green-600">
              Profile updated successfully
            </span>
          )}
        </div>
      </form>
    </div>
  )
}
