import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import ProductDetails from './components/Product/ProductDetails.jsx'
import ShoppingCart from './components/Product/ShoppingCart.jsx'
import CheckoutProcess from './components/Product/CheckoutProcess.jsx'
import UserAccountDashboard from './components/User/UserAccountDashboard.jsx'

import NotFound from './components/NotFound/NotFound.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import ProductGrid from './components/Product/ProductGrid.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
        <Route path="/" element={<ProductGrid />} />
        <Route path='/about' element={<About />} />
        <Route path='/shop' element={<ProductGrid />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/checkout" element={<CheckoutProcess />} />
        <Route path="/account" element={<UserAccountDashboard />} />
        <Route path="/*" element={<NotFound />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
