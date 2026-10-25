import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import CartProvider from './components/CartProvider.jsx'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './ResponsivePages.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </CartProvider>
  </StrictMode>,
)
