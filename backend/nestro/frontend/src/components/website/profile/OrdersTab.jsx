import Image from 'next/image'
import Link from 'next/link'
import {
  IconCircleCheck,
  IconTruckDelivery,
  IconClock,
  IconCircleX,
  IconArmchair,
} from '@tabler/icons-react'
import ProfileStats from './ProfileStats'
import { orders } from '@/data/orders'

const statusConfig = {
  Delivered: {
    label: 'Delivered',
    classes: 'bg-green-50 text-green-700',
    Icon: IconCircleCheck,
  },
  'In Transit': {
    label: 'In Transit',
    classes: 'bg-amber-50 text-amber-700',
    Icon: IconTruckDelivery,
  },
  Processing: {
    label: 'Processing',
    classes: 'bg-blue-50 text-blue-700',
    Icon: IconClock,
  },
  Cancelled: {
    label: 'Cancelled',
    classes: 'bg-red-50 text-red-500',
    Icon: IconCircleX,
  },
}

export default function OrdersTab() {
  return (
    <div className="flex flex-col gap-6">
      <ProfileStats />

      <div className="bg-white border border-[#E8E0D5] rounded-xl overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#E8E0D5] flex items-center justify-between">
          <h2 className="text-[15px] font-medium text-[#1E1E1E]">Order History</h2>
          <span className="text-[12px] text-[#6B7280]">{orders.length} orders</span>
        </div>

        {/* Orders list */}
        <div className="divide-y divide-[#E8E0D5]">
          {orders.map((order) => {
            const status = statusConfig[order.status] ?? statusConfig['Processing']
            const StatusIcon = status.Icon
            return (
              <div
                key={order.id}
                className="flex flex-col sm:flex-row sm:items-center gap-4 px-6 py-4"
              >
                {/* Thumbnail */}
                <div className="relative w-14 h-14 rounded-lg overflow-hidden bg-[#F5F0EB] flex-shrink-0">
                  {order.image ? (
                    <Image
                      src={order.image}
                      alt={order.product}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-[#C6A27E]">
                      <IconArmchair size={22} stroke={1.8} />
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                  <p className="text-[13px] font-medium text-[#1E1E1E] truncate">
                    {order.product}
                  </p>
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-[11px] text-[#6B7280]">#{order.id}</span>
                    <span className="text-[#E8E0D5]">·</span>
                    <span className="text-[11px] text-[#6B7280]">{order.date}</span>
                  </div>
                </div>

                {/* Status badge */}
                <span
                  className={`inline-flex items-center gap-1.5 text-[11px] px-3 py-1 rounded-full self-start sm:self-auto flex-shrink-0 ${status.classes}`}
                >
                  <StatusIcon size={12} stroke={1.8} />
                  {status.label}
                </span>

                {/* Price + action */}
                <div className="flex flex-col items-start sm:items-end gap-1 flex-shrink-0">
                  <p className="text-[14px] font-medium text-[#1E1E1E]">
                    ₹{order.price.toLocaleString('en-IN')}
                  </p>
                  <Link
                    href={`/orders/${order.id}`}
                    className="text-[11px] text-[#8B5E3C] hover:underline"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
