const colorMap = {
  Ivory: '#F5F0E8',
  Walnut: '#7B4F2E',
  Ebony: '#2C1810',
  Slate: '#6B7280',
}

export default function VariantSelector({
  label,
  options = [],
  selected,
  setSelected,
  type = 'size',
}) {
  if (!options || options.length === 0) return null

  return (
    <div className="flex flex-col gap-2">
      <p className="text-[11px] uppercase tracking-[0.1em] text-[#6B7280]">
        {label}:{' '}
        <span className="text-[#1E1E1E] font-medium normal-case tracking-normal">
          {selected}
        </span>
      </p>

      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const isActive = selected === option

          if (type === 'color') {
            return (
              <button
                key={option}
                title={option}
                onClick={() => setSelected(option)}
                aria-label={`Select color ${option}`}
                className={`w-8 h-8 rounded-full border-2 transition-all ${
                  isActive
                    ? 'border-[#8B5E3C] scale-110 shadow-md'
                    : 'border-transparent hover:border-[#C6A27E]'
                }`}
                style={{ backgroundColor: colorMap[option] ?? '#ccc' }}
              />
            )
          }

          return (
            <button
              key={option}
              onClick={() => setSelected(option)}
              className={`px-4 py-2 border rounded-md text-[12px] font-medium transition-all ${
                isActive
                  ? 'border-[#8B5E3C] bg-[#FFF8F5] text-[#8B5E3C]'
                  : 'border-[#E8E0D5] text-[#6B7280] hover:border-[#C6A27E] hover:text-[#8B5E3C]'
              }`}
            >
              {option}
            </button>
          )
        })}
      </div>
    </div>
  )
}
