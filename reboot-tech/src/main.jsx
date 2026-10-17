import { StrictMode } from 'react'
import CartProvider from './components/CartProvider.jsx'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
        <App />
    </CartProvider>
  </StrictMode>,
)
