import { useEffect, useState } from "react";
import FoodDetails from "../components/Home/FoodDetails/FoodDetails";
import { addToDb, getStoredCart } from "../utilities/fakeDb";


const useCart = () => {
  const [allFoods, setAllFoods] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/NahidAhmed07/api/main/Onion-resturent/AllFoods.json"
    ).then(res => res.json())
      .then(data => setAllFoods(data));
  }, [])
  
  useEffect(() => {
    if (allFoods.length) {
      const storeCart = getStoredCart();
      const findFoods = [];
      for (const key in storeCart) {
        
        const findFood = allFoods.find(food => food.id === key);
        if (findFood) {
          findFood.quantity = storeCart[key];
          findFoods.push(findFood);
        }
      }

      setCartItems(findFoods);
    }


    

  }, [allFoods])
  

  const handleMinus = (food) => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      addToDb(food.id, false);
      // const findFood = cartItems.find((item) => (item.id = food.id));
      // if (findFood) {
      //   const unmatched = cartItems.filter((item) => item.id !== findFood.id);
      //   findFood.quantity -= 1;
        
      //   setCartItems([...unmatched, findFood]);
      // }
    }
  };

  const handlePlus = (food) => {
    if (quantity <= 9) {
      setQuantity(quantity + 1);
      addToDb(food.id);
      // const findFood = cartItems.find((item) => (item.id = food.id));
      // if (findFood) {
      //   const unmatched = cartItems.filter((item) => item.id !== findFood.id);
      //   findFood.quantity += 1;
        
      //   setCartItems([...unmatched, findFood]);
      // }
    }
  };


  return {
    cartItems,
    setCartItems,
    handleMinus,
    handlePlus,
    quantity,
    setQuantity,
  }
}

export default useCart;