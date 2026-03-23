import { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const stored = localStorage.getItem('shopzone_user')
      return stored ? JSON.parse(stored) : null
    } catch {
      return null
    }
  })

  const login = async (email, password) => {
    // Mock login — accepts any non-empty credentials
    if (!email || !password) throw new Error('Email and password are required.')
    const mockUser = {
      id: 1,
      name: email.split('@')[0],
      email,
      avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(email.split('@')[0])}&background=6366f1&color=fff`,
    }
    setUser(mockUser)
    localStorage.setItem('shopzone_user', JSON.stringify(mockUser))
    return mockUser
  }

  const signup = async (name, email, password) => {
    if (!name || !email || !password) throw new Error('All fields are required.')
    const mockUser = {
      id: Date.now(),
      name,
      email,
      avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=6366f1&color=fff`,
    }
    setUser(mockUser)
    localStorage.setItem('shopzone_user', JSON.stringify(mockUser))
    return mockUser
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('shopzone_user')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within an AuthProvider')
  return context
}
