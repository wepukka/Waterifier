import "./ProductList.css";
import { useEffect, useState } from "react";
import { Paper } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import {
  setItemToLocalStorage,
  getItemFromLocalStorage,
} from "../../../../utils/localStorage";
// Components
import WaterRating from "../../../../components/WaterRating/WaterRating";

export default function ProductList({ products, pageNumber }) {
  const path = "src/assets/Bottles/bottle";
  const [slicedProducts, setSlicedProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartChanged, setCartChanged] = useState(false); // used to update cart items

  // Slice products array to show only 10 items depending on page number
  useEffect(() => {
    let sliced = products.slice((pageNumber - 1) * 10, pageNumber * 10);
    setSlicedProducts(sliced);
  }, [pageNumber, products]);

  // add item to cart, if item is already in cart, increase quantity
  const addToCart = (e) => {
    let cart = getItemFromLocalStorage("cart");
    if (cart === null) {
      cart = [];
    } else {
      cart = JSON.parse(cart);
    }
    // If item is already in cart, increase quantity
    let itemInCart = cart.find((item) => item.id === parseInt(e.target.id));
    if (itemInCart) {
      itemInCart.quantity++;
      setItemToLocalStorage("cart", JSON.stringify(cart));
      return setCartChanged(!cartChanged);
    }

    let product = products.find(
      (product) => product.id === parseInt(e.target.id)
    );
    cart.push(product);
    setItemToLocalStorage("cart", JSON.stringify(cart));
    return setCartChanged(!cartChanged);
  };

  // Get cart from local storage if changes are made
  useEffect(() => {
    let cart = getItemFromLocalStorage("cart");
    cart = JSON.parse(cart);
    setCartItems(cart);
  }, [cartChanged]);

  const AmountOfProductInCart = ({ productId }) => {
    let item = cartItems.find((item) => item.id === productId);
    if (item) {
      return (
        <div className="product-quantity">
          <p>{item.quantity}</p>
        </div>
      );
    }
  };

  return (
    <div className="product-list">
      {slicedProducts.map((product, index) => (
        <Paper className="product-card" key={index}>
          <div className="product-card-container">
            <AmountOfProductInCart productId={product.id} />
            <img width="50" height="100" src={path + product.image + ".png"} />
            <div className="product-info-container">
              <p className="product-name">{product.name}</p>
              <p>Goes well with:</p>
              <ul>
                <li>{product.productDetails.detail1}</li>
                {product.productDetails.detail2 ? (
                  <li>{product.productDetails.detail2}</li>
                ) : null}
                {product.productDetails.detail3 ? (
                  <li>{product.productDetails.detail3}</li>
                ) : null}
                {product.productDetails.detail4 ? (
                  <li>{product.productDetails.detail4}</li>
                ) : null}
              </ul>
            </div>
            <div className="star-rating-wrapper">
              <p style={{ fontSize: "12px" }}>rating</p>
              <WaterRating rating={product.rating} />
            </div>
            <div className="price-cart-container">
              <p>Price: {parseFloat(product.price).toFixed(2)}€</p>
              <button
                id={product.id}
                className="product-card-button"
                onClick={(e) => {
                  addToCart(e);
                }}
              >
                <AddShoppingCartIcon />
              </button>
            </div>
          </div>
        </Paper>
      ))}
    </div>
  );
}
