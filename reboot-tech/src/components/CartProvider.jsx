import { createContext, useState, useEffect } from 'react';

export const cartContext = createContext();

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const savedItems = localStorage.getItem("cartItems");

    return savedItems ? JSON.parse(savedItems): [];
  });
  

  function addToCart(product) {
    setCartItems((currentItems) => [
        ...currentItems,
        product
    ])
    console.log(product)
  }

  function removeFromCart(productId) {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id !== productId)
    );
  }

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  },[cartItems])

    return (
        <>
            <cartContext.Provider value={{cartItems, addToCart, removeFromCart}}>
                {children}
            </cartContext.Provider>
        </>
    )
}

export default CartProvider;