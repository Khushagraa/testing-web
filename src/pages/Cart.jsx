import { Link } from 'react-router-dom'
import { FiShoppingBag, FiArrowRight, FiTrash2 } from 'react-icons/fi'
import CartItem from '../components/CartItem'
import { useCart } from '../context/CartContext'

const TAX_RATE = 0.1

export default function Cart() {
  const { cartItems, cartTotal, clearCart } = useCart()

  const tax = cartTotal * TAX_RATE
  const total = cartTotal + tax

  if (cartItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <FiShoppingBag size={64} className="text-gray-200 mx-auto mb-6" />
        <h2 className="text-2xl font-bold text-gray-700">Your cart is empty</h2>
        <p className="text-gray-400 mt-2">Looks like you haven't added anything yet.</p>
        <Link
          to="/products"
          className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors"
        >
          Start Shopping <FiArrowRight size={16} />
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
        <button
          onClick={clearCart}
          className="flex items-center gap-1.5 text-sm text-red-400 hover:text-red-600 transition-colors"
        >
          <FiTrash2 size={14} /> Clear All
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Items */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-6 divide-y divide-gray-50">
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <Link
            to="/products"
            className="inline-flex items-center gap-1.5 mt-4 text-sm text-indigo-600 font-medium hover:underline"
          >
            ← Continue Shopping
          </Link>
        </div>

        {/* Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-24">
            <h2 className="text-lg font-bold text-gray-900 mb-5">Order Summary</h2>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal ({cartItems.reduce((s, i) => s + i.quantity, 0)} items)</span>
                <span className="font-medium">${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span className="font-medium text-green-500">
                  {cartTotal >= 50 ? 'Free' : '$5.99'}
                </span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Tax (10%)</span>
                <span className="font-medium">${tax.toFixed(2)}</span>
              </div>
            </div>

            {cartTotal < 50 && (
              <div className="mt-3 bg-indigo-50 rounded-lg px-3 py-2 text-xs text-indigo-600">
                Add ${(50 - cartTotal).toFixed(2)} more for free shipping!
              </div>
            )}

            <div className="border-t border-gray-100 mt-4 pt-4 flex justify-between font-bold text-gray-900">
              <span>Total</span>
              <span className="text-xl">${(total + (cartTotal < 50 ? 5.99 : 0)).toFixed(2)}</span>
            </div>

            <Link
              to="/checkout"
              className="mt-5 w-full flex items-center justify-center gap-2 py-3.5 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors active:scale-95"
            >
              Proceed to Checkout <FiArrowRight size={16} />
            </Link>

            {/* Accepted payments */}
            <div className="mt-4 text-center text-xs text-gray-400">
              🔒 Secure checkout · Visa · Mastercard · PayPal
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
