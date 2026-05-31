import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-10">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Logo / About */}
          <div>
            <h2 className="text-2xl font-bold mb-3">MyLogo</h2>
            <p className="text-gray-400 text-sm">
              Simple footer component using Tailwind CSS and React JSX.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact</h3>
            <p className="text-gray-400 text-sm">
              Email: info@example.com
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Phone: +91 9876543210
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-5 text-center text-sm text-gray-400">
          © 2026 MyLogo. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}