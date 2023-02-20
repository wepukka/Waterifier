import "./ProductList.css";
import { useEffect, useState } from "react";
import { Paper } from "@mui/material";
import { productData } from "../../../../assets/productData";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import {
  setItemToLocalStorage,
  getItemFromLocalStorage,
} from "../../../../utils/localStorage";

// Components
import WaterRating from "./WaterRating/WaterRating";
import {
  PageNumbersBar,
  ProductFilterBar,
} from "./ProductListBars/ProductListBars";

export default function ProductList() {
  const path = "src/assets/Bottles/bottle";

  let originalData = productData;
  const [products, setProducts] = useState([]);
  const [isSorted, setIsSorted] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);

  // Slice products array to show only 10 items depending on page number
  useEffect(() => {
    let slicedProducts = originalData.slice(
      (pageNumber - 1) * 10,
      pageNumber * 10
    );
    setProducts(slicedProducts);
  }, [pageNumber, isSorted]);

  // Change page number
  const changePageNumber = (e) => {
    setPageNumber(parseInt(e.target.id));
  };

  // Sort products by rating
  const sortByItemRating = () => {
    if (isSorted) {
      originalData.sort((a, b) => {
        return a.rating - b.rating;
      });
      setIsSorted(false);
    } else {
      originalData.sort((a, b) => {
        return b.rating - a.rating;
      });
      setIsSorted(true);
    }
  };

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
      return setItemToLocalStorage("cart", JSON.stringify(cart));
    }
    let product = products.find(
      (product) => product.id === parseInt(e.target.id)
    );
    cart.push(product);
    return setItemToLocalStorage("cart", JSON.stringify(cart));
  };

  return (
    <div className="product-list">
      <ProductFilterBar sortByItemRating={sortByItemRating} />
      {products.map((product, index) => (
        <Paper className="product-card" key={index}>
          <div className="product-card-container">
            <img width="50" height="100" src={path + product.image + ".png"} />
            <div className="product-info-container">
              <p className="product-name">{product.productName}</p>
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
              <p>Price: {product.productPrice}€</p>
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
      <PageNumbersBar
        arrayLength={originalData.length}
        changePageNumber={changePageNumber}
        pageNumber={pageNumber}
      />
    </div>
  );
}
