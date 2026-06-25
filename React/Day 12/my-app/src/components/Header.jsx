'use client'
import { increment } from "@/redux/features/countSlice";
import Link from "next/link";
import { usePathname } from "next/navigation"
import { useSelector, useDispatch } from 'react-redux'

export default function Header() {
    const data = useSelector((store) => store.counter);
    const dispatcher = useDispatch()

    const pathname = usePathname();

    const navItems = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "About",
            path: "/about"
        },
        {
            name: "Menu",
            path: "/menu"
        },
        {
            name: "Contact",
            path: "/contact"
        },
        {
            name: "Gallery",
            path: "/gallery"
        }
    ]
    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between h-20">

                    {/* Logo */}
                    <div>
                        <h1 className="text-3xl font-bold text-red-500">
                            Foodie's
                        </h1>
                    </div>

                    {/* Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {
                            navItems.map((item, index) => {
                                const active = pathname === item.path
                                return (
                                    <Link key={index} href={item.path} className={`text-gray-700 hover:text-red-500 px-4 py-2 rounded-xl ${active ? 'bg-red-500 text-white font-bold' : ''} transition`}>
                                        {item.name}
                                    </Link>
                                )
                            })
                        }

                    </nav>

                    {/* Buttons */}
                    <div className="flex items-center gap-4">
                        <button className="hidden md:block text-red-500 font-medium">
                            Login
                        </button>

                        <button onClick={() => dispatcher(increment())} className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-full transition">
                            Book Table
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}