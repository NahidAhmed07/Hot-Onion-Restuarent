import { useContext } from "react";
import { CartContext } from "../context/CartProvider";

const useCartData = () => {
  return useContext(CartContext)
}

export default useCartData;