import SectionHeader from '@website/ui/SectionHeader'
import RatingStars from '@website/ui/RatingStars'
import testimonials from '@/data/testimonials'


export default function Testimonials() {
  return (
    <section>
      <SectionHeader tag="Reviews" title="What Our Customers Say" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white border border-[#E8E0D5] rounded-xl p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow"
          >
            <RatingStars rating={testimonial.rating} />
            <p className="text-sm text-[#1E1E1E] italic leading-relaxed">
              "{testimonial.text}"
            </p>
            <div className="mt-auto pt-2 border-t border-[#E8E0D5]">
              <p className="text-sm font-medium text-[#1E1E1E]">{testimonial.name}</p>
              <p className="text-xs text-[#6B7280]">{testimonial.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
