import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductDetails from './pages/ProductDetails';
function App() {
  
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products/:id" element={<ProductDetails />} />
    </Routes>
  )
}

export default App
