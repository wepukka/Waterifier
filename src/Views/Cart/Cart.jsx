import("./Cart.css");
import { useEffect, useState } from "react";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import {
  getItemFromLocalStorage,
  setItemToLocalStorage,
} from "../../utils/localStorage";
import { LoadingCircleDots } from "../../components/LoadingCircle/LoadingCircle";

export default function Cart() {
  const path = "src/assets/Bottles/bottle";
  const [products, setProducts] = useState([]);
  const [isRemoving, setIsRemoving] = useState(false);

  useEffect(() => {
    const cart = getItemFromLocalStorage("cart");
    if (cart) {
      setProducts(JSON.parse(cart));
    }
  }, []);

  useEffect(() => {
    setItemToLocalStorage("cart", JSON.stringify(products));
  }, [products]);

  const changeQuantity = (id, type) => {
    try {
      let item = products.find((item) => item.id === parseInt(id));
      if (type === "increase") {
        item.quantity++;
      }
      if (type === "decrease") {
        item.quantity--;
        if (item.quantity === 0) {
          setIsRemoving(true);
          // if quantity is 0, remove the item from the cart
          // show a loading animation for 800ms
          return setTimeout(() => {
            let filteredProducts = products.filter(
              (item) => item.id !== parseInt(id)
            );
            setProducts([...filteredProducts]);
            setIsRemoving(false);
          }, 800);
        }
      }
      return setProducts([...products]);
    } catch (error) {
      console.log(error);
    }
  };

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
          {products.map((product, index) => (
            <div className="cart-item" key={index}>
              <div className="cart-item-image">
                <img src={path + product.image + ".png"} alt={product.name} />
              </div>
              <div className="cart-item-details">
                <p className="cart-item-name">{product.name}</p>
              </div>
              <div className="cart-item-action">
                <button
                  className="cart-item-button"
                  style={{ position: "relative" }}
                  id={product.id}
                  onClick={(e) => {
                    changeQuantity(e.target.id, "decrease");
                  }}
                >
                  {product.quantity === 0 && isRemoving ? (
                    <LoadingCircleDots
                      size="10px"
                      borderWidth="5px"
                      animationTime="0.8s"
                    />
                  ) : product.quantity === 1 ? (
                    <DeleteForeverIcon />
                  ) : (
                    "-"
                  )}
                </button>
                <p className="cart-item-quantity">{product.quantity}</p>
                <button
                  className="cart-item-button"
                  id={product.id}
                  onClick={(e) => {
                    changeQuantity(e.target.id, "increase");
                  }}
                >
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
