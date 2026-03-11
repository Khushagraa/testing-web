# ShopZone – Modern Ecommerce Frontend

A fully-featured ecommerce frontend built with **React 18**, **Vite**, **Tailwind CSS**, and **React Router v6**.

## 🚀 Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI library |
| Vite 5 | Build tool & dev server |
| Tailwind CSS 3 | Utility-first styling |
| React Router v6 | Client-side routing |
| React Icons | Icon library |

## 📦 Features

- **Home page** – Hero banner, category grid, featured products, newsletter signup
- **Products page** – Search, sidebar filters (category, price, rating), sort dropdown, responsive grid
- **Product Detail** – Image, description, quantity selector, add-to-cart, related products
- **Shopping Cart** – Item list with quantity controls, order summary, tax & shipping calculation
- **Checkout** – Shipping form, credit card / PayPal selection, order confirmation
- **Authentication** – Login & signup pages with form validation (mock auth, persisted in `localStorage`)
- **Profile** – User info card, mock order history
- **Responsive design** – Mobile-first, works on all screen sizes

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd testing-web

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
npm run build
```

The output will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 🗂️ Project Structure

```
src/
├── components/
│   ├── CartItem.jsx       # Cart row component
│   ├── Footer.jsx         # Site footer
│   ├── HeroBanner.jsx     # Homepage hero section
│   ├── Navbar.jsx         # Responsive navigation bar
│   └── ProductCard.jsx    # Product grid card
├── context/
│   ├── AuthContext.jsx    # Authentication state & mock auth
│   └── CartContext.jsx    # Shopping cart state (useReducer)
├── data/
│   └── products.js        # 16 mock products across 4 categories
├── pages/
│   ├── Cart.jsx
│   ├── Checkout.jsx
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── ProductDetail.jsx
│   ├── Products.jsx
│   ├── Profile.jsx
│   └── Signup.jsx
├── App.jsx
├── index.css
└── main.jsx
```

## �� Design

- **Color scheme**: Indigo / Purple gradient accents
- **Typography**: System font stack via Tailwind
- **Icons**: `react-icons` (Feather Icons + Font Awesome)

## 📝 Notes

- Authentication is **mock only** – credentials are stored in `localStorage` and no real backend is required.
- Product data is static (see `src/data/products.js`).
- Images are served from [picsum.photos](https://picsum.photos).
