'use client'

import { useState } from 'react'
import { IconEye, IconEyeOff } from '@tabler/icons-react'
import SocialButton from './SocialButton'

const inputClass =
  'w-full border border-[#E8E0D5] rounded-md px-3 py-2.5 text-[13px] text-[#1E1E1E] bg-[#FAFAF9] outline-none focus:border-[#C6A27E] transition-colors placeholder-[#aaa]'

const labelClass = 'block text-sm text-[#6B7280] mb-1'

export default function SignInForm({ onSwitch }) {
  const [form, setForm] = useState({ email: '', password: '' })
  const [showPassword, setShowPassword] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Sign in:', form)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <h2 className="text-xl font-medium text-[#1E1E1E]">Welcome back</h2>
        <p className="text-xs text-[#6B7280] mt-1">Sign in to your Nestro account</p>
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
        <div className="flex items-center justify-between mb-1">
          <label className="text-sm text-[#6B7280]">Password</label>
          <button
            type="button"
            className="text-sm text-[#8B5E3C] hover:underline"
          >
            Forgot password?
          </button>
        </div>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter password"
            required
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
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-[#8B5E3C] text-white text-[13px] tracking-[0.06em] uppercase font-medium py-3 rounded-md hover:opacity-90 transition-opacity"
      >
        Sign In
      </button>

      {/* Divider */}
      <Divider />

      {/* Social */}
      <div className="grid grid-cols-2 gap-3">
        <SocialButton provider="google" label="Google" />
        <SocialButton provider="apple" label="Apple" />
      </div>

      {/* Switch to sign up */}
      <p className="text-center text-xs text-[#6B7280]">
        Don&apos;t have an account?{' '}
        <button
          type="button"
          onClick={onSwitch}
          className="text-[#8B5E3C] hover:underline font-medium"
        >
          Create one free
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
