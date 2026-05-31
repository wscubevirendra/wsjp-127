import React, { useContext } from "react";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Store } from "../context/Context";

export default function ProductCard({ title, thumbnail, price, category, id }) {
    const { addToCart } = useContext(Store)
    return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">

            {/* Product Image */}
            <div className="bg-gray-100">
                <Link to={`/dynamic-page/${id}`}>
                    <img
                        src={thumbnail}
                        alt="Product"
                        className="h-40 w-full object-cover"
                    />

                </Link>

            </div>

            {/* Product Details */}
            <div className="p-3">

                <p className="text-sm text-gray-500">{category}</p>

                <h2 className="text-md font-bold mt-1 text-[#282d3b]">

                    {title}
                </h2>


                {/* Price */}
                <div className="flex items-center justify-between mt-5">
                    <div>
                        <span className="text-xl font-bold text-[#282d3b]">
                            ${price}
                        </span>
                    </div>

                    <button onClick={() => addToCart({ title, thumbnail, price, category, id, qty: 1 })} className="bg-[#282d3b] text-white p-3 rounded-lg hover:bg-black transition">
                        <FaShoppingCart />
                    </button>
                </div>
            </div>
        </div>
    );
}