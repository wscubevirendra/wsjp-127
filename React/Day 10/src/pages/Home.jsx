import Header from "../components/Header";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

export default function Home() {

  return (
    <>
      <Hero />

      {/* Products Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">

          <div className="flex items-center justify-between mb-10">
            <h2 className="text-4xl font-bold text-[#282d3b]">
              Featured Products
            </h2>

            <button className="bg-[#282d3b] text-white px-5 py-2 rounded-lg">
              View All
            </button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
    </>
  );
}