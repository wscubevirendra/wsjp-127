export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
          alt="Restaurant"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">

          <span className="inline-block bg-red-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            Welcome To Foodie's Restaurant
          </span>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Taste The
            <span className="text-red-500"> Best Food </span>
            In Your City
          </h1>

          <p className="text-gray-200 text-lg mt-6 leading-8 max-w-2xl">
            Discover delicious meals prepared by expert chefs.
            Experience premium dining, fresh ingredients, and
            unforgettable flavors with every bite.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full font-semibold transition">
              Order Now
            </button>

            <button className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-full font-semibold transition">
              View Menu
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-10 mt-14">
            <div>
              <h3 className="text-3xl font-bold text-white">50+</h3>
              <p className="text-gray-300">Food Items</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">15K+</h3>
              <p className="text-gray-300">Happy Customers</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">4.9★</h3>
              <p className="text-gray-300">Rating</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}