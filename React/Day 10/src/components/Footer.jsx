import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#282d3b] text-white pt-14 pb-6">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold">
              Mini<span className="text-yellow-400">Shop</span>
            </h2>

            <p className="text-gray-300 mt-4 leading-7">
              Modern ecommerce website for premium fashion and lifestyle
              products.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>

            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-yellow-400">Home</a></li>
              <li><a href="#" className="hover:text-yellow-400">Shop</a></li>
              <li><a href="#" className="hover:text-yellow-400">About</a></li>
              <li><a href="#" className="hover:text-yellow-400">Contact</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Categories</h3>

            <ul className="space-y-3 text-gray-300">
              <li>Fashion</li>
              <li>Electronics</li>
              <li>Shoes</li>
              <li>Accessories</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>

            <div className="flex gap-4">
              <button className="bg-white/10 p-3 rounded-lg hover:bg-yellow-400 hover:text-black transition">
                <FaFacebookF />
              </button>

              <button className="bg-white/10 p-3 rounded-lg hover:bg-yellow-400 hover:text-black transition">
                <FaInstagram />
              </button>

              <button className="bg-white/10 p-3 rounded-lg hover:bg-yellow-400 hover:text-black transition">
                <FaTwitter />
              </button>

              <button className="bg-white/10 p-3 rounded-lg hover:bg-yellow-400 hover:text-black transition">
                <FaYoutube />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-gray-400">
          © 2026 MiniShop. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}