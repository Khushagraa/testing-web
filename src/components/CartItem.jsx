import { Link } from 'react-router-dom'
import { FiTrash2, FiPlus, FiMinus } from 'react-icons/fi'
import { useCart } from '../context/CartContext'
import { handleImageError } from '../utils/imageFallback'

export default function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart()

  return (
    <div className="flex items-center gap-4 py-4 border-b border-gray-100 last:border-0">
      {/* Image */}
      <Link to={`/product/${item.id}`} className="flex-shrink-0">
        <img
          src={item.image}
          alt={item.name}
          onError={handleImageError}
          className="w-20 h-20 object-cover rounded-xl border border-gray-100"
        />
      </Link>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <Link to={`/product/${item.id}`} className="font-medium text-gray-800 hover:text-indigo-600 line-clamp-2 leading-snug text-sm">
          {item.name}
        </Link>
        <p className="text-xs text-gray-400 mt-0.5">{item.category}</p>
        <p className="text-sm font-semibold text-indigo-600 mt-1">${item.price.toFixed(2)}</p>
      </div>

      {/* Quantity controls */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          className="w-7 h-7 flex items-center justify-center rounded-lg border border-gray-200 hover:border-indigo-400 hover:text-indigo-600 transition-colors"
          aria-label="Decrease quantity"
        >
          <FiMinus size={13} />
        </button>
        <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
        <button
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          className="w-7 h-7 flex items-center justify-center rounded-lg border border-gray-200 hover:border-indigo-400 hover:text-indigo-600 transition-colors"
          aria-label="Increase quantity"
        >
          <FiPlus size={13} />
        </button>
      </div>

      {/* Subtotal */}
      <div className="w-20 text-right hidden sm:block">
        <span className="text-sm font-semibold text-gray-800">${(item.price * item.quantity).toFixed(2)}</span>
      </div>

      {/* Remove */}
      <button
        onClick={() => removeFromCart(item.id)}
        className="p-2 text-gray-400 hover:text-red-500 transition-colors"
        aria-label="Remove item"
      >
        <FiTrash2 size={16} />
      </button>
    </div>
  )
}
