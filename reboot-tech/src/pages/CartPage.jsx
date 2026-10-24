import { Link } from "react-router-dom";
import Header from "../components/Header";
import { useContext } from "react";
import { cartContext } from "../components/CartProvider";
import './CartPage.css';

function CartPage() {
    const { cartItems, removeFromCart } = useContext(cartContext);
    const products = cartItems;
    console.log(products);
    const itemsTotal = cartItems.reduce(
    (total, item) =>
        total + Number(item.price) * item.quantity,
    0
);
    return (
        <div className="cart">
            <Header />

            {products.map((product, index) => {
                return (
                        <div className="product" key={`${product.id}-${index}`}>
                            <div className="product__image--box">
                                <img src={product.image_url} alt={ product.name || "Product Image" } />
                            </div>

                            <div className="product__left">
                                <div className="product__left--header">
                                    <p className="product__name">
                                        {product.name}
                                    </p>

                                     <button
                                    className="product__remove"
                                    onClick={() => removeFromCart(product.id)}
                                    >
                                        <i className="fi fi-rr-trash"></i>
                                    </button>
                                </div>

                                <span className="product__meta">
                                    Price per unit: ₦{product.price}
                                </span>

                                <span className="product__meta">
                                    Quantity: {product.quantity ?? 1 }
                                </span>

                                <span className="product__meta">
                                    Subtotal
                                </span>

                                <h4 className="product__price">
                                    {product.totalPrice ? `₦${product.totalPrice}` : `₦${product.price}`}
                                </h4>
                            </div>
                        </div>
                  
                )
            })}

             <div className="cart__bottom">
                    <div className="cart__bottom-total">
                        <span className="cart__bottom-subtotal">
                            Subtotal
                        </span>

                        <p className="cart__total-price">
                            ₦{itemsTotal.toLocaleString()}
                        </p>
                    </div>

                    <div className="cart__bottom-delivery">
                        <span className="cart__bottom-delivery--text">
                            Delivery
                        </span>

                        <p>Calculated at checkout</p>
                    </div>

                    <div className="order__btn-container">
                         <Link to={(e) => e.preventDefault()} className="order__btn">
                             Place Order & Pay
                         </Link> 
                    </div>     
            </div>
        </div>
    )
}

export default CartPage;