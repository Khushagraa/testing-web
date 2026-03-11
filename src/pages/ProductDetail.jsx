import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { FiShoppingCart, FiStar, FiArrowLeft, FiPlus, FiMinus, FiCheck } from 'react-icons/fi'
import products from '../data/products'
import { useCart } from '../context/CartContext'
import ProductCard from '../components/ProductCard'

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find((p) => p.id === Number(id))
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <div className="text-6xl mb-4">😕</div>
        <h2 className="text-2xl font-bold text-gray-700">Product Not Found</h2>
        <p className="text-gray-500 mt-2">The product you're looking for doesn't exist.</p>
        <Link to="/products" className="mt-6 inline-flex items-center gap-2 text-indigo-600 font-semibold hover:underline">
          <FiArrowLeft size={16} /> Back to Products
        </Link>
      </div>
    )
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  const handleAddToCart = () => {
    addToCart(product, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const renderStars = (rating) =>
    Array.from({ length: 5 }, (_, i) => (
      <FiStar
        key={i}
        size={18}
        className={i < Math.round(rating) ? 'text-yellow-400' : 'text-gray-300'}
        style={{ fill: i < Math.round(rating) ? 'currentColor' : 'none' }}
      />
    ))

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Back */}
      <Link to="/products" className="inline-flex items-center gap-1.5 text-gray-500 hover:text-indigo-600 text-sm mb-6 transition-colors">
        <FiArrowLeft size={15} /> Back to Products
      </Link>

      {/* Product */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Image */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-96 lg:h-full object-cover"
          />
        </div>

        {/* Info */}
        <div>
          <span className="text-sm font-medium text-indigo-500 uppercase tracking-wide">{product.category}</span>
          <h1 className="text-3xl font-bold text-gray-900 mt-2 leading-tight">{product.name}</h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-3">
            <div className="flex">{renderStars(product.rating)}</div>
            <span className="font-semibold text-gray-700">{product.rating}</span>
            <span className="text-sm text-gray-400">({product.reviews} reviews)</span>
          </div>

          {/* Price */}
          <div className="mt-4">
            <span className="text-4xl font-extrabold text-gray-900">${product.price.toFixed(2)}</span>
          </div>

          {/* Stock */}
          <div className="mt-2">
            {product.inStock ? (
              <span className="inline-flex items-center gap-1.5 text-sm text-green-600 font-medium bg-green-50 px-3 py-1 rounded-full">
                <FiCheck size={13} /> In Stock
              </span>
            ) : (
              <span className="text-sm text-red-500 font-medium bg-red-50 px-3 py-1 rounded-full">Out of Stock</span>
            )}
          </div>

          {/* Description */}
          <p className="mt-5 text-gray-600 leading-relaxed">{product.description}</p>

          {/* Quantity selector */}
          {product.inStock && (
            <>
              <div className="mt-6">
                <label className="text-sm font-medium text-gray-700 mb-2 block">Quantity</label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 hover:border-indigo-400 hover:text-indigo-600 transition-colors"
                    aria-label="Decrease"
                  >
                    <FiMinus size={14} />
                  </button>
                  <span className="w-10 text-center font-semibold text-lg">{quantity}</span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 hover:border-indigo-400 hover:text-indigo-600 transition-colors"
                    aria-label="Increase"
                  >
                    <FiPlus size={14} />
                  </button>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <button
                  onClick={handleAddToCart}
                  className={`flex-1 flex items-center justify-center gap-2 py-3.5 font-semibold rounded-xl transition-all active:scale-95 ${
                    added
                      ? 'bg-green-500 text-white'
                      : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                  }`}
                >
                  {added ? (
                    <><FiCheck size={18} /> Added to Cart!</>
                  ) : (
                    <><FiShoppingCart size={18} /> Add to Cart</>
                  )}
                </button>
                <Link
                  to="/cart"
                  className="px-5 py-3.5 border-2 border-indigo-200 text-indigo-600 font-semibold rounded-xl hover:bg-indigo-50 transition-colors"
                >
                  View Cart
                </Link>
              </div>
            </>
          )}

          {/* Details */}
          <div className="mt-8 border-t border-gray-100 pt-6 grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-400">Category</p>
              <p className="font-medium text-gray-700">{product.category}</p>
            </div>
            <div>
              <p className="text-gray-400">Rating</p>
              <p className="font-medium text-gray-700">{product.rating} / 5.0</p>
            </div>
            <div>
              <p className="text-gray-400">Reviews</p>
              <p className="font-medium text-gray-700">{product.reviews.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-gray-400">Availability</p>
              <p className={`font-medium ${product.inStock ? 'text-green-600' : 'text-red-500'}`}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
