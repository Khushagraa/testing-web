import { Link } from 'react-router-dom'
import { FiMonitor, FiShoppingBag, FiHome, FiActivity, FiArrowRight, FiMail } from 'react-icons/fi'
import HeroBanner from '../components/HeroBanner'
import ProductCard from '../components/ProductCard'
import products from '../data/products'
import { useState } from 'react'

const categories = [
  { name: 'Electronics', icon: FiMonitor, color: 'bg-blue-50 text-blue-600 border-blue-100', description: 'Gadgets & Devices' },
  { name: 'Clothing', icon: FiShoppingBag, color: 'bg-pink-50 text-pink-600 border-pink-100', description: 'Fashion & Style' },
  { name: 'Home & Garden', icon: FiHome, color: 'bg-green-50 text-green-600 border-green-100', description: 'Living & Decor' },
  { name: 'Sports', icon: FiActivity, color: 'bg-orange-50 text-orange-600 border-orange-100', description: 'Fitness & Outdoors' },
]

const featuredProducts = products.filter((p) => p.inStock).slice(0, 6)

export default function Home() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
      setEmail('')
    }
  }

  return (
    <div>
      <HeroBanner />

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Shop by Category</h2>
          <p className="mt-2 text-gray-500">Browse our wide selection of products by category</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map(({ name, icon: Icon, color, description }) => (
            <Link
              key={name}
              to={`/products?category=${encodeURIComponent(name)}`}
              className={`group flex flex-col items-center p-6 rounded-2xl border ${color} hover:shadow-md transition-all`}
            >
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                <Icon size={26} />
              </div>
              <h3 className="mt-3 font-semibold text-gray-800">{name}</h3>
              <p className="text-xs text-gray-500 mt-1">{description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
              <p className="mt-1 text-gray-500">Hand-picked products for you</p>
            </div>
            <Link
              to="/products"
              className="hidden sm:flex items-center gap-1.5 text-indigo-600 font-semibold hover:gap-2.5 transition-all"
            >
              View All <FiArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-8 sm:hidden">
            <Link to="/products" className="inline-flex items-center gap-1.5 text-indigo-600 font-semibold">
              View All Products <FiArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why ShopZone */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Why Shop With Us?</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { title: 'Free Shipping', desc: 'Free delivery on all orders over $50. Fast & reliable.', emoji: '🚚' },
            { title: 'Secure Payments', desc: 'Your payment info is always safe with 256-bit SSL encryption.', emoji: '🔒' },
            { title: 'Easy Returns', desc: '30-day hassle-free return policy. No questions asked.', emoji: '↩️' },
          ].map((item) => (
            <div key={item.title} className="bg-indigo-50 rounded-2xl p-6 text-center border border-indigo-100">
              <div className="text-4xl mb-3">{item.emoji}</div>
              <h3 className="font-bold text-gray-800">{item.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-700 py-16">
        <div className="max-w-xl mx-auto px-4 text-center">
          <FiMail size={40} className="text-white/80 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white">Stay in the Loop</h2>
          <p className="mt-2 text-indigo-200">Get exclusive deals, new arrivals, and insider tips straight to your inbox.</p>
          {subscribed ? (
            <div className="mt-6 bg-white/20 rounded-xl px-6 py-4 text-white font-semibold text-lg">
              🎉 Thanks for subscribing!
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="mt-6 flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-4 py-3 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button
                type="submit"
                className="px-5 py-3 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold rounded-xl transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}
