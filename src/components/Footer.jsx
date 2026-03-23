import { Link } from 'react-router-dom'
import { FiFacebook, FiTwitter, FiInstagram, FiYoutube, FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="text-2xl font-extrabold text-white">
              Shop<span className="text-indigo-400">Zone</span>
            </Link>
            <p className="mt-3 text-sm text-gray-400 leading-relaxed">
              Your one-stop destination for quality products across electronics, fashion, home goods, and sports equipment.
            </p>
            <div className="flex gap-4 mt-5">
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-indigo-400 transition-colors"><FiFacebook size={20} /></a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-indigo-400 transition-colors"><FiTwitter size={20} /></a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-indigo-400 transition-colors"><FiInstagram size={20} /></a>
              <a href="#" aria-label="YouTube" className="text-gray-400 hover:text-indigo-400 transition-colors"><FiYoutube size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-indigo-400 transition-colors">Home</Link></li>
              <li><Link to="/products" className="hover:text-indigo-400 transition-colors">All Products</Link></li>
              <li><Link to="/cart" className="hover:text-indigo-400 transition-colors">Shopping Cart</Link></li>
              <li><Link to="/login" className="hover:text-indigo-400 transition-colors">Login</Link></li>
              <li><Link to="/signup" className="hover:text-indigo-400 transition-colors">Create Account</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/products?category=Electronics" className="hover:text-indigo-400 transition-colors">Electronics</Link></li>
              <li><Link to="/products?category=Clothing" className="hover:text-indigo-400 transition-colors">Clothing</Link></li>
              <li><Link to="/products?category=Home+%26+Garden" className="hover:text-indigo-400 transition-colors">Home &amp; Garden</Link></li>
              <li><Link to="/products?category=Sports" className="hover:text-indigo-400 transition-colors">Sports</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <FiMapPin size={15} className="text-indigo-400 flex-shrink-0" />
                <span>123 Commerce Street, San Francisco, CA 94102</span>
              </li>
              <li className="flex items-center gap-2">
                <FiPhone size={15} className="text-indigo-400 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <FiMail size={15} className="text-indigo-400 flex-shrink-0" />
                <span>support@shopzone.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500">
          <p>© {new Date().getFullYear()} ShopZone. All rights reserved.</p>
          <div className="flex gap-4 mt-2 sm:mt-0">
            <a href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-indigo-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-indigo-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
