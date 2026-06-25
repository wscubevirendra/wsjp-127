import Link from 'next/link';
export default function FoodCard({
    image,
    title,
    cuisine,
    rating,
    deliveryTime,
    priceForTwo,
    offer,
    id
}) {
    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group">

            {/* Image Section */}
            <div className="relative overflow-hidden">
                <Link href={`/menu/${id}`}>
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
                    />
                </Link>


                {/* Offer Badge */}
                <div className="absolute bottom-4 left-0 bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-r-md">
                    {offer}
                </div>

                {/* Rating */}
                <div className="absolute top-4 right-4 bg-green-600 text-white text-sm px-2 py-1 rounded-md font-semibold">
                    ⭐ {rating}
                </div>
            </div>

            {/* Content */}
            <div className="p-4">

                <div className="flex justify-between items-start">
                    <h3 className="text-lg font-semibold text-gray-800">
                        {title}
                    </h3>

                    <span className="text-gray-700 font-medium">
                        ₹{priceForTwo}
                    </span>
                </div>

                <p className="text-gray-500 text-sm mt-1 line-clamp-1">
                    {cuisine}
                </p>

                <div className="flex justify-between items-center mt-4">
                    <span className="text-sm text-gray-600">
                        🚚 {deliveryTime}
                    </span>

                    <button className="text-red-500 font-medium hover:text-red-600">
                        View Menu →
                    </button>
                </div>
            </div>
        </div>
    );
}