import { Link, useNavigate } from 'react-router-dom'
import { FiUser, FiMail, FiPackage, FiLogOut, FiStar } from 'react-icons/fi'
import { useAuth } from '../context/AuthContext'

const MOCK_ORDERS = [
  {
    id: 'SZ-10482',
    date: 'Dec 10, 2024',
    status: 'Delivered',
    total: 329.97,
    items: [
      { name: 'Wireless Noise-Cancelling Headphones', qty: 1, price: 249.99 },
      { name: 'Resistance Band Set', qty: 2, price: 34.99 },
    ],
  },
  {
    id: 'SZ-09371',
    date: 'Nov 22, 2024',
    status: 'Delivered',
    total: 119.99,
    items: [
      { name: 'Premium Running Sneakers', qty: 1, price: 119.99 },
    ],
  },
  {
    id: 'SZ-08155',
    date: 'Oct 14, 2024',
    status: 'Delivered',
    total: 199.99,
    items: [
      { name: 'Smart Watch Pro', qty: 1, price: 199.99 },
    ],
  },
]

const statusColors = {
  Delivered: 'bg-green-100 text-green-700',
  Processing: 'bg-yellow-100 text-yellow-700',
  Shipped: 'bg-blue-100 text-blue-700',
  Cancelled: 'bg-red-100 text-red-500',
}

export default function Profile() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  if (!user) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <FiUser size={64} className="text-gray-200 mx-auto mb-6" />
        <h2 className="text-2xl font-bold text-gray-700">You're not logged in</h2>
        <p className="text-gray-400 mt-2">Please sign in to view your profile.</p>
        <div className="mt-6 flex gap-3 justify-center">
          <Link to="/login" className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors">
            Sign In
          </Link>
          <Link to="/signup" className="px-6 py-3 border border-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors">
            Create Account
          </Link>
        </div>
      </div>
    )
  }

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">My Account</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile card */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-20 h-20 rounded-full mx-auto border-4 border-indigo-100"
            />
            <h2 className="mt-3 text-xl font-bold text-gray-900">{user.name}</h2>
            <p className="text-sm text-gray-400 flex items-center justify-center gap-1 mt-1">
              <FiMail size={13} /> {user.email}
            </p>

            <div className="mt-5 space-y-2">
              <div className="flex items-center justify-between text-sm py-2 border-b border-gray-50">
                <span className="text-gray-500 flex items-center gap-2"><FiPackage size={14} /> Total Orders</span>
                <span className="font-semibold text-gray-800">{MOCK_ORDERS.length}</span>
              </div>
              <div className="flex items-center justify-between text-sm py-2 border-b border-gray-50">
                <span className="text-gray-500 flex items-center gap-2"><FiStar size={14} /> Reviews</span>
                <span className="font-semibold text-gray-800">7</span>
              </div>
              <div className="flex items-center justify-between text-sm py-2">
                <span className="text-gray-500">Member Since</span>
                <span className="font-semibold text-gray-800">2024</span>
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="mt-5 w-full flex items-center justify-center gap-2 py-2.5 border border-red-200 text-red-500 text-sm font-medium rounded-xl hover:bg-red-50 transition-colors"
            >
              <FiLogOut size={15} /> Logout
            </button>
          </div>

          {/* Quick links */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mt-4">
            <h3 className="font-semibold text-gray-700 mb-3">Quick Actions</h3>
            <div className="space-y-1">
              <Link to="/products" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
                🛍️ Browse Products
              </Link>
              <Link to="/cart" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
                🛒 View Cart
              </Link>
            </div>
          </div>
        </div>

        {/* Orders */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <FiPackage size={18} className="text-indigo-500" /> Order History
              </h2>
              <span className="text-sm text-gray-400">{MOCK_ORDERS.length} orders</span>
            </div>

            {MOCK_ORDERS.length === 0 ? (
              <div className="text-center py-12">
                <FiPackage size={48} className="text-gray-200 mx-auto mb-3" />
                <p className="text-gray-500">No orders yet</p>
                <Link to="/products" className="mt-3 inline-block text-indigo-600 font-semibold hover:underline text-sm">
                  Start shopping
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {MOCK_ORDERS.map((order) => (
                  <div key={order.id} className="border border-gray-100 rounded-xl p-4 hover:border-indigo-200 transition-colors">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <span className="font-semibold text-gray-800">#{order.id}</span>
                        <span className="text-xs text-gray-400 ml-2">{order.date}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${statusColors[order.status] || 'bg-gray-100 text-gray-600'}`}>
                          {order.status}
                        </span>
                        <span className="font-bold text-gray-800">${order.total.toFixed(2)}</span>
                      </div>
                    </div>
                    <div className="space-y-1">
                      {order.items.map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between text-sm text-gray-500">
                          <span className="line-clamp-1 flex-1 mr-2">{item.name} × {item.qty}</span>
                          <span className="flex-shrink-0">${(item.price * item.qty).toFixed(2)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
