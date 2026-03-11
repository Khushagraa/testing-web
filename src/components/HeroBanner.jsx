import { Link } from 'react-router-dom'
import { FiArrowRight, FiShoppingBag } from 'react-icons/fi'

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-800 text-white">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/20 rounded-full -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-sm font-medium bg-white/15 backdrop-blur-sm px-4 py-1.5 rounded-full mb-6">
            <FiShoppingBag size={14} />
            New Season, New Arrivals
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Discover Your
            <span className="block text-yellow-300">Next Favourite</span>
            Product
          </h1>

          <p className="mt-5 text-lg text-indigo-100 leading-relaxed max-w-xl">
            Shop thousands of quality products across electronics, fashion, home goods, and sports. Free shipping on orders over $50.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-indigo-700 font-bold rounded-xl hover:bg-yellow-300 hover:text-indigo-800 transition-all shadow-lg hover:shadow-xl active:scale-95"
            >
              Shop Now <FiArrowRight size={18} />
            </Link>
            <Link
              to="/products?category=Electronics"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-white/40 text-white font-semibold rounded-xl hover:bg-white/10 transition-all"
            >
              Explore Electronics
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-8">
            <div>
              <p className="text-2xl font-bold">10K+</p>
              <p className="text-sm text-indigo-200">Products</p>
            </div>
            <div className="w-px h-10 bg-white/20" />
            <div>
              <p className="text-2xl font-bold">50K+</p>
              <p className="text-sm text-indigo-200">Happy Customers</p>
            </div>
            <div className="w-px h-10 bg-white/20" />
            <div>
              <p className="text-2xl font-bold">4.8★</p>
              <p className="text-sm text-indigo-200">Avg Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
