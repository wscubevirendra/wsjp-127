import React, { useContext } from "react";
import { Store } from "../context/Context";

const Cart = () => {
    const { cart, qtyHandler, removeHanlder } = useContext(Store)

    return (
        <div className="min-h-screen bg-[#282d3b] text-white p-6">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

                <div className="grid lg:grid-cols-3 gap-6">
                    {/* Cart Items */}
                    <div className="lg:col-span-2 space-y-4">
                        {cart.map((item) => (
                            <div
                                key={item.id}
                                className="bg-[#343a4a] rounded-xl p-4 flex flex-col sm:flex-row gap-4 border border-gray-700"
                            >
                                {/* Product Image */}
                                <img
                                    src={item.thumbnail}
                                    alt={item.title}
                                    className="w-full sm:w-36 h-36 object-cover rounded-lg"
                                />

                                {/* Product Details */}
                                <div className="flex-1 flex flex-col justify-between">
                                    <div>
                                        <h2 className="text-xl font-semibold">{item.title}</h2>
                                        <p className="text-gray-300 mt-2">
                                            Premium quality furniture for your home.
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap justify-between items-center mt-4">
                                        <span className="text-lg font-bold">
                                            ₹{item.price.toLocaleString()}
                                        </span>

                                        <div className="flex items-center gap-3">
                                            <button onClick={() => qtyHandler(item.id, "dec")} className="w-8 h-8 rounded bg-[#282d3b] border border-gray-600">
                                                -
                                            </button>

                                            <span>{item.qty}</span>

                                            <button onClick={() => qtyHandler(item.id, "inc")} className="w-8 h-8 rounded bg-[#282d3b] border border-gray-600">
                                                +
                                            </button>
                                        </div>

                                        <button onClick={() => removeHanlder(item.id)} className="text-red-400 hover:text-red-300">
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Order Summary */}
                    <div className="bg-[#343a4a] border border-gray-700 rounded-xl p-6 h-fit sticky top-6">
                        <h2 className="text-2xl font-semibold mb-6">
                            Order Summary
                        </h2>

                        <div className="space-y-4">
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span>₹31,996</span>
                            </div>

                            <div className="flex justify-between">
                                <span>Shipping</span>
                                <span>₹499</span>
                            </div>

                            <div className="flex justify-between">
                                <span>Tax</span>
                                <span>₹1,200</span>
                            </div>

                            <hr className="border-gray-600" />

                            <div className="flex justify-between text-xl font-bold">
                                <span>Total</span>
                                <span>₹33,695</span>
                            </div>
                        </div>

                        {/* Coupon */}
                        <div className="mt-6">
                            <input
                                type="text"
                                placeholder="Enter Coupon Code"
                                className="w-full bg-[#282d3b] border border-gray-600 rounded-lg px-4 py-3 outline-none"
                            />
                        </div>

                        <button className="w-full mt-5 bg-white text-[#282d3b] font-semibold py-3 rounded-lg hover:bg-gray-200 transition">
                            Proceed to Checkout
                        </button>

                        <button className="w-full mt-3 border border-white py-3 rounded-lg hover:bg-white hover:text-[#282d3b] transition">
                            Continue Shopping
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;