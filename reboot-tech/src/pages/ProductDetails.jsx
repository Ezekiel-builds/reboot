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
    const [isClicked, setisClicked] = useState(false)

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

    if(!product) {
        return <p>Product not found.</p>
    }

        const totalPrice = Number(product.price) * quantity;

    return (
        <div className="product__container">
            <Header />
            
            <div className={`${styles["product__box"]} responsive-product-layout`}>
                <div className={`${styles["product__box-left"]} responsive-product-image`}>
                    <img src={product.image_url} alt="Product image" />
                </div>

                <div className={`${styles["product__box-right"]} responsive-product-details`}>
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

                        <div className={styles["quantity__meta"]}>
                            <div className={styles["quantity__count"]}>
                                <button
                                    className={styles["quantity__decrease"]}
                                    onClick={decreaseQuantity}
                                >
                                    <i className="fi fi-rr-minus-small decrease__icon"></i>
                                </button>

                                <span className={styles["quantity__count-value"]}>
                                    {quantity}
                                </span>

                                <button 
                                    className={styles["quantity__increase"]}
                                    onClick={increaseQuantity}
                                    disabled={quantity >= 5}
                                >
                                    <i className="fi fi-rr-plus-small increase__icon"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                  <button className={styles["product__addToCart-btn"]} onClick={() => {
                    addToCart({...product, quantity, totalPrice});
                    disabled=setisClicked(true)
                    }}>
                       <i className="fi fi-rr-shopping-cart cart__icon"></i> { isClicked ? "Added to Cart": "Add to Cart"}
                  </button>


                  <div className={styles["total__amount"]}>
                       <span className={styles["total__amount-label"]}>
                         Total amount:
                       </span>
                      <p className={styles["total__amount-value"]}> ₦{totalPrice.toLocaleString()}</p>
                  </div>      
                </div>
            </div>
        </div>
    )
}
 
export default ProductDetails;