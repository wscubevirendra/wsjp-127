import React from "react";

export default function ProductCardSkeleton() {
    return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">

            {/* Image Skeleton */}
            <div className="bg-gray-200 h-72 w-full" />

            {/* Content */}
            <div className="p-5">

                {/* Category */}
                <div className="h-3 w-20 bg-gray-200 rounded mb-4"></div>

                {/* Product Name */}
                <div className="h-5 w-40 bg-gray-300 rounded mb-4"></div>


                {/* Price + Button */}
                <div className="flex items-center justify-between">

                    {/* Price */}
                    <div className="h-6 w-24 bg-gray-300 rounded"></div>

                    {/* Cart Button */}
                    <div className="h-6 w-12 bg-gray-300 rounded-lg"></div>
                </div>
            </div>
        </div>
    );
}