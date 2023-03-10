import("./Cart.css");
import { useEffect, useState } from "react";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import {
  getItemFromLocalStorage,
  setItemToLocalStorage,
} from "../../utils/localStorage";
import CartProduct from "./components/CartProduct/CartProduct";

export default function Cart() {
  const imagePath = "src/assets/Bottles/bottle";
  const [products, setProducts] = useState([]);
  const [isRemovingId, setIsRemovingId] = useState(null); // id of the product that is being removed from the cart

  // get cart from local storage
  useEffect(() => {
    const cart = getItemFromLocalStorage("cart");
    if (cart) {
      setProducts(JSON.parse(cart));
    }
  }, []);

  // update cart in local storage
  useEffect(() => {
    setItemToLocalStorage("cart", JSON.stringify(products));
  }, [products]);

  // increase or decrease quantity of a product
  const changeQuantity = (id, type) => {
    try {
      let item = products.find((item) => item.id === parseInt(id));
      if (type === "increase") {
        item.quantity++;
      }
      if (type === "decrease") {
        if (item.quantity === 1) {
          setIsRemovingId(item.id);
          // if quantity is 0, remove the item from the cart
          // show a loading animation for 800ms
          return setTimeout(() => {
            let filteredProducts = products.filter(
              (item) => item.id !== parseInt(id)
            );
            setProducts([...filteredProducts]);
            setIsRemovingId(null);
          }, 800);
        } else {
          item.quantity--;
        }
      }
      return setProducts([...products]);
    } catch (error) {
      console.log(error);
    }
  };

  // calculate total price of products in cart
  const totalPrice = products.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);

  return (
    <div className="cart-container">
      {products.length !== 0 && (
        <div className="cart-icon-container">
          <p>CART</p>
          <div
            className="cart-clear-icon-wrapper"
            cart-clear-tooltip="Clear cart"
            onClick={() => {
              setProducts([]);
            }}
          >
            <DeleteSweepIcon />
            <p>clear cart</p>
          </div>
        </div>
      )}
      {products.length === 0 && (
        <div className="empty-cart">
          <div className="empty-cart-icon-wrapper">
            <ErrorOutlineIcon />
          </div>
          <p>your cart is empty</p>
        </div>
      )}
      {products.length > 0 && (
        <div className="cart-products">
          {products.map((product, index) => (
            <CartProduct
              key={index}
              product={product}
              isRemovingId={isRemovingId}
              imagePath={imagePath}
              changeQuantity={changeQuantity}
            />
          ))}
          <div className="cart-summary">
            <p className="cart-total-price">Total {totalPrice.toFixed(2)} ???</p>
            <button>
              <p>checkout</p>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
