import "./ProductList.css";
import { useEffect, useState } from "react";
import { Paper } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import {
  randomImageNumber,
  randomProductPrice,
  randomProductText,
  randomGoesWellWith,
} from "./generateProducts.jsx";
import StarRating from "./WaterRating/WaterRating";

export default function ProductList() {
  const path = "src/assets/Bottles/bottle";
  const [products, setProducts] = useState([]);

  // Create random product array when page mounts
  const createRandomProducts = async () => {
    let tempArr = [];
    for (let i = 0; i <= 19; i++) {
      tempArr.push({
        id: i,
        productName: randomProductText(),
        productPrice: randomProductPrice(20),
        image: path + randomImageNumber(12) + ".png",
        productDetails: {
          detail1: randomGoesWellWith(),
          detail2: randomGoesWellWith(),
          detail3: randomGoesWellWith(),
          detail4: randomGoesWellWith(),
        },
      });
    }
    setProducts(tempArr);
  };

  useEffect(() => {
    createRandomProducts();
  }, []);

  return (
    <div className="product-list">
      {products.length !== 0 &&
        products.map((product, index) => (
          <Paper className="product-card" key={index}>
            <div className="product-card-container">
              <img width="50" height="100" src={product.image} />
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
                <StarRating rating={Math.floor(Math.random() * 5) + 1} />
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
    </div>
  );
}
