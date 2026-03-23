import { Link } from 'react-router-dom'
import { FiShoppingCart, FiStar } from 'react-icons/fi'
import { useCart } from '../context/CartContext'
import { handleImageError } from '../utils/imageFallback'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FiStar
        key={i}
        size={13}
        className={i < Math.round(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
        style={{ fill: i < Math.round(rating) ? 'currentColor' : 'none' }}
      />
    ))
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow group flex flex-col">
      <Link to={`/product/${product.id}`} className="block overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          onError={handleImageError}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </Link>

      <div className="p-4 flex flex-col flex-1">
        <span className="text-xs font-medium text-indigo-500 uppercase tracking-wide">{product.category}</span>
        <Link to={`/product/${product.id}`} className="mt-1 font-semibold text-gray-800 hover:text-indigo-600 line-clamp-2 leading-snug">
          {product.name}
        </Link>

        <div className="flex items-center gap-1 mt-2">
          {renderStars(product.rating)}
          <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
        </div>

        <div className="mt-auto pt-3 flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
          {product.inStock ? (
            <button
              onClick={() => addToCart(product)}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 active:scale-95 transition-all"
            >
              <FiShoppingCart size={14} />
              Add
            </button>
          ) : (
            <span className="text-xs font-medium text-red-400 bg-red-50 px-2 py-1 rounded-md">Out of Stock</span>
          )}
        </div>
      </div>
    </div>
  )
}
