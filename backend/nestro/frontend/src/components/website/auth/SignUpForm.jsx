'use client'

import { useState } from 'react'
import { IconEye, IconEyeOff } from '@tabler/icons-react'
import SocialButton from './SocialButton'

const inputClass =
  'w-full border border-[#E8E0D5] rounded-md px-3 py-2.5 text-[13px] text-[#1E1E1E] bg-[#FAFAF9] outline-none focus:border-[#C6A27E] transition-colors placeholder-[#aaa]'

const labelClass = 'block text-sm text-[#6B7280] mb-1'

export default function SignUpForm({ onSwitch }) {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
  })
  const [showPassword, setShowPassword] = useState(false)
  const [agreedTerms, setAgreedTerms] = useState(false)
  const [subscribed, setSubscribed] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!agreedTerms) return
    console.log('Sign up:', { ...form, subscribed })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <h2 className="text-xl font-medium text-[#1E1E1E]">Create your account</h2>
        <p className="text-xs text-[#6B7280] mt-1">Join Nestro and explore curated furniture</p>
      </div>

      {/* First + Last Name */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className={labelClass}>First Name</label>
          <input
            type="text"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            placeholder="First"
            required
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            placeholder="Last"
            required
            className={inputClass}
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label className={labelClass}>Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="you@email.com"
          required
          className={inputClass}
        />
      </div>

      {/* Password */}
      <div>
        <label className={labelClass}>Password</label>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Minimum 8 characters"
            required
            minLength={8}
            className={`${inputClass} pr-10`}
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B7280] hover:text-[#8B5E3C] transition-colors"
          >
            {showPassword ? <IconEyeOff size={16} stroke={1.8} /> : <IconEye size={16} stroke={1.8} />}
          </button>
        </div>
        {/* Strength hint */}
        {form.password.length > 0 && (
          <p className={`text-xs mt-1 ${form.password.length >= 8 ? 'text-green-600' : 'text-amber-600'}`}>
            {form.password.length >= 8 ? '✓ Strong enough' : `${8 - form.password.length} more characters needed`}
          </p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label className={labelClass}>Phone</label>
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="+91 XXXXX XXXXX"
          className={inputClass}
        />
      </div>

      {/* Checkboxes */}
      <div className="flex flex-col gap-2.5">
        <label className="flex items-start gap-2.5 cursor-pointer">
          <input
            type="checkbox"
            checked={agreedTerms}
            onChange={() => setAgreedTerms((prev) => !prev)}
            required
            className="mt-0.5 w-4 h-4 accent-[#8B5E3C] flex-shrink-0"
          />
          <span className="text-xs text-[#6B7280]">
            I agree to the{' '}
            <span className="text-[#8B5E3C] underline cursor-pointer">Terms of Service</span>{' '}
            and{' '}
            <span className="text-[#8B5E3C] underline cursor-pointer">Privacy Policy</span>
          </span>
        </label>

        <label className="flex items-start gap-2.5 cursor-pointer">
          <input
            type="checkbox"
            checked={subscribed}
            onChange={() => setSubscribed((prev) => !prev)}
            className="mt-0.5 w-4 h-4 accent-[#8B5E3C] flex-shrink-0"
          />
          <span className="text-xs text-[#6B7280]">
            Subscribe to exclusive offers and design inspiration
          </span>
        </label>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={!agreedTerms}
        className="w-full bg-[#8B5E3C] text-white text-[13px] tracking-[0.06em] uppercase font-medium py-3 rounded-md hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
      >
        Create Account
      </button>

      {/* Divider */}
      <Divider />

      {/* Social */}
      <div className="grid grid-cols-2 gap-3">
        <SocialButton provider="google" label="Google" />
        <SocialButton provider="apple" label="Apple" />
      </div>

      {/* Switch to sign in */}
      <p className="text-center text-xs text-[#6B7280]">
        Already have an account?{' '}
        <button
          type="button"
          onClick={onSwitch}
          className="text-[#8B5E3C] hover:underline font-medium"
        >
          Sign in
        </button>
      </p>
    </form>
  )
}

function Divider() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 h-px bg-[#E8E0D5]" />
      <span className="text-xs text-[#6B7280] whitespace-nowrap">or continue with</span>
      <div className="flex-1 h-px bg-[#E8E0D5]" />
    </div>
  )
}
