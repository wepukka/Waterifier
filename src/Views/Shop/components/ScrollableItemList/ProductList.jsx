import "./ProductList.css";
import { useEffect, useState } from "react";
import { Paper } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { products } from "../../../../assets/productData";
import WaterRating from "./WaterRating/WaterRating";
import {
  setItemToLocalStorage,
  getItemFromLocalStorage,
} from "../../../../utils/localStorage";

export default function ProductList() {
  const path = "src/assets/Bottles/bottle";

  // Add item to local storage with key "cart"
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
      return;
    }
    let product = products.find(
      (product) => product.id === parseInt(e.target.id)
    );
    cart.push(product);
    return setItemToLocalStorage("cart", JSON.stringify(cart));
  };

  return (
    <div className="product-list">
      <div className="product-list-filter">
        <p>filter</p>
        <button className="product-list-filter-button">Rating</button>
      </div>
      {products.map((product, index) => (
        <Paper className="product-card" key={index}>
          <div className="product-card-container">
            <img width="50" height="100" src={path + product.image + ".png"} />
            <div className="product-info-container">
              <p className="product-name">{product.productName}</p>
              <p>Goes well with:</p>
              <ul>
                <li>{product.productDetails.detail1}</li>
                <li>{product.productDetails.detail2}</li>
                <li>{product.productDetails.detail3}</li>
                <li>{product.productDetails.detail4}</li>
              </ul>
            </div>
            <div className="star-rating-wrapper">
              <p style={{ fontSize: "12px" }}>rating</p>
              <WaterRating rating={product.rating} />
            </div>
            <div className="price-cart-container">
              <p>Price: {product.productPrice}€</p>
              <button
                id={product.id}
                className="product-card-button"
                onClick={(e) => {
                  addToCart(e);
                }}
              >
                <AddShoppingCartIcon id={product.id} />
              </button>
            </div>
          </div>
        </Paper>
      ))}
    </div>
  );
}
