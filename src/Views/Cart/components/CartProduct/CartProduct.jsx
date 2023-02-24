import("./CartProduct.css");
import { useState } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { LoadingCircle } from "../../../../components/LoadingCircle/LoadingCircle";

export default function CartProduct({
  product,
  isRemovingId,
  imagePath,
  changeQuantity,
}) {
  return (
    <div className="cart-product">
      <div className="cart-product-image">
        <img src={imagePath + product.image + ".png"} alt={product.name} />
      </div>
      <div className="cart-product-details">
        <p>{product.name}</p>
      </div>
      <div className="cart-product-action">
        <button
          className="cart-product-button"
          style={{ position: "relative" }}
          id={product.id}
          onClick={(e) => {
            changeQuantity(e.target.id, "decrease");
          }}
        >
          {isRemovingId === product.id ? (
            <LoadingCircle size="10px" borderWidth="5px" animationTime="0.8s" />
          ) : product.quantity === 1 ? (
            <DeleteForeverIcon />
          ) : (
            "-"
          )}
        </button>
        <p className="cart-product-quantity">{product.quantity}</p>
        <button
          className="cart-product-button"
          id={product.id}
          onClick={(e) => {
            changeQuantity(e.target.id, "increase");
          }}
        >
          +
        </button>
      </div>
      <div className="cart-product-price">
        {" x " + parseFloat(product.price).toFixed(2) + " €"}
      </div>
      <div className="cart-product-price-total">
        {(product.price * product.quantity).toFixed(2) + " €"}
      </div>
    </div>
  );
}
