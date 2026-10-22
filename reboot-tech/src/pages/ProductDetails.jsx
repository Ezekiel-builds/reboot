import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from 'react';
import { cartContext } from "../components/CartProvider";
import { supabase } from "../SupabaseClient";
import Header from "../components/Header";
import styles from './ProductDetails.module.css';

function ProductDetails() {
    const { id } = useParams();

    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useContext(cartContext);

    function increaseQuantity() {
        setQuantity(currentQuantity => currentQuantity + 1);
    };

    function decreaseQuantity() {
           setQuantity(currentQuantity =>
            Math.max(1, currentQuantity - 1)
        );
    };

    useEffect(() => {
        async function fetchProduct() {
            const { data, error } = await supabase
            .from("products")
            .select("*")
            .eq("id", id)
            .maybeSingle()

            if(error) {
                setError(error.message);
                console.log(error.message)
            }
            if(data) {
                setProduct(data)
            }
            
            setLoading(false);
        }

        fetchProduct();
    }, [id]);

    if(loading) {
        return <p>Loading products...</p> 
    }

      if (error) {
        return <p>{error}</p>;
    }

        const totalPrice = Number(product.price) * quantity;

    return (
        <div className="product__container">
            <Header />
            
            <div className={styles["product__box"]}>
                <div className={styles["product__box-left"]}>
                    <img src={product.image_url} alt="Product image" />
                </div>

                <div className={styles["product__box-right"]}>
                    <h4 className={styles["product__name"]}>
                        {product.name}
                    </h4>

                    <h3 className={styles["product__price"]}>
                        ₦{product.price.toLocaleString()}
                    </h3>

                    <p className={styles["product__description"]}>
                        {product.description}
                    </p>

                    <div className={styles["product__box-quantity"]}>
                        <span className={styles["quantity__header"]}>
                            QUANTITY
                        </span>

                        <div className="quantity__meta">
                            <div className="quantity__count">
                                <button className="quantitiy__decrease" onClick={decreaseQuantity}>
                                    <i className="fi fi-rr-minus-small decrease__icon"></i>
                                </button>

                                <span className="quantity__count-value">
                                    {quantity}
                                </span>

                                <button 
                                className="quantity__increase" 
                                onClick={increaseQuantity}
                                disabled={quantity >= 5}
                                >
                                    <i className="fi fi-rr-plus-small increase__icon"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                  <button className="product__addToCart-btn" onClick={() => addToCart({...product, quantity})}>
                        <i className="fi fi-rr-shopping-cart cart__icon"></i> Add to Cart
                  </button>

                  <p> ₦{totalPrice.toLocaleString()}</p>
                </div>
            </div>
        </div>
    )
}
 
export default ProductDetails;