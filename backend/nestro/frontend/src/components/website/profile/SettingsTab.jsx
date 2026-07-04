'use client'

import { useState } from 'react'

const inputClass =
  'w-full border border-[#E8E0D5] rounded-md px-3 py-2.5 text-[13px] text-[#1E1E1E] bg-[#FAFAF9] outline-none focus:border-[#C6A27E] transition-colors placeholder-[#aaa]'

const labelClass = 'text-[11px] uppercase tracking-[0.08em] text-[#6B7280]'

const notificationDefaults = [
  { key: 'orderUpdates', label: 'Order Updates', desc: 'Status changes and delivery alerts' },
  { key: 'promotions', label: 'Promotions & Offers', desc: 'Sales, discounts and new collections' },
  { key: 'newsletter', label: 'Newsletter', desc: 'Weekly design inspiration' },
  { key: 'sms', label: 'SMS Notifications', desc: 'Text alerts for deliveries' },
]

function Toggle({ enabled, onToggle }) {
  return (
    <button
      onClick={onToggle}
      aria-label="Toggle notification"
      className={`relative w-10 h-5 rounded-full flex-shrink-0 transition-colors ${
        enabled ? 'bg-[#8B5E3C]' : 'bg-[#E8E0D5]'
      }`}
    >
      <span
        className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${
          enabled ? 'translate-x-5' : 'translate-x-0.5'
        }`}
      />
    </button>
  )
}

export default function SettingsTab() {
  const [notifications, setNotifications] = useState({
    orderUpdates: true,
    promotions: true,
    newsletter: false,
    sms: false,
  })

  const [passwords, setPasswords] = useState({
    current: '',
    newPass: '',
    confirm: '',
  })
  const [pwSaved, setPwSaved] = useState(false)
  const [pwError, setPwError] = useState('')

  const toggleNotification = (key) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const handlePasswordChange = (e) => {
    setPasswords((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    setPwError('')
  }

  const handlePasswordSubmit = (e) => {
    e.preventDefault()
    if (passwords.newPass !== passwords.confirm) {
      setPwError('New passwords do not match')
      return
    }
    if (passwords.newPass.length < 8) {
      setPwError('Password must be at least 8 characters')
      return
    }
    setPwSaved(true)
    setPasswords({ current: '', newPass: '', confirm: '' })
    setTimeout(() => setPwSaved(false), 2500)
  }

  return (
    <div className="flex flex-col gap-6">
      {/* A — Notifications */}
      <div className="bg-white border border-[#E8E0D5] rounded-xl p-6">
        <h2 className="text-[15px] font-medium text-[#1E1E1E] mb-5">
          Notification Preferences
        </h2>
        <div className="flex flex-col gap-3">
          {notificationDefaults.map(({ key, label, desc }) => (
            <div
              key={key}
              className="flex items-center justify-between bg-white border border-[#E8E0D5] rounded-lg p-4 gap-4"
            >
              <div className="flex flex-col gap-0.5">
                <p className="text-[13px] font-medium text-[#1E1E1E]">{label}</p>
                <p className="text-[11px] text-[#6B7280]">{desc}</p>
              </div>
              <Toggle
                enabled={notifications[key]}
                onToggle={() => toggleNotification(key)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* B — Change Password */}
      <div className="bg-white border border-[#E8E0D5] rounded-xl p-6">
        <h2 className="text-[15px] font-medium text-[#1E1E1E] mb-5">Change Password</h2>
        <form onSubmit={handlePasswordSubmit} className="flex flex-col gap-4 max-w-[480px]">
          <div className="flex flex-col gap-1.5">
            <label className={labelClass}>Current Password</label>
            <input
              type="password"
              name="current"
              value={passwords.current}
              onChange={handlePasswordChange}
              placeholder="Enter current password"
              required
              className={inputClass}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className={labelClass}>New Password</label>
            <input
              type="password"
              name="newPass"
              value={passwords.newPass}
              onChange={handlePasswordChange}
              placeholder="Minimum 8 characters"
              required
              className={inputClass}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className={labelClass}>Confirm New Password</label>
            <input
              type="password"
              name="confirm"
              value={passwords.confirm}
              onChange={handlePasswordChange}
              placeholder="Repeat new password"
              required
              className={inputClass}
            />
          </div>

          {pwError && (
            <p className="text-[12px] text-red-500">{pwError}</p>
          )}

          <div className="flex items-center gap-4">
            <button
              type="submit"
              className={`text-[11px] tracking-[0.08em] uppercase px-5 py-2.5 rounded font-medium transition-all ${
                pwSaved
                  ? 'bg-green-600 text-white'
                  : 'bg-[#8B5E3C] text-white hover:opacity-90'
              }`}
            >
              {pwSaved ? '✓ Updated' : 'Update Password'}
            </button>
            {pwSaved && (
              <span className="text-[12px] text-green-600">Password changed</span>
            )}
          </div>
        </form>
      </div>

      {/* Danger Zone */}
      <div className="bg-white border border-red-100 rounded-xl p-6">
        <h2 className="text-[15px] font-medium text-red-500 mb-2">Danger Zone</h2>
        <p className="text-[12px] text-[#6B7280] mb-4">
          Permanently delete your account and all associated data. This action cannot be undone.
        </p>
        <button className="text-[11px] tracking-[0.08em] uppercase border border-red-300 text-red-500 px-5 py-2.5 rounded font-medium hover:bg-red-50 transition-colors">
          Delete Account
        </button>
      </div>
    </div>
  )
}
