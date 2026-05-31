import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import { Store } from "../context/Context";

export default function DynamicPage() {
  const { addToCart } = useContext(Store)
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchProduct() {
      setLoading(true);

      axios
        .get(`https://dummyjson.com/products/${id}`)
        .then((response) => {
          setProduct(response.data);
        })
        .catch((error) => {
          setProduct({});
        })
        .finally(() => {
          setLoading(false);
        });
    }

    fetchProduct();
  }, [id]);

  // Loader
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-[#282d3b] gap-4">
        <div className="w-16 h-16 rounded-full border-4 border-white/20 border-t-yellow-400 animate-spin"></div>

        <p className="text-white text-lg tracking-wide animate-pulse">
          Loading Product...
        </p>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#f5f5f5] py-10">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden grid lg:grid-cols-2 gap-10 p-6 lg:p-10">

          {/* LEFT SIDE IMAGES */}
          <div>
            {/* Main Image */}
            <div className="bg-gray-100 rounded-2xl p-5">
              <img
                src={product?.thumbnail}
                alt={product?.title}
                className="w-full h-[450px] object-contain"
              />
            </div>

            {/* Multiple Images */}
            <div className="grid grid-cols-4 gap-4 mt-5">
              {product?.images?.map((img, index) => (
                <div
                  key={index}
                  className="bg-gray-100 rounded-xl p-2 border hover:border-[#282d3b] cursor-pointer transition"
                >
                  <img
                    src={img}
                    alt=""
                    className="h-20 w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE DETAILS */}
          <div className="flex flex-col justify-center">

            {/* Category */}
            <span className="bg-[#282d3b] text-white w-fit px-4 py-1 rounded-full text-sm">
              {product?.category}
            </span>

            {/* Title */}
            <h1 className="text-4xl font-bold text-[#282d3b] mt-4">
              {product?.title}
            </h1>

            {/* Brand */}
            <p className="text-gray-500 mt-2">
              Brand :{" "}
              <span className="font-semibold text-black">
                {product?.brand}
              </span>
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-4">
              <div className="flex text-yellow-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <span className="text-gray-600">
                ({product?.rating})
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4 mt-6">
              <h2 className="text-4xl font-bold text-[#282d3b]">
                ₹{product?.price}
              </h2>

              <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                {product?.discountPercentage}% OFF
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-7 mt-6">
              {product?.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mt-6">
              {product?.tags?.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-200 px-4 py-2 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Stock */}
            <div className="mt-6">
              <p className="text-lg">
                Stock :{" "}
                <span className="text-green-600 font-semibold">
                  {product?.stock} Available
                </span>
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-8">

              <button onClick={() => addToCart(
                {
                  title: product.title,
                  price: product.price,
                  id: product.id,
                  thumbnail: product.thumbnail

                }

              )} className="bg-[#282d3b] text-white px-8 py-4 rounded-xl flex items-center gap-3 hover:bg-black transition">
                <FaShoppingCart />
                Add To Cart
              </button>

              <button className="border-2 border-[#282d3b] text-[#282d3b] px-8 py-4 rounded-xl hover:bg-[#282d3b] hover:text-white transition">
                Buy Now
              </button>
            </div>

            {/* Extra Info */}
            <div className="mt-10 border-t pt-6 space-y-3 text-gray-600">
              <p>
                <span className="font-semibold text-black">
                  Shipping :
                </span>{" "}
                {product?.shippingInformation}
              </p>

              <p>
                <span className="font-semibold text-black">
                  Warranty :
                </span>{" "}
                {product?.warrantyInformation}
              </p>

              <p>
                <span className="font-semibold text-black">
                  Return Policy :
                </span>{" "}
                {product?.returnPolicy}
              </p>
            </div>
          </div>
        </div>

        {/* REVIEWS */}
        <div className="bg-white rounded-3xl shadow-xl mt-10 p-6 lg:p-10">

          <h2 className="text-3xl font-bold text-[#282d3b] mb-8">
            Customer Reviews
          </h2>

          <div className="space-y-6">
            {product?.reviews?.map((review, index) => (
              <div
                key={index}
                className="border-b pb-5 last:border-none"
              >
                <div className="flex items-center justify-between">

                  <div>
                    <h3 className="font-semibold text-lg">
                      {review?.reviewerName}
                    </h3>

                    <p className="text-sm text-gray-500">
                      {review?.reviewerEmail}
                    </p>
                  </div>

                  <div className="flex text-yellow-400">
                    {Array.from({ length: review?.rating }).map(
                      (_, i) => (
                        <FaStar key={i} />
                      )
                    )}
                  </div>
                </div>

                <p className="text-gray-600 mt-4">
                  {review?.comment}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}