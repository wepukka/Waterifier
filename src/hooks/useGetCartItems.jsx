import { useEffect, useState } from "react";
import { getItemFromLocalStorage } from "../utils/localStorage";

export default function useGetCartItems(updateValue) {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    let cart = getItemFromLocalStorage("cart");
    if (cart === null) {
      cart = [];
    }
    cart = JSON.parse(cart);

    setCartItems(cart);
  }, [updateValue]);

  return cartItems;
}
