'use client'

import { useState } from 'react'
import Container from '@website/ui/Container'
import ProfileSidebar from '@website/profile/ProfileSidebar'
import OrdersTab from '@website/profile/OrdersTab'
import PersonalInfoTab from '@website/profile/PersonalInfoTab'
import AddressTab from '@website/profile/AddressTab'
import SettingsTab from '@website/profile/SettingsTab'

const tabLabels = {
  orders: 'My Orders',
  personal: 'Personal Info',
  address: 'Addresses',
  settings: 'Settings',
}

function ActiveTab({ tab }) {
  switch (tab) {
    case 'orders':
      return <OrdersTab />
    case 'personal':
      return <PersonalInfoTab />
    case 'address':
      return <AddressTab />
    case 'settings':
      return <SettingsTab />
    default:
      return <OrdersTab />
  }
}

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('orders')

  return (
    <Container className="mt-10 mb-20">
      {/* Page header */}
      <div className="mb-8">
        <p className="text-[10px] tracking-[0.2em] uppercase text-[#8B5E3C] mb-1">
          Account
        </p>
        <h1 className="text-2xl md:text-3xl font-normal text-[#1E1E1E]">
          {tabLabels[activeTab]}
        </h1>
      </div>

      <div className="grid lg:grid-cols-[260px_1fr] gap-8 items-start">
        {/* Sidebar */}
        <ProfileSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Main content */}
        <div className="min-w-0">
          <ActiveTab tab={activeTab} />
        </div>
      </div>
    </Container>
  )
}
