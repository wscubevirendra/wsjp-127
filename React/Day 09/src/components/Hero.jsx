import React from "react";

export default function Hero() {
  return (
    <section className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 flex flex-col-reverse md:flex-row items-center gap-10">
        
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
            Welcome to Our Website
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mt-4">
            Build Modern <br />
            Websites Easily
          </h1>

          <p className="text-gray-600 mt-6 text-lg leading-7 max-w-xl">
            Create beautiful and responsive websites using React and Tailwind
            CSS. Fast, modern, and easy to customize for your projects.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
              Get Started
            </button>

            <button className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            alt="Hero"
            className="w-full rounded-2xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}