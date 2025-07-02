import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, cantidad) => {
    if (isInCart(item.id)) {
      const updatedCart = cart.map((prod) => {
        if (prod.id === item.id) {
          return { ...prod, quantity: prod.quantity + cantidad };
        } else {
          return prod;
        }
      });
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity: cantidad }]);
    }
  };

  const clear = () => {
    setCart([]);
  };

  const removeItem = (id) => {
    setCart(cart.filter((prod) => prod.id !== id));
  };

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  const carTotal = () => {
    return cart.reduce((total, prod) => total + prod.precio * prod.quantity, 0);
  };

 
  const cartQuantity = () => {
    return cart.reduce((acc, prod) => acc + prod.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, clear, removeItem, carTotal, cartQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
