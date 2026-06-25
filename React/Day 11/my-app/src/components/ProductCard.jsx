import Image from "next/image";

export default function ProductCard({ product }) {
    return (
        <div className="border rounded-lg overflow-hidden shadow">
            {/* Thumbnail */}
            <div className="relative h-60">
                <img
                    src={product.thumbnail}
                    alt={product.title}
                    
                    className="object-cover"
                />
            </div>

            {/* Content */}
            <div className="p-4">
                {/* Title */}
                <h3 className="text-lg font-semibold line-clamp-2">
                    {product.title}
                </h3>

                {/* Price */}
                <p className="text-xl font-bold mt-2">
                    ₹{product.price}
                </p>

                {/* Button */}
                <button className="w-full mt-4 bg-black text-white py-2 rounded">
                    Add To Cart
                </button>
            </div>
        </div>
    );
}