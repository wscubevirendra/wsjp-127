import React, { useContext } from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Store } from "../context/Context";

export default function Header() {
    const { cart } = useContext(Store)
    const navLinks = ["Home", "Store", "Categories", "About", "Contact"];

    return (
        <header className="bg-[#282d3b] text-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">

                {/* Top Navbar */}
                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                    <h1 className="text-2xl font-bold tracking-wide">
                        Mini<span className="text-yellow-400">Shop</span>
                    </h1>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link, index) => (
                            <Link
                                key={index}
                                to={`/${link.toLowerCase()}`}
                                className="hover:text-yellow-400 transition duration-300"
                            >
                                {link}
                            </Link>
                        ))}
                    </nav>

                    {/* Search + Icons */}
                    <div className="flex items-center gap-4">

                        {/* Search */}
                        <div className="hidden md:flex items-center bg-white rounded-lg overflow-hidden">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="px-3 py-2 text-black outline-none"
                            />
                            <button className="bg-yellow-400 px-4 py-3 text-black">
                                <FaSearch />
                            </button>
                        </div>

                        {/* Icons */}
                        <button className="text-xl hover:text-yellow-400 transition">
                            <FaUser />
                        </button>
                        <Link to="/cart">

                            <button className="relative text-xl hover:text-yellow-400 transition">
                                <FaShoppingCart />
                                <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-1 rounded-full">
                                    {cart.length}
                                </span>
                            </button>
                        </Link>

                    </div>
                </div>
            </div>
        </header>
    );
}