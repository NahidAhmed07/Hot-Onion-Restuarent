import React, { createContext } from 'react';
import useCart from '../hooks/useCart';
export const CartContext = createContext();

const CartProvider = ({children}) => {
  return (
    <CartContext.Provider value={useCart()}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;