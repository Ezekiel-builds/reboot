import { useContext } from 'react';
import { cartContext } from './CartProvider';
import Hp from '../assets/Product1.jpg';
import Infinix from '../assets/Product2.jpg';
import MackbookM2 from '../assets/Product3.jpg';
import OriamoEarpods from '../assets/Product4.webp';
import OriamoWatch from '../assets/Product5.jpg';
import Samsung from '../assets/Product6.jpg';
import SamsungWatch from '../assets/Product7.jpg';
import SonyHeadphone from '../assets/Product8.webp';
import './Product.css';

 const products = [
  {
    id: 1,
    name: 'Apple MacBook Air 13 M2',
    description: '8GB Unified Memory, 256GB SSD - Space Grey',
    price: 1450000,
    category: 'PCs',
    image_url: MackbookM2,
    in_stock: true,
    is_featured: true,
  },
  {
    id: 2,
    name: 'Infinix GT 20 Pro 5G',
    description: '256GB Storage, 12GB RAM - Gaming Edition',
    price: 600000,
    category: 'Phones',
    image_url: Infinix,
    in_stock: true,
    is_featured: true,
  },
  {
    id: 3,
    name: 'Oraimo Watch Nova AM',
    description: '2.01" AMOLED Display Smart Watch with Bluetooth Calling',
    price: 56000,
    category: 'Watches',
    image_url: OriamoWatch,
    in_stock: true,
    is_featured: false,
  },
  {
    id: 4,
    name: 'Oraimo FreePods 4',
    description: 'Active Noise Cancellation Wireless ANC Earbuds',
    price: 52000,
    category: 'Headphones',
    image_url: OriamoEarpods,
    in_stock: true,
    is_featured: false,
  },
  {
    id: 5,
    name: 'HP Pavilion 15 (13th Gen Intel i7)',
    description: '16GB RAM, 512GB SSD, Touchscreen - Silver',
    price: 1120000,
    category: 'PCs',
    image_url: Hp,
    in_stock: true,
    is_featured: true,
  },
  {
    id: 6,
    name: 'Samsung Galaxy Watch 6 (44mm)',
    description: 'Bluetooth Fitness Tracker & Health Monitor',
    price: 320000,
    category: 'Watches',
    image_url: SamsungWatch,
    in_stock: true,
    is_featured: false,
  },
  {
    id: 7,
    name: 'Sony WH-1000XM5 Wireless Headphones',
    description: 'Industry-leading Noise Canceling Over-Ear Headphones',
    price: 580000,
    category: 'Headphones',
    image_url: SonyHeadphone,
    in_stock: true,
    is_featured: true,
  },
  {
    id: 8,
    name: 'Samsung Galaxy A55 5G',
    description: '256GB Storage, 8GB RAM - Awesome Iceblue',
    price: 540000,
    category: 'Phones',
    image_url: Samsung,
    in_stock: true,
    is_featured: false,
  },
];

function Products() {
  const { cartItems, addToCart } = useContext(cartContext);
    return (
       <div className="product__cards">
          {products.map((product) => (
              <div className="product__card" key={product.id}>
                  <div className="product__image-box">
                      <img 
                      src={product.image_url} 
                      className="product__image" 
                      alt={product.name} 
                      />
                  </div>

                  <div className="product__card-meta">
                    <h4 className="product__name">
                        {product.name}
                    </h4>

                    <p className="product__price">
                        ₦{product.price.toLocaleString()}
                    </p>

                  </div>

                  <div className="product__card-bottom">
                    <a href="#" className="message__link"><i className="fi fi-rr-messages chat__icon"></i>Ask about this</a>
                    <button className="add__to-cart--link" onClick={() => addToCart(product)}><i className="fi fi-rr-shopping-cart cart__icon"></i></button>
                  </div> 
              </div>
          ))}
       </div>
    )
}

export default Products;