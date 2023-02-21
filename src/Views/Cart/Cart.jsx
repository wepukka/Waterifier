import("./Cart.css");
import { useEffect, useState } from "react";
import {
  getItemFromLocalStorage,
  setItemToLocalStorage,
  removeItemFromLocalStorage,
} from "../../utils/localStorage";

import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function Cart() {
  const path = "src/assets/Bottles/bottle";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const cart = getItemFromLocalStorage("cart");
    if (cart) {
      setProducts(JSON.parse(cart));
    }
  }, []);

  const totalPrice = products.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);

  return (
    <div className="cart-container">
      <div className="cart-icon-wrapper">
        <ShoppingCartIcon />
      </div>
      {products.length === 0 && (
        <div className="empty-cart">
          <div className="empty-cart-icon-wrapper">
            <ErrorOutlineIcon />
          </div>
          <p>your cart is empty</p>
        </div>
      )}
      {products.length > 0 && (
        <div className="cart-items">
          {products.map((product) => (
            <div className="cart-item">
              <div className="cart-item-image">
                <img src={path + product.image + ".png"} alt={product.name} />
              </div>
              <div className="cart-item-details">
                <p className="cart-item-name">{product.name}</p>
              </div>
              <div className="cart-item-action">
                <button className="cart-item-remove" id={product.id}>
                  -
                </button>
                <p className="cart-item-quantity">{product.quantity}</p>
                <button className="cart-item-add" id={product.id}>
                  +
                </button>
              </div>
              <div className="cart-item-price">
                {" x " + parseFloat(product.price).toFixed(2) + " €"}
              </div>
              <div className="cart-item-price-total">
                {(product.price * product.quantity).toFixed(2) + " €"}
              </div>
            </div>
          ))}
          <div className="cart-summary">
            <p className="cart-total-price">Total {totalPrice.toFixed(2)} €</p>
          </div>
        </div>
      )}
    </div>
  );
}
