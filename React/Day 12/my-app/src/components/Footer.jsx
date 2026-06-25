export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-red-500 mb-4">
              Foodie's
            </h2>

            <p className="text-gray-400 leading-7">
              Experience delicious food, premium dining, and
              unforgettable moments with family and friends.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:text-red-500">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-red-500">
                  Menu
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-red-500">
                  About
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-red-500">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              Contact
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>📍 Jaipur, Rajasthan</li>
              <li>📞 +91 98765 43210</li>
              <li>✉️ info@foodies.com</li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              Opening Hours
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>Mon - Fri : 10 AM - 11 PM</li>
              <li>Sat - Sun : 9 AM - 12 AM</li>
            </ul>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-zinc-800 mt-10 pt-6 text-center text-gray-500">
          © 2026 Foodie's Restaurant. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}