import Header from "../components/Header";
import { useContext } from "react";
import { cartContext } from "../components/CartProvider";

function CartPage() {
    const { cartItems } = useContext(cartContext);
    const products = cartItems;

    return (
        <>
            <Header />

            {products.map((product) => {
                return (
                    <div className="cart__container">
                        <div className="product" key={product.id}>
                            <h4 className="product__name">
                                {product.name}
                            </h4>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default CartPage;