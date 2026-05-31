import React from "react";

export default function Hero() {
  return (
    <section className="bg-[#282d3b] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          
          {/* Left Content */}
          <div>
            <p className="text-yellow-400 font-semibold mb-3">
              New Collection 2026
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Discover Amazing Products For Your Lifestyle
            </h1>

            <p className="text-gray-300 mt-6 text-lg">
              Premium quality products with modern design and affordable prices.
            </p>

            <div className="flex gap-4 mt-8">
              <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 transition">
                Shop Now
              </button>

              <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
                Explore
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
              alt="Product"
              className="rounded-2xl shadow-2xl w-full max-w-md object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}