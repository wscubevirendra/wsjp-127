import Image from 'next/image'
import { cartItems } from '@/data/cart'

export default function OrderSummary({ shippingCost = 0, discount = 0 }) {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const discountAmount = Math.round(subtotal * discount)
  const total = subtotal + shippingCost - discountAmount

  return (
    <div className="bg-white border border-[#E8E0D5] rounded-xl p-6">
      <h3 className="text-[15px] font-medium text-[#1E1E1E] mb-5">Order Summary</h3>

      {/* Products */}
      <div className="flex flex-col gap-3 mb-6">
        {cartItems.map((item) => (
          <div key={item.id} className="flex gap-3">
            {/* Thumbnail */}
            <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-[#F5F0EB] flex-shrink-0">
              {item.image ? (
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <i className="ti ti-armchair text-[24px] text-[#C6A27E]" />
                </div>
              )}
              {/* Quantity badge */}
              <span className="absolute top-1 right-1 w-5 h-5 bg-[#8B5E3C] text-white text-[10px] rounded-full flex items-center justify-center">
                {item.quantity}
              </span>
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0 flex flex-col gap-0.5">
              <p className="text-[13px] font-medium text-[#1E1E1E] line-clamp-1">
                {item.name}
              </p>
              <p className="text-[11px] text-[#6B7280]">{item.variant}</p>
              <p className="text-[13px] font-medium text-[#8B5E3C] mt-auto">
                ₹{(item.price * item.quantity).toLocaleString('en-IN')}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-[#E8E0D5] mb-4" />

      {/* Calculation */}
      <div className="flex flex-col gap-2 mb-4">
        <div className="flex justify-between text-[13px]">
          <span className="text-[#6B7280]">Subtotal</span>
          <span className="text-[#1E1E1E] font-medium">
            ₹{subtotal.toLocaleString('en-IN')}
          </span>
        </div>

        <div className="flex justify-between text-[13px]">
          <span className="text-[#6B7280]">Shipping</span>
          <span className={`font-medium ${shippingCost === 0 ? 'text-green-600' : 'text-[#1E1E1E]'}`}>
            {shippingCost === 0 ? 'Free' : `₹${shippingCost.toLocaleString('en-IN')}`}
          </span>
        </div>

        {discount > 0 && (
          <div className="flex justify-between text-[13px]">
            <span className="text-[#6B7280]">Discount ({Math.round(discount * 100)}%)</span>
            <span className="text-green-600 font-medium">
              -₹{discountAmount.toLocaleString('en-IN')}
            </span>
          </div>
        )}
      </div>

      {/* Total */}
      <div className="border-t-2 border-[#E8E0D5] pt-4">
        <div className="flex justify-between items-center">
          <span className="text-[15px] font-medium text-[#1E1E1E]">Total</span>
          <span className="text-lg font-medium text-[#8B5E3C]">
            ₹{total.toLocaleString('en-IN')}
          </span>
        </div>
        <p className="text-[10px] text-[#6B7280] mt-1">Including all taxes</p>
      </div>
    </div>
  )
}
