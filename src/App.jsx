import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import PageNotefound from './pages/PageNotefound'
import Cart from './pages/Cart'
import { ProductProvider } from './Providers/Products/ProductContext'
import { CartProvider } from './Providers/cart/CartContext'

const App = () => {
  return (
    <ProductProvider>
      <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="*" element={<PageNotefound />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </Router>
     </CartProvider>
    </ProductProvider>
  )
}

export default App