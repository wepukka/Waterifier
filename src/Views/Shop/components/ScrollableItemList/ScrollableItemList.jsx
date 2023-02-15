import "./ScrollableItemList.css";
import { useEffect, useState } from "react";
import { Paper } from "@mui/material";
import {
  randomImageNumber,
  randomProductPrice,
  randomProductText,
} from "./helpers";

export default function ScrollableItemList() {
  const path = "src/assets/Bottles/bottle";
  const [products, setProducts] = useState([]);

  // Create random product array when page mounts
  const setProductArray = async () => {
    let temp = [];
    for (let i = 0; i <= 19; i++) {
      temp.push({
        id: i,
        productName: randomProductText(),
        productPrice: randomProductPrice(20),
        image: path + randomImageNumber(12) + ".png",
      });
    }
    setProducts(temp);
  };

  useEffect(() => {
    setProductArray();
  }, []);

  // Based on button id, add item to cart //
  const addToCart = (e) => {
    products.map((product) => {
      if (product.id == e.target.id) {
        // ADD TO CART //
      }
    });
  };

  return (
    <div className="scrollable-product-list">
      {products.length !== 0 &&
        products.map((product, index) => (
          <Paper className="product-card" key={index}>
            <img width="50" height="100" src={product.image} />
            <p>{product.productName}</p>
            <p style={{ marginTop: "auto" }}>Price: {product.productPrice}€</p>
            <button
              id={product.id}
              className="product-card-button"
              onClick={(e) => {
                addToCart(e);
              }}
            >
              ADD TO CART
            </button>
          </Paper>
        ))}
    </div>
  );
}
