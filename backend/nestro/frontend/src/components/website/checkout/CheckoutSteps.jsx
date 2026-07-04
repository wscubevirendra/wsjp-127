const steps = [
  { number: 1, label: 'Cart', icon: 'ti-shopping-bag' },
  { number: 2, label: 'Delivery', icon: 'ti-truck' },
  { number: 3, label: 'Payment', icon: 'ti-credit-card' },
  { number: 4, label: 'Review', icon: 'ti-circle-check' },
]

export default function CheckoutSteps({ currentStep }) {
  return (
    <div className="bg-white border border-[#E8E0D5] rounded-xl p-6 mb-6">
      <div className="flex items-center justify-between gap-2 overflow-x-auto pb-2 scrollbar-none">
        {steps.map((step, index) => (
          <div key={step.number} className="flex items-center gap-2 flex-shrink-0">
            {/* Step circle */}
            <div className="flex flex-col items-center gap-1 min-w-[60px]">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-[13px] font-medium transition-colors ${
                  step.number === currentStep
                    ? 'bg-[#8B5E3C] text-white'
                    : step.number < currentStep
                    ? 'bg-[#C6A27E] text-white'
                    : 'bg-[#F0EBE3] text-[#6B7280]'
                }`}
              >
                {step.number < currentStep ? (
                  <i className="ti ti-check text-[16px]" />
                ) : (
                  <i className={`ti ${step.icon} text-[16px]`} />
                )}
              </div>
              <span
                className={`text-[11px] whitespace-nowrap ${
                  step.number === currentStep
                    ? 'text-[#8B5E3C] font-medium'
                    : step.number < currentStep
                    ? 'text-[#C6A27E]'
                    : 'text-[#6B7280]'
                }`}
              >
                {step.label}
              </span>
            </div>

            {/* Connector line */}
            {index < steps.length - 1 && (
              <div
                className={`h-[2px] w-8 md:w-12 flex-shrink-0 transition-colors ${
                  step.number < currentStep ? 'bg-[#C6A27E]' : 'bg-[#E8E0D5]'
                }`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
