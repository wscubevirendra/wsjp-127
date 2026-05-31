import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
    const { pathname } = useLocation();
    const items = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "About",
            path: "/about"
        },
        {
            name: "Contact",
            path: "/contact"
        }
    ]



    return (
        <header className="w-full border-b border-gray-200 bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

                {/* Logo */}
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">
                        MyLogo
                    </h1>
                </div>

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {
                        items.map((item, index) => {
                            const active = pathname === item.path
                            return (
                                <Link
                                    key={index}
                                    to="/"
                                    className={`text-gray-600 ${active ? 'bg-[gold] font-bold' : ""} hover:text-black transition px-4 py-1 rounded-2xl`}
                                >
                                    {item.name}
                                </Link>
                            )
                        })
                    }


                </nav>

                {/* Button */}
                <button className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition">
                    Login
                </button>
            </div>
        </header>
    );
}