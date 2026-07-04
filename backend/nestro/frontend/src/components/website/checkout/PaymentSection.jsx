'use client'

import { useState } from 'react'

const inputClass =
  'w-full border border-[#E8E0D5] rounded-md px-3 py-2.5 text-[13px] text-[#1E1E1E] bg-white outline-none focus:border-[#C6A27E] transition-colors placeholder-[#aaa]'

const labelClass = 'text-[11px] uppercase tracking-[0.08em] text-[#6B7280]'

const tabs = [
  { id: 'card', label: 'Card', icon: 'ti-credit-card' },
  { id: 'upi', label: 'UPI', icon: 'ti-qrcode' },
  { id: 'netbanking', label: 'Net Banking', icon: 'ti-building-bank' },
  { id: 'emi', label: 'EMI', icon: 'ti-wallet' },
]

export default function PaymentSection() {
  const [activeTab, setActiveTab] = useState('card')
  const [cardData, setCardData] = useState({
    number: '',
    name: '',
    expiry: '',
    cvv: '',
  })
  const [upiId, setUpiId] = useState('')

  const handleCardChange = (e) => {
    setCardData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <div className="flex flex-col gap-4">
      <p className="text-[13px] font-medium text-[#1E1E1E]">Payment Method</p>

      {/* Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border text-[12px] font-medium whitespace-nowrap transition-all ${
              activeTab === tab.id
                ? 'border-[#8B5E3C] bg-[#FFF8F5] text-[#8B5E3C]'
                : 'border-[#E8E0D5] bg-white text-[#6B7280] hover:border-[#C6A27E]'
            }`}
          >
            <i className={`ti ${tab.icon} text-[15px]`} />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-white border border-[#E8E0D5] rounded-xl p-5">
        {/* Card */}
        {activeTab === 'card' && (
          <div className="flex flex-col gap-4">
            {/* Card icons */}
            <div className="flex items-center gap-2 pb-3 border-b border-[#E8E0D5]">
              <span className="text-[11px] text-[#6B7280]">We accept:</span>
              <div className="flex gap-2">
                <div className="w-8 h-6 bg-[#1434CB] rounded flex items-center justify-center text-white text-[8px] font-bold">
                  VISA
                </div>
                <div className="w-8 h-6 bg-[#EB001B] rounded flex items-center justify-center text-white text-[8px] font-bold">
                  MC
                </div>
                <div className="w-8 h-6 bg-[#006FCF] rounded flex items-center justify-center text-white text-[8px] font-bold">
                  AMEX
                </div>
                <div className="w-8 h-6 bg-[#7952B3] rounded flex items-center justify-center text-white text-[8px] font-bold">
                  RuPay
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className={labelClass}>Card Number</label>
              <input
                type="text"
                name="number"
                value={cardData.number}
                onChange={handleCardChange}
                placeholder="1234 5678 9012 3456"
                maxLength={19}
                className={inputClass}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className={labelClass}>Cardholder Name</label>
              <input
                type="text"
                name="name"
                value={cardData.name}
                onChange={handleCardChange}
                placeholder="Name on card"
                className={inputClass}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className={labelClass}>Expiry Date</label>
                <input
                  type="text"
                  name="expiry"
                  value={cardData.expiry}
                  onChange={handleCardChange}
                  placeholder="MM/YY"
                  maxLength={5}
                  className={inputClass}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className={labelClass}>CVV</label>
                <input
                  type="text"
                  name="cvv"
                  value={cardData.cvv}
                  onChange={handleCardChange}
                  placeholder="123"
                  maxLength={3}
                  className={inputClass}
                />
              </div>
            </div>
          </div>
        )}

        {/* UPI */}
        {activeTab === 'upi' && (
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-[12px] text-[#6B7280]">
              <i className="ti ti-info-circle text-[14px] text-[#8B5E3C]" />
              <span>Enter your UPI ID to proceed with payment</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className={labelClass}>UPI ID</label>
              <input
                type="text"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
                placeholder="yourname@upi"
                className={inputClass}
              />
            </div>
            <p className="text-[11px] text-[#6B7280]">
              Supported apps: Google Pay, PhonePe, Paytm, BHIM
            </p>
          </div>
        )}

        {/* Net Banking */}
        {activeTab === 'netbanking' && (
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className={labelClass}>Select Your Bank</label>
              <select className={inputClass}>
                <option value="">Choose bank</option>
                <option value="hdfc">HDFC Bank</option>
                <option value="icici">ICICI Bank</option>
                <option value="sbi">State Bank of India</option>
                <option value="axis">Axis Bank</option>
                <option value="kotak">Kotak Mahindra</option>
                <option value="other">Other Banks</option>
              </select>
            </div>
            <p className="text-[11px] text-[#6B7280]">
              You will be redirected to your bank's website to complete the payment
            </p>
          </div>
        )}

        {/* EMI */}
        {activeTab === 'emi' && (
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className={labelClass}>EMI Provider</label>
              <select className={inputClass}>
                <option value="">Select EMI option</option>
                <option value="3">3 months - No cost EMI</option>
                <option value="6">6 months - ₹1,200 interest</option>
                <option value="9">9 months - ₹2,400 interest</option>
                <option value="12">12 months - ₹3,800 interest</option>
              </select>
            </div>
            <div className="bg-[#FFF8F5] border border-[#C6A27E]/30 rounded-lg p-3">
              <p className="text-[11px] text-[#6B7280]">
                <strong className="text-[#8B5E3C]">Note:</strong> EMI options available on orders above ₹25,000. Interest rates vary by bank.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
